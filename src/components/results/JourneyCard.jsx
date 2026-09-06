import Icon from "../common/Icon";
import Button from "../common/Button";
import { formatDuration } from "../../utils/duration";
import { formatINR } from "../../utils/currency";
import "./JourneyCard.css";

export default function JourneyCard({ journey, onView }) {
  return (
    <div className={`journey-card ${journey.premium ? "premium" : ""}`}>
      <div className="journey-card-top">
        <div>
          <span className="journey-badge">
            <Icon name={journey.match ? "bolt" : "tag"} size={12} />
            {journey.badge}
            {journey.match ? ` · ${journey.match}% Match` : ""}
          </span>
          <h3 className="journey-title">{journey.title}</h3>
          <div className="journey-rating">
            <span className="star-icon"><Icon name="star" size={13} /></span>
            {journey.rating.toFixed(1)} rating
          </div>
        </div>
        <div className="journey-price-block">
          <div className="journey-price">{formatINR(journey.price)}</div>
          <div className="journey-price-sub">for {journey.travellers} traveller{journey.travellers > 1 ? "s" : ""}</div>
        </div>
      </div>

      <div className="journey-route">
        {journey.legs.map((leg, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="route-leg">
              <Icon name={leg.icon} size={14} /> {leg.label}
            </span>
            {i < journey.legs.length - 1 && (
              <span className="route-connector"><Icon name="arrowRight" size={14} /></span>
            )}
          </span>
        ))}
      </div>

      <div className="journey-card-bottom">
        <span className="journey-duration">
          <Icon name="clock" size={14} /> Total Duration: {formatDuration(journey.durationMin)}
        </span>
        <Button variant={journey.premium ? "primary" : "secondary"} onClick={() => onView(journey)}>
          {journey.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
