import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { seedBookings } from "../data/bookings";
import { generateBookingId } from "../utils/id";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  // Search criteria carried from the home search card to the results page
  const [search, setSearch] = useState({
    transport: "flights",
    from: "New Delhi (DEL)",
    to: "Goa (GOI)",
    date: "2026-10-12",
    travellers: 1,
  });

  // The journey currently being viewed / booked (survives across pages)
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [draftJourney, setDraftJourney] = useState(null);
  const [draftPassengers, setDraftPassengers] = useState(1);

  // Persisted bookings, seeded with a couple of demo entries on first run
  const [bookings, setBookings] = useLocalStorage("voyora-bookings", seedBookings);

  const startBooking = (journey, passengers = 1) => {
    setDraftJourney(journey);
    setDraftPassengers(passengers);
  };

  const confirmBooking = () => {
    if (!draftJourney) return null;
    const booking = {
      id: generateBookingId(),
      journey: draftJourney,
      passengers: draftPassengers,
      status: "upcoming",
      bookedAt: new Date().toISOString(),
      totalPrice: draftJourney.price * draftPassengers,
    };
    setBookings((prev) => [booking, ...prev]);
    return booking;
  };

  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b))
    );
  };

  return (
    <BookingContext.Provider
      value={{
        search,
        setSearch,
        selectedJourney,
        setSelectedJourney,
        draftJourney,
        draftPassengers,
        setDraftPassengers,
        startBooking,
        confirmBooking,
        bookings,
        cancelBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
