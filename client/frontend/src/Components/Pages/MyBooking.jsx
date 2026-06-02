
import React from "react";
import "./MyBooking.css";

const MyBookings = () => {

  const bookings = [
    {
      id: 1,
      bus: "Raj Travels",
      route: "Indore → Bhopal",
      date: "25 May 2026",
      seat: "A1",
    },
    {
      id: 2,
      bus: "Verma Travels",
      route: "Delhi → Jaipur",
      date: "30 May 2026",
      seat: "B3",
    },
  ];

  return (
    <div className="bookings-page">

      <h1>My Bookings</h1>

      <div className="booking-list">

        {bookings.map((booking) => (

          <div className="booking-card" key={booking.id}>

            <h2>{booking.bus}</h2>

            <p>{booking.route}</p>

            <p>{booking.date}</p>

            <span>Seat: {booking.seat}</span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default MyBookings;

