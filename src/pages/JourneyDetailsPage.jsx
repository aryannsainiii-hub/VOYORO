import { useEffect, useState } from "react";
import { useRouter } from "../context/RouterContext";
import { useBooking } from "../context/BookingContext";
import JourneyTimeline from "../components/journey/JourneyTimeline";
import PriceBreakdown from "../components/journey/PriceBreakdown";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import "./JourneyDetailsPage.css";

export default function JourneyDetailsPage() {
  const { navigate } = useRouter();
  const { selectedJourney, startBooking } = useBooking();
  const [passengers, setPassengers] = useState(selectedJourney?.travellers || 1);

  useEffect(() => {
    if (!selectedJourney) navigate("/");
  }, [selectedJourney, navigate]);

  if (!selectedJourney) return null;
  const journey = selectedJourney;

  const handleBook = () => {
    startBooking(journey, passengers);
    navigate("/booking", { step: "1" });
  };

  return (
    <div className="container jd-grid">
      <div className="jd-panel">
        <div className="jd-header">
          <div>
            <h1>{journey.title}</h1>
            <p className="jd-route-sub">{journey.from} → {journey.to} · {journey.badge}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate("/results")}>
            <Icon name="arrowRight" size={14} style={{ transform: "rotate(180deg)" }} /> Back to results
          </Button>
        </div>

        <JourneyTimeline journey={journey} />

        <div className="jd-passenger-row">
          <span>Passengers</span>
          <div className="stepper">
            <button onClick={() => setPassengers((p) => Math.max(1, p - 1))}>−</button>
            <span>{passengers}</span>
            <button onClick={() => setPassengers((p) => Math.min(9, p + 1))}>+</button>
          </div>
        </div>
      </div>

      <div className="jd-sticky">
        <PriceBreakdown journey={journey} passengers={passengers} />
        <Button variant="primary" block onClick={handleBook}>
          Continue to Booking <Icon name="arrowRight" size={16} />
        </Button>
      </div>
    </div>
  );
}
