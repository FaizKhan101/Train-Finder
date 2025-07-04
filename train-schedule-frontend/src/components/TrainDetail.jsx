import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth.context";

export default function TrainDetail() {
  const { isAuthenticated } = useContext(AuthContext);
  //access the train number from the url
  const [isEditing, setIsEditing] = useState(false);
  const { trainNumber } = useParams();
  const [train, setTrain] = useState();
  const navigate = useNavigate();

  function handleEdit() {
    setIsEditing(true);
  }

  function handleTimeChange(e, id) {
    train.route.forEach((route) => {
      if (route._id === id && route.arrival_time !== e.target.value) {
        route.new_arrival_time = e.target.value;
      }
    });
    setTrain({ ...train });
  }

  function handleSave() {
    setIsEditing(false);
    //    const train = TRAINS.find((train) => train.train_number === train_number);
    // train.route = route;

    fetch("http://localhost:3000/update-train", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(train),
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/trains/${trainNumber}/detail`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response.json();
      })
      .then((train) => {
        setTrain(train);
      });
  }, [trainNumber]);

  return train ? (
    <div className="card mt-4">
      <h5 className="card-header">{train.train_name}</h5>
      <div className="card-body">
        <h5 className="card-title text-primary">{train.train_number}</h5>
        <p className="card-text">
          Departure Days: [{train.departure_days.join(", ")}]
        </p>

        <h5 className="card-text">
          Routes{" "}
          <span
            onClick={isAuthenticated ? handleEdit : () => navigate("/auth")}
            className="pointer"
          >
            ✏️
          </span>
        </h5>
        <ol className="list-group list-group-numbered">
          {train.route.map((place) => (
            <li className="list-group-item flex-column " key={place.station}>
              {place.station} - Time:{" "}
              {isEditing ? (
                <input
                  className="form-control"
                  type="text"
                  value={place.new_arrival_time || place.arrival_time}
                  onChange={(e) => handleTimeChange(e, place._id)}
                />
              ) : (
                <span className="pointer" onClick={handleEdit}>
                  {place.arrival_time}
                </span>
              )}
              {!isEditing && place.new_arrival_time && (
                <span className="pointer text-danger" onClick={handleEdit}>
                  <b>
                    {" - "}
                    {place.new_arrival_time}
                  </b>
                </span>
              )}
            </li>
          ))}
        </ol>
        {isEditing && (
          <button onClick={handleSave} className="btn btn-warning mt-4 me-3">
            Save
          </button>
        )}

        <button onClick={() => navigate("/")} className="btn btn-primary mt-4">
          Back
        </button>
      </div>
    </div>
  ) : (
    <div className="card mt-4">
      <h5 className="card-header">Loading...</h5>
    </div>
  );
}
