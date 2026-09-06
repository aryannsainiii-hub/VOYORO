export const cities = [
  { code: "DEL", name: "New Delhi", country: "India" },
  { code: "GOI", name: "Goa", country: "India" },
  { code: "BOM", name: "Mumbai", country: "India" },
  { code: "BLR", name: "Bangalore", country: "India" },
  { code: "DXB", name: "Dubai", country: "UAE" },
  { code: "DPS", name: "Bali", country: "Indonesia" },
  { code: "ZRH", name: "Zurich", country: "Switzerland" },
  { code: "CDG", name: "Paris", country: "France" },
  { code: "JAI", name: "Jaipur", country: "India" },
  { code: "HYD", name: "Hyderabad", country: "India" },
];

export function cityLabel(code) {
  const c = cities.find((c) => c.code === code);
  return c ? `${c.name} (${c.code})` : code;
}
