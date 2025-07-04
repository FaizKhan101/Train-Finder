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

  return;
}
