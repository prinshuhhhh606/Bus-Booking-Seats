
import React from "react";
import "./BookingHistory.css";

const bookings = [
  {
    id: 1,
    route: "Delhi → Agra",
    date: "10 June 2026",
    amount: "₹1200"
  },
  {
    id: 2,
    route: "Mumbai → Pune",
    date: "12 June 2026",
    amount: "₹900"
  },
  {
    id: 3,
    route: "Jaipur → Udaipur",
    date: "15 June 2026",
    amount: "₹1500"
  }
];

const BookingHistory = () => {
  return (
    <div className="history-container">
      <h2>Booking History</h2>

      {bookings.map((booking) => (
        <div className="history-card" key={booking.id}>
          <div>
            <h3>{booking.route}</h3>
            <p>{booking.date}</p>
          </div>

          <span>{booking.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;




