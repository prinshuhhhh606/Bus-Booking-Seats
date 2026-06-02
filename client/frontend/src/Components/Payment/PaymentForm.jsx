import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentForm.css";

const PaymentForm = () => {
  const navigate = useNavigate();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (cardName.trim() === "" || cardNumber.length < 16 || cvv.length < 3) {
      navigate("/payment-failed");
      return;
    }

    // Success Navigate
    navigate("/payment-success");
  };

  return (
    <div className="payment-container">
      <form className="payment-card" onSubmit={handleSubmit}>
        <h2>Payment Details</h2>

        <input
          type="text"
          placeholder="Card Holder Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Card Number"
          maxLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <div className="row">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="CVV"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
