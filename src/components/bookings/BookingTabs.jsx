import "./BookingTabs.css";

const tabs = [
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" },
  { id: "cancelled", label: "Cancelled" },
];

export default function BookingTabs({ active, onChange, counts }) {
  return (
    <div className="booking-tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`booking-tab ${active === t.id ? "active" : ""}`}
          onClick={() => onChange(t.id)}
        >
          {t.label} {counts[t.id] ? `(${counts[t.id]})` : ""}
        </button>
      ))}
    </div>
  );
}
