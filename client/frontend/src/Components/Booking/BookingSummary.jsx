import React from "react";
import "./BookingSummary.css";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formateData";
import { calculateFare } from "../../utils/calculateFare";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { passenger, booking } = location.state || {};

  if (!passenger || !booking) {
    return <h2>No Booking Data Found</h2>;
  }

  // Fare calculate from utility
  const totalFare = calculateFare(
    booking.selectedSeats.length,
    booking.pricePerSeat,
  );

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
        <div className="route">
          <span>{booking.route.split("→")[0]}</span>
          <span>→</span>
          <span>{booking.route.split("→")[1]}</span>
        </div>

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
            <strong>Journey Date:</strong> {formatDate(booking.date)}
          </p>

          <p>
            <strong>Seats:</strong> {booking.selectedSeats.join(", ")}
          </p>

          <p>
            <strong>Total:</strong> ₹ {totalFare}
          </p>
        </div>

        <button className="confirm-btn" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
