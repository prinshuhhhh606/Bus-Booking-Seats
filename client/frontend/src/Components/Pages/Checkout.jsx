import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate, useLocation } from "react-router-dom";
import { validateName, isValidPhone } from "../../utils/validators";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { passenger, booking } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: passenger?.fullName || "",
    phone: passenger?.phone || "",
  });

  if (!passenger || !booking) {
    return <h2>No Checkout Data Found</h2>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    if (!validateName(formData.fullName)) {
      alert("Please enter a valid name");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    navigate("/ticket", {
      state: {
        passenger: {
          ...passenger,
          fullName: formData.fullName,
          phone: formData.phone,
        },
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

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
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
