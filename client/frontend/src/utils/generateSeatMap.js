export function generateSeatMap(rows = 10) {
  const seats = [];

  for (let row = 1; row <= rows; row++) {
    seats.push({
      id: `${row}A`,
      status: "available",
    });

    seats.push({
      id: `${row}B`,
      status: "available",
    });

    seats.push({
      id: `${row}C`,
      status: "available",
    });

    seats.push({
      id: `${row}D`,
      status: "available",
    });
  }

  return seats;
}
