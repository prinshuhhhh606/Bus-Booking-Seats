import React from "react";
import "./BookingSummary.css";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const location = useLocation();

  const navigate = useNavigate();

  // DATA FROM PassengerForm

  const { passenger, booking } = location.state || {};

  // SAFETY CHECK

  if (!passenger || !booking) {
    return <h2>No Booking Data Found</h2>;
  }

  // CONFIRM BOOKING

  const handleConfirmBooking = () => {
    navigate("/checkout", {
      state: {
        passenger,
        booking,
      },
    });
  };

  return (
    <div className="summary-container">
      <h2>Booking Summary</h2>

      <div className="summary-card">
        {/* ROUTE */}

        <div className="route">
          <span>{booking.route.split("→")[0]}</span>

          <span>→</span>

          <span>{booking.route.split("→")[1]}</span>
        </div>

        {/* DETAILS */}

        <div className="summary-details">
          <p>
            <strong>Passenger:</strong> {passenger.fullName}
          </p>

          <p>
            <strong>Age:</strong> {passenger.age}
          </p>

          <p>
            <strong>Gender:</strong> {passenger.gender}
          </p>

          <p>
            <strong>Phone:</strong> {passenger.phone}
          </p>

          <p>
            <strong>Bus:</strong> {booking.busName}
          </p>

          <p>
            <strong>Seats:</strong> {booking.selectedSeats.join(", ")}
          </p>

          <p>
            <strong>Total:</strong> ₹ {booking.totalPrice}
          </p>
        </div>

        {/* BUTTON */}

        <button className="confirm-btn" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
