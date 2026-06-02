import React from "react";
import "./PaymentForm.css";

const PaymentSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark">✔</div>
        <h1>Payment Successful</h1>
        <p>Your payment has been processed successfully.</p>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
