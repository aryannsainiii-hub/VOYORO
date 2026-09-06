import { generateJourneys } from "./journeys";

// Two demo bookings so "My Bookings" and the Profile page feel populated
// the very first time the app runs, before the user books anything.
const demoJourney1 = generateJourneys({
  transport: "flights",
  from: "New Delhi (DEL)",
  to: "Goa (GOI)",
  date: "2026-10-12",
  travellers: 2,
})[0];

const demoJourney2 = generateJourneys({
  transport: "trains",
  from: "Mumbai (BOM)",
  to: "Bangalore (BLR)",
  date: "2026-06-02",
  travellers: 1,
})[1];

export const seedBookings = [
  {
    id: "VYR-8K2P-QF31",
    journey: demoJourney1,
    passengers: 2,
    status: "upcoming",
    bookedAt: "2026-09-01T10:20:00.000Z",
    totalPrice: demoJourney1.price,
  },
  {
    id: "VYR-3R9L-ZX02",
    journey: demoJourney2,
    passengers: 1,
    status: "completed",
    bookedAt: "2026-05-20T08:00:00.000Z",
    totalPrice: demoJourney2.price,
  },
];
