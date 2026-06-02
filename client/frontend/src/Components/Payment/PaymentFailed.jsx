import React from "react";
import "./PaymentFailed.css";

const PaymentFailed = () => {
  return (
    <div className="failed-container">
      <div className="failed-card">
        <div className="crossmark">✖</div>
        <h1>Payment Failed</h1>
        <p>Something went wrong while processing your payment.</p>
        <button>Try Again</button>
      </div>
    </div>
  );
};

export default PaymentFailed;
