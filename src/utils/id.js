export function generateBookingId() {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `VYR-${part()}-${part()}`;
}

export function generateId(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
