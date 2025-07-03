import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrainForm() {
  const navigate = useNavigate();
  const [train, setTrain] = useState({
    train_number: "",
    train_name: "",
    departure_time: "",
    departure_days: [],
    route: [],
  });

  const [newStation, setNewStation] = useState({
    station: "",
    arrival_time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrain((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDaysChange = (e) => {
    const { value, checked } = e.target;
    setTrain((prev) => ({
      ...prev,
      departure_days: checked
        ? [...prev.departure_days, value]
        : prev.departure_days.filter((day) => day !== value),
    }));
  };

  const addRouteStop = () => {
    if (!newStation.station || !newStation.arrival_time) return;
    // const id = { $oid: Math.random().toString(36).substr(2, 9) };
    setTrain((prev) => ({
      ...prev,
      route: [...prev.route, { ...newStation }],
    }));
    setNewStation({ station: "", arrival_time: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Train:", train);
    fetch("http://localhost:3000/train", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(train),
    });

    setTrain({
      train_number: "",
      train_name: "",
      departure_time: "",
      departure_days: [],
      route: [],
    });
    navigate("/");
    // Optionally send it to backend here via fetch/axios
  };

  console.log(train);

  const departureOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add New Train
      </h2>

      {/* Train Number */}
      <div className="flex flex-col space-y-1">
        <label className="block mb-1 font-semibold text-gray-700">
          Train Number
        </label>
        <input
          type="text"
          name="train_number"
          value={train.train_number}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Train Name */}
      <div>
        <label className="block mb-1 font-semibold text-gray-700">
          Train Name
        </label>
        <input
          type="text"
          name="train_name"
          value={train.train_name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Departure Time */}
      <div>
        <label className="block mb-1 font-semibold text-gray-700">
          Departure Time
        </label>
        <input
          type="time"
          name="departure_time"
          value={train.departure_time}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Departure Days */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Departure Days
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {departureOptions.map((day) => (
            <label
              key={day}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                value={day}
                checked={train.departure_days.includes(day)}
                onChange={handleDaysChange}
                className="accent-blue-500"
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      {/* Route Stop */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          Add Route Stop
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Station"
            value={newStation.station}
            onChange={(e) =>
              setNewStation({ ...newStation, station: e.target.value })
            }
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="time"
            placeholder="Arrival Time"
            value={newStation.arrival_time}
            onChange={(e) =>
              setNewStation({ ...newStation, arrival_time: e.target.value })
            }
            className="w-full sm:w-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={addRouteStop}
            className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        {/* Route List */}
        {train.route.length > 0 && (
          <ul className="mt-4 list-disc ml-6 text-sm text-gray-700">
            {train.route.map((stop, index) => (
              <li key={index}>
                {stop.station} at {stop.arrival_time}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4 text-center my-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Train
        </button>
      </div>
    </form>
  );
}
