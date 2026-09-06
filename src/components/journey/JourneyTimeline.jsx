import Icon from "../common/Icon";
import "./JourneyTimeline.css";

export default function JourneyTimeline({ journey }) {
  return (
    <div className="timeline">
      {journey.legs.map((leg, i) => (
        <div className="timeline-item" key={i}>
          <span className="timeline-dot"><Icon name={leg.icon} size={12} /></span>
          <h4>{leg.label} {i === 0 ? `from ${journey.from}` : i === journey.legs.length - 1 ? `to ${journey.to}` : "Transfer"}</h4>
          <p className="place">
            {i === 0 ? journey.from : "Connecting point"} → {i === journey.legs.length - 1 ? journey.to : "Next transfer"}
          </p>
          <span className="time-badge">Segment {i + 1} of {journey.legs.length}</span>
        </div>
      ))}
    </div>
  );
}
