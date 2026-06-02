import React from "react";
import "./BusDetails.css";

const BusDetails = () => {
  return (
    <div className="bus-details">
      <h1>Raj Travels</h1>

      <div className="details-grid">
        <div className="detail-box">
          <h3>Bus Type</h3>
          <p>AC Sleeper</p>
        </div>

        <div className="detail-box">
          <h3>Seats Left</h3>
          <p>12</p>
        </div>

        <div className="detail-box">
          <h3>Rating</h3>
          <p>4.5 ⭐</p>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
