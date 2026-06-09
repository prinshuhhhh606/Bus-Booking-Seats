import React from "react";
import "./BusCard.css";
import { formatDate } from "../../utils/formateData";

const BusCard = ({ bus, navigate }) => {
  return (
    <div className="bus-card">
      <h2>{bus.name}</h2>

      <p>{bus.type}</p>

      <p className="journey-date">{formatDate(bus.journeyDate)}</p>

      <h3>₹{bus.price}</h3>

      <button onClick={() => navigate(`/bus/${bus.id}`)}>View Seats</button>
    </div>
  );
};

export default BusCard;
