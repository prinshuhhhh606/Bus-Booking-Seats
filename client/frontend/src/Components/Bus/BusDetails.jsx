import React from "react";
import "./BusDetails.css";
import { formatDate } from "../../utils/formateData";

const BusDetails = () => {
  const bus = {
    name: "Raj Travels",
    type: "AC Sleeper",
    seatsLeft: 12,
    rating: 4.5,
    journeyDate: "2026-06-10",
  };

  return (
    <div className="bus-details">
      <h1>{bus.name}</h1>

      <div className="details-grid">
        <div className="detail-box">
          <h3>Bus Type</h3>
          <p>{bus.type}</p>
        </div>

        <div className="detail-box">
          <h3>Seats Left</h3>
          <p>{bus.seatsLeft}</p>
        </div>

        <div className="detail-box">
          <h3>Rating</h3>
          <p>{bus.rating} ⭐</p>
        </div>

        <div className="detail-box">
          <h3>Journey Date</h3>
          <p>{formatDate(bus.journeyDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
