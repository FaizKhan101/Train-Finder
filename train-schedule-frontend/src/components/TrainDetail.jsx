export default function TrainDetail({ train, onBackClick }) {
  return (
    <div className="card mt-4">
      <h5 className="card-header">{train.train_name}</h5>
      <div className="card-body">
        <h5 className="card-title text-primary">{train.train_number}</h5>
        <p className="card-text">
          Departure Days: [{train.departure_days.join(", ")}]
        </p>

        <h5 className="card-text">Routes</h5>
        <ol className="list-group list-group-numbered">
          {train.route.map((place) => (
            <li className="list-group-item flex-column " key={place.station}>
              {place.station} - Time: {place.arrival_time}
            </li>
          ))}
        </ol>

        <button
          onClick={() => onBackClick(false)}
          className="btn btn-primary mt-4"
        >
          Back
        </button>
      </div>
    </div>
  );
}
