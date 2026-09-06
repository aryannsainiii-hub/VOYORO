import Icon from "../common/Icon";
import "./BookingSteps.css";

const steps = [
  { id: 1, label: "Journey" },
  { id: 2, label: "Passengers" },
  { id: 3, label: "Payment" },
  { id: 4, label: "Confirmation" },
];

export default function BookingSteps({ current }) {
  return (
    <div className="booking-steps">
      {steps.map((s, i) => (
        <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            className={`booking-step ${
              current === s.id ? "active" : current > s.id ? "done" : ""
            }`}
          >
            <span className="num">
              {current > s.id ? <Icon name="check" size={13} /> : s.id}
            </span>
            <span className="label">{s.label}</span>
          </div>
          {i < steps.length - 1 && <span className="booking-step-connector" />}
        </div>
      ))}
    </div>
  );
}
