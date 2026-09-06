import "./PassengerSelector.css";

export default function PassengerSelector({ count, onChange }) {
  const passengers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="passenger-list">
      {passengers.map((p) => (
        <div className="passenger-item" key={p}>
          <div>
            <h4>Traveller {p}</h4>
            <p>Adult · Details captured at check-in (demo)</p>
          </div>
        </div>
      ))}

      <div className="passenger-item">
        <div>
          <h4>Total travellers</h4>
          <p>Adjust the number of passengers for this journey</p>
        </div>
        <div className="stepper">
          <button onClick={() => onChange(Math.max(1, count - 1))}>−</button>
          <span>{count}</span>
          <button onClick={() => onChange(Math.min(9, count + 1))}>+</button>
        </div>
      </div>
    </div>
  );
}
