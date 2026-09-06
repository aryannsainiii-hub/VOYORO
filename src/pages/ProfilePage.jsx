import { currentUser } from "../data/user";
import { destinations } from "../data/destinations";
import { useBooking } from "../context/BookingContext";
import ProfileHeader from "../components/profile/ProfileHeader";
import TravelStats from "../components/profile/TravelStats";
import SavedDestinations from "../components/profile/SavedDestinations";
import BookingCard from "../components/bookings/BookingCard";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { bookings, cancelBooking } = useBooking();
  const saved = destinations.filter((d) => currentUser.savedDestinations.includes(d.id));
  const recent = bookings.slice(0, 3);

  return (
    <div className="container profile-page">
      <ProfileHeader user={currentUser} />
      <TravelStats stats={currentUser.stats} />

      <div className="profile-section">
        <h3>Saved Destinations</h3>
        <SavedDestinations destinations={saved} />
      </div>

      <div className="profile-section">
        <h3>Recent Journeys</h3>
        {recent.length === 0 ? (
          <p>No journeys booked yet.</p>
        ) : (
          recent.map((b) => (
            <BookingCard key={b.id} booking={b} onCancel={cancelBooking} />
          ))
        )}
      </div>
    </div>
  );
}
