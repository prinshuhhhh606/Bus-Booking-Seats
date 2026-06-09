import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paymentService from "../../services/paymentService";
import "../Payment/PaymentForm.css";

const PaymentForm = () => {
  const navigate = useNavigate();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (
      cardName.trim() === "" ||
      cardNumber.length !== 16 ||
      cvv.length !== 3
    ) {
      navigate("/payment-failed");
      return;
    }

    try {
      setLoading(true);

      const paymentData = {
        cardName,
        cardNumber,
        expiry,
        cvv,
        amount: 500,
        currency: "INR",
      };

      const response = await paymentService.createPayment(paymentData);

      console.log("Payment Success:", response);

      navigate("/payment-success");
    } catch (error) {
      console.error("Payment Failed:", error);

      navigate("/payment-failed");
    } finally {
      setLoading(false);
    }
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

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
