import { useEffect, useState } from "react";
import { useRouter } from "../context/RouterContext";
import { useBooking } from "../context/BookingContext";
import BookingSteps from "../components/booking/BookingSteps";
import PassengerSelector from "../components/booking/PassengerSelector";
import PaymentOptions from "../components/booking/PaymentOptions";
import ConfirmationScreen from "../components/booking/ConfirmationScreen";
import JourneyTimeline from "../components/journey/JourneyTimeline";
import Icon from "../components/common/Icon";
import Button from "../components/common/Button";
import { formatINR } from "../utils/currency";
import "./BookingPage.css";

export default function BookingPage() {
  const { query, navigate } = useRouter();
  const { draftJourney, draftPassengers, setDraftPassengers, confirmBooking } = useBooking();
  const step = Number(query.step || "1");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (!draftJourney) navigate("/");
  }, [draftJourney, navigate]);

  if (!draftJourney) return null;

  const goToStep = (n) => navigate("/booking", { step: String(n) });

  const handleConfirm = () => {
    const booking = confirmBooking();
    setConfirmedBooking(booking);
    goToStep(4);
  };

  const total = draftJourney.pricePerPerson * draftPassengers * 1.08;

  return (
    <div className="container booking-page">
      <BookingSteps current={step} />

      <div className="booking-layout">
        <div className="booking-panel">
          {step === 1 && (
            <>
              <h3>Your Journey</h3>
              <JourneyTimeline journey={draftJourney} />
              <div className="booking-nav-row">
                <span />
                <Button variant="primary" onClick={() => goToStep(2)}>
                  Continue <Icon name="arrowRight" size={16} />
                </Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3>Passengers</h3>
              <PassengerSelector count={draftPassengers} onChange={setDraftPassengers} />
              <div className="booking-nav-row">
                <Button variant="ghost" onClick={() => goToStep(1)}>Back</Button>
                <Button variant="primary" onClick={() => goToStep(3)}>
                  Continue to Payment <Icon name="arrowRight" size={16} />
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3>Payment</h3>
              <PaymentOptions selected={paymentMethod} onSelect={setPaymentMethod} />
              <div className="booking-nav-row">
                <Button variant="ghost" onClick={() => goToStep(2)}>Back</Button>
                <Button variant="primary" onClick={handleConfirm}>
                  Confirm & Pay {formatINR(total)}
                </Button>
              </div>
            </>
          )}

          {step === 4 && confirmedBooking && (
            <ConfirmationScreen
              booking={confirmedBooking}
              onHome={() => navigate("/")}
              onViewBookings={() => navigate("/my-bookings")}
            />
          )}
        </div>

        {step !== 4 && (
          <div className="summary-card">
            <h4>Booking Summary</h4>
            <div className="summary-route">
              <Icon name="pin" size={14} /> {draftJourney.from} → {draftJourney.to}
            </div>
            <div className="summary-row"><span>Journey</span><span>{draftJourney.title}</span></div>
            <div className="summary-row"><span>Passengers</span><span>{draftPassengers}</span></div>
            <div className="summary-row"><span>Fare / person</span><span>{formatINR(draftJourney.pricePerPerson)}</span></div>
            <div className="summary-row total"><span>Total</span><span>{formatINR(total)}</span></div>
          </div>
        )}
      </div>
    </div>
  );
}
