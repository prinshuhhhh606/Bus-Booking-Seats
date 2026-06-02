import React from "react";
import "./Checkout.css";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const location = useLocation();

  // DATA FROM BookingSummary

  const { passenger, booking } = location.state || {};

  // SAFETY CHECK

  if (!passenger || !booking) {
    return <h2>No Checkout Data Found</h2>;
  }

  // PAYMENT HANDLER

  const handlePayment = () => {
    // AFTER PAYMENT SUCCESS

    navigate("/ticket", {
      state: {
        passenger,
        booking,
      },
    });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>

        {/* PASSENGER DETAILS */}

        <div className="form-group">
          <label>Full Name</label>

          <input type="text" value={passenger.fullName} readOnly />
        </div>

        <div className="form-group">
          <label>Phone</label>

          <input type="text" value={passenger.phone} readOnly />
        </div>

        <div className="form-group">
          <label>Selected Seats</label>

          <input
            type="text"
            value={booking.selectedSeats.join(", ")}
            readOnly
          />
        </div>

        {/* PAYMENT BOX */}

        <div className="payment-box">
          <h2>Total Amount</h2>

          <h1>₹ {booking.totalPrice}</h1>
        </div>

        {/* BUTTON */}

        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Checkout;
