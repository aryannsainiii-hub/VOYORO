import Icon from "../common/Icon";
import Button from "../common/Button";
import { formatINR } from "../../utils/currency";
import { formatDate } from "../../utils/duration";
import "./ConfirmationScreen.css";

export default function ConfirmationScreen({ booking, onViewBookings, onHome }) {
  const { journey } = booking;

  return (
    <div className="confirmation">
      <div className="confirmation-check">
        <Icon name="check" size={34} strokeWidth={2.4} />
      </div>
      <h2>Booking Confirmed!</h2>
      <p className="sub">
        Your journey from {journey.from} to {journey.to} is booked. Get ready
        to explore.
      </p>

      <div className="confirmation-id">
        <div className="label">Booking ID</div>
        <div className="value">{booking.id}</div>
      </div>

      <div className="confirmation-summary">
        <div className="row"><span>Route</span><span>{journey.from} → {journey.to}</span></div>
        <div className="row"><span>Date</span><span>{formatDate(journey.date)}</span></div>
        <div className="row"><span>Passengers</span><span>{booking.passengers}</span></div>
        <div className="row"><span>Total Paid</span><span>{formatINR(booking.totalPrice)}</span></div>
      </div>

      <div className="confirmation-actions">
        <Button variant="secondary" onClick={onHome}>Back to Home</Button>
        <Button variant="primary" onClick={onViewBookings}>View My Bookings</Button>
      </div>
    </div>
  );
}
