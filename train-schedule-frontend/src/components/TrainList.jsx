export default function TrainList({trains, onDetail}) {
    return <ol className="list-group list-group-numbered mt-4">
    {trains.map((train) => (
      <li
        key={train.train_number}
        className="list-group-item d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div
            className="fw-bold text-primary pointer"
            onClick={() => onDetail(train.train_number)}
          >
            {train.train_number}
          </div>
          {train.train_name}
        </div>
        <span className="badge text-bg-primary rounded mt-3">
          {train.departure_days.join(", ")}
        </span>
      </li>
    ))}
  </ol>
}