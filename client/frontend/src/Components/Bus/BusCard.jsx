import React from "react";
import "./BusCard.css";

const BusCard = ({ bus, navigate }) => {
  return (
    <div className="bus-card">
      <h2>{bus.name}</h2>

      <p>{bus.type}</p>

      <h3>₹{bus.price}</h3>

      <button onClick={() => navigate(`/bus/${bus.id}`)}>View Seats</button>
    </div>
  );
};

export default BusCard;
