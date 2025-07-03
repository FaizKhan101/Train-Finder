import { useNavigate } from "react-router-dom";

export default function TrainList({ trains }) {
  const navigate = useNavigate();
  function goToDetail(trainNumber) {
    navigate(`/train/${trainNumber}`);
  }

  return (
    <ol className="list-group list-group-numbered mt-4">
      {trains.map((train) => (
        <li
          onClick={() => goToDetail(train.train_number)}
          key={train.train_number}
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold text-primary pointer">
              {train.train_number}
            </div>
            <span className="text-dark">{train.train_name}</span>
          </div>
          <span className="badge text-bg-primary rounded mt-3">
            {train.departure_days.map((day) => day.slice(0, 3)).join(", ")}
          </span>
        </li>
      ))}
    </ol>
  );
}
