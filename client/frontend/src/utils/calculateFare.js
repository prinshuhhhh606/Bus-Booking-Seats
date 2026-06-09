export function calculateFare(baseFare, seats = 1, taxPercent = 5) {
  const subtotal = baseFare * seats;
  const tax = (subtotal * taxPercent) / 100;
  const total = subtotal + tax;

  return {
    subtotal,
    tax,
    total,
  };
}
