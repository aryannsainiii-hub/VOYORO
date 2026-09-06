import { generateId } from "../utils/id";

// Mock journey generator — produces realistic-looking, deterministic-ish
// results for any route + transport type combination, since this is a
// frontend-only prototype with no real inventory API behind it.

const MODE_META = {
  flight: { icon: "plane", label: "Flight" },
  train: { icon: "train", label: "Train" },
  bus: { icon: "bus", label: "Bus" },
  cab: { icon: "cab", label: "Cab" },
  ferry: { icon: "ferry", label: "Ferry" },
};

const TEMPLATES = {
  flights: [
    {
      title: "Fastest Journey",
      badge: "AI Recommended",
      legs: ["cab", "flight", "cab"],
      durationMin: 320,
      basePrice: 8499,
      rating: 4.7,
      match: 92,
    },
    {
      title: "Direct & Simple",
      badge: "Fastest",
      legs: ["flight"],
      durationMin: 150,
      basePrice: 6299,
      rating: 4.5,
    },
    {
      title: "Premium Experience",
      badge: "Premium",
      legs: ["cab", "flight", "cab"],
      durationMin: 370,
      basePrice: 14999,
      rating: 4.9,
      premium: true,
    },
    {
      title: "Budget Layover",
      badge: "Cheapest",
      legs: ["cab", "flight", "flight", "cab"],
      durationMin: 540,
      basePrice: 4999,
      rating: 4.1,
    },
  ],
  trains: [
    {
      title: "Comfortable & Affordable",
      badge: "Best Value",
      legs: ["bus", "train"],
      durationMin: 870,
      basePrice: 2499,
      rating: 4.4,
    },
    {
      title: "Express Route",
      badge: "Fastest",
      legs: ["train"],
      durationMin: 620,
      basePrice: 3199,
      rating: 4.3,
    },
    {
      title: "Overnight Sleeper",
      badge: "AI Recommended",
      legs: ["cab", "train"],
      durationMin: 780,
      basePrice: 2899,
      rating: 4.6,
      match: 88,
    },
  ],
  buses: [
    {
      title: "Volvo Multi-Axle",
      badge: "Best Value",
      legs: ["bus"],
      durationMin: 900,
      basePrice: 1699,
      rating: 4.2,
    },
    {
      title: "Sleeper Coach",
      badge: "Cheapest",
      legs: ["bus"],
      durationMin: 960,
      basePrice: 1299,
      rating: 3.9,
    },
    {
      title: "Premium Recliner",
      badge: "Premium",
      legs: ["cab", "bus"],
      durationMin: 880,
      basePrice: 2199,
      rating: 4.5,
      premium: true,
    },
  ],
  cabs: [
    {
      title: "Sedan — Door to Door",
      badge: "AI Recommended",
      legs: ["cab"],
      durationMin: 260,
      basePrice: 3499,
      rating: 4.6,
      match: 90,
    },
    {
      title: "SUV — Extra Space",
      badge: "Best Value",
      legs: ["cab"],
      durationMin: 260,
      basePrice: 4299,
      rating: 4.7,
    },
    {
      title: "Luxury Cab",
      badge: "Premium",
      legs: ["cab"],
      durationMin: 250,
      basePrice: 7999,
      rating: 4.9,
      premium: true,
    },
  ],
  ferries: [
    {
      title: "Coastal Cruiser",
      badge: "Best Value",
      legs: ["cab", "ferry"],
      durationMin: 300,
      basePrice: 1899,
      rating: 4.3,
    },
    {
      title: "Express Ferry",
      badge: "Fastest",
      legs: ["ferry"],
      durationMin: 150,
      basePrice: 2399,
      rating: 4.4,
    },
    {
      title: "Luxury Island Hop",
      badge: "Premium",
      legs: ["cab", "ferry", "cab"],
      durationMin: 340,
      basePrice: 5499,
      rating: 4.8,
      premium: true,
    },
  ],
};

export function generateJourneys({ transport, from, to, date, travellers = 1 }) {
  const templates = TEMPLATES[transport] || TEMPLATES.flights;

  return templates.map((tpl) => {
    const legs = tpl.legs.map((mode, i) => ({
      mode,
      ...MODE_META[mode],
      from: i === 0 ? from : "—",
      to: i === tpl.legs.length - 1 ? to : "—",
    }));

    return {
      id: generateId("jrn"),
      transport,
      title: tpl.title,
      badge: tpl.badge,
      legs,
      durationMin: tpl.durationMin,
      price: tpl.basePrice + (travellers - 1) * Math.round(tpl.basePrice * 0.85),
      pricePerPerson: tpl.basePrice,
      rating: tpl.rating,
      match: tpl.match,
      premium: !!tpl.premium,
      from,
      to,
      date,
      travellers,
      ctaLabel: tpl.premium ? "Experience Luxury →" : "View Journey →",
    };
  });
}

export const sortOptions = [
  { id: "best-value", label: "Best Value" },
  { id: "fastest", label: "Fastest" },
  { id: "cheapest", label: "Cheapest" },
  { id: "premium", label: "Premium" },
];

export function sortJourneys(journeys, sortId) {
  const list = [...journeys];
  switch (sortId) {
    case "fastest":
      return list.sort((a, b) => a.durationMin - b.durationMin);
    case "cheapest":
      return list.sort((a, b) => a.price - b.price);
    case "premium":
      return list.sort((a, b) => Number(b.premium) - Number(a.premium) || b.price - a.price);
    default:
      return list.sort((a, b) => b.rating - a.rating);
  }
}
