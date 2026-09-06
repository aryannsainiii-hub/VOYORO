import { formatINR } from "../../utils/currency";
import "./PriceBreakdown.css";

export default function PriceBreakdown({ journey, passengers }) {
  const base = journey.pricePerPerson * passengers;
  const taxes = Math.round(base * 0.06);
  const serviceFee = Math.round(base * 0.02);
  const total = base + taxes + serviceFee;

  return (
    <div className="price-breakdown">
      <h4>Price Breakdown</h4>
      <div className="price-row">
        <span>Fare × {passengers} traveller{passengers > 1 ? "s" : ""}</span>
        <span>{formatINR(base)}</span>
      </div>
      <div className="price-row">
        <span>Taxes & fees</span>
        <span>{formatINR(taxes)}</span>
      </div>
      <div className="price-row">
        <span>Service charge</span>
        <span>{formatINR(serviceFee)}</span>
      </div>
      <div className="price-row total">
        <span>Total</span>
        <span>{formatINR(total)}</span>
      </div>
    </div>
  );
}
