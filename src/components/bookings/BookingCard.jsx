import Icon from "../common/Icon";
import Button from "../common/Button";
import { formatDate } from "../../utils/duration";
import { formatINR } from "../../utils/currency";
import "./BookingCard.css";

export default function BookingCard({ booking, onCancel }) {
  const { journey } = booking;

  return (
    <div className="booking-card">
      <div>
        <div className="booking-card-route">
          <Icon name={journey.legs[0].icon} size={16} />
          {journey.from} <Icon name="arrowRight" size={14} /> {journey.to}
        </div>
        <div className="booking-card-meta">
          <span><Icon name="calendar" size={13} /> {formatDate(journey.date)}</span>
          <span><Icon name="users" size={13} /> {booking.passengers} traveller{booking.passengers > 1 ? "s" : ""}</span>
          <span><Icon name="ticket" size={13} /> {booking.id}</span>
        </div>
      </div>

      <div className="booking-card-right">
        <span className={`booking-status ${booking.status}`}>{booking.status}</span>
        <span className="booking-card-price">{formatINR(booking.totalPrice)}</span>
        {booking.status === "upcoming" && (
          <Button variant="ghost" size="sm" onClick={() => onCancel(booking.id)}>
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}
