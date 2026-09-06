import { useState, useMemo } from "react";
import { useBooking } from "../context/BookingContext";
import { useRouter } from "../context/RouterContext";
import BookingTabs from "../components/bookings/BookingTabs";
import BookingCard from "../components/bookings/BookingCard";
import Button from "../components/common/Button";
import "./MyBookingsPage.css";

export default function MyBookingsPage() {
  const { bookings, cancelBooking } = useBooking();
  const { navigate } = useRouter();
  const [tab, setTab] = useState("upcoming");

  const counts = useMemo(
    () => ({
      upcoming: bookings.filter((b) => b.status === "upcoming").length,
      completed: bookings.filter((b) => b.status === "completed").length,
      cancelled: bookings.filter((b) => b.status === "cancelled").length,
    }),
    [bookings]
  );

  const filtered = bookings.filter((b) => b.status === tab);

  return (
    <div className="container bookings-page">
      <div className="section-head">
        <div>
          <h2>My Bookings</h2>
          <p>Track and manage all your Voyora journeys</p>
        </div>
      </div>

      <BookingTabs active={tab} onChange={setTab} counts={counts} />

      {filtered.length === 0 ? (
        <div className="bookings-empty">
          <h3>No {tab} bookings</h3>
          <p>Your {tab} journeys will show up here.</p>
          <div style={{ marginTop: 16 }}>
            <Button variant="primary" onClick={() => navigate("/")}>Plan a Journey</Button>
          </div>
        </div>
      ) : (
        filtered.map((b) => (
          <BookingCard key={b.id} booking={b} onCancel={cancelBooking} />
        ))
      )}
    </div>
  );
}
