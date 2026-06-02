

function BookingTable() {
  const bookings = [
    {
      id: 101,
      customer: "Rahul",
      bus: "Volvo Express",
      seats: 2,
      amount: 1600,
    },
    {
      id: 102,
      customer: "Aman",
      bus: "Rajdhani Travels",
      seats: 1,
      amount: 600,
    },
    {
      id: 103,
      customer: "Priya",
      bus: "City Rider",
      seats: 3,
      amount: 1350,
    },
  ];

  return (
    <div className="booking-container">
      <h2>Booking Management</h2>

      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Bus</th>
            <th>Seats</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.bus}</td>
              <td>{booking.seats}</td>
              <td>₹{booking.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
