# Voyora — One Journey. Every Possibility.

A premium, frontend-only, multi-transport travel booking platform built with
React + Vite. Compare and book flights, trains, buses, cabs and ferries
through a single, cinematic interface — with dark/light themes, a full
search-to-booking flow, and persistent mock bookings via `localStorage`.

This is a **frontend prototype**: there is no backend, no auth, and no real
payment gateway. All data (routes, prices, journeys, bookings, the user
profile) is mocked in `src/data/`.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── layout/     Navbar, mobile nav drawer, footer
│   ├── home/       Hero, search card, category cards, smart journeys, destinations, CTA
│   ├── results/    Results header, filter/sort bar, journey card
│   ├── journey/    Journey timeline, price breakdown
│   ├── booking/    Step indicator, passenger selector, payment options, confirmation
│   ├── bookings/   Booking tabs + booking card (My Bookings page)
│   ├── profile/    Profile header, travel stats, saved destinations
│   └── common/     Icon set (inline SVG), Button, ThemeToggle
├── context/        ThemeContext, RouterContext, BookingContext
├── data/           All mock data (transport types, cities, destinations, journeys, bookings, user)
├── hooks/          useLocalStorage
├── pages/          One file per route (Home, Results, Journey Details, Booking, My Bookings, Profile, Explore, Rewards, Support)
├── utils/          Currency, date/duration and ID formatting helpers
├── App.jsx         Route table + provider wiring
└── main.jsx        Entry point
```

## Notable implementation choices

- **No external UI/router/icon libraries.** The build environment this
  project was generated in had no package-registry access, so instead of
  `react-router-dom` there's a small custom router
  (`src/context/RouterContext.jsx`) using the History API, and instead of an
  icon library there's a dependency-free inline-SVG `Icon` component
  (`src/components/common/Icon.jsx`). Both are drop-in replaceable — e.g. if
  you'd rather use `react-router-dom` or `lucide-react`, `npm install` them
  and swap the imports; nothing else in the app needs to change structurally.
- **Theme system** lives entirely in CSS custom properties (`src/index.css`),
  toggled via a `data-theme` attribute on `<html>` and persisted to
  `localStorage` through `ThemeContext`.
- **Bookings persist** in `localStorage` under the key `voyora-bookings` via
  `BookingContext`, seeded with two demo bookings so My Bookings/Profile
  aren't empty on first run.
- **Journeys are generated**, not hardcoded, by `src/data/journeys.js` —
  `generateJourneys({ transport, from, to, date, travellers })` returns a
  realistic set of options (AI Recommended / Fastest / Cheapest / Premium)
  for whatever route the user searches.

## Pages / routes

| Path | Page |
|---|---|
| `/` | Home |
| `/explore` | Explore |
| `/results` | Search results (reads `?transport&from&to&date&travellers`) |
| `/journey` | Journey details |
| `/booking` | Booking flow (`?step=1..4`) |
| `/my-bookings` | My Bookings dashboard |
| `/profile` | User profile |
| `/rewards` | Rewards |
| `/support` | Support / FAQ ||

## Fonts

Uses Google Fonts (`Fraunces` for display headings, `Inter` for body text),
loaded via `<link>` tags in `index.html`.
