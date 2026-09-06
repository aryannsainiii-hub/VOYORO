import Icon from "../common/Icon";
import "./TravelStats.css";

export default function TravelStats({ stats }) {
  const items = [
    { icon: "compass", value: stats.tripsCompleted, label: "Trips Completed" },
    { icon: "globe", value: stats.countriesVisited, label: "Countries Visited" },
    { icon: "star", value: stats.milesEarned.toLocaleString("en-IN"), label: "Miles Earned" },
    { icon: "leaf", value: `${stats.carbonSavedKg} kg`, label: "Carbon Saved" },
  ];

  return (
    <div className="travel-stats">
      {items.map((it) => (
        <div className="stat-card" key={it.label}>
          <span className="icon-circle"><Icon name={it.icon} size={17} /></span>
          <b>{it.value}</b>
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
