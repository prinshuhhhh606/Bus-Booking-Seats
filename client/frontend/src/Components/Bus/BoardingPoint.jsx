import React from "react";
import "./BoardingPoints.css";

const BoardingPoints = () => {
  const points = ["Vijay Nagar", "Palasia", "Sarwate Bus Stand", "BhanwarKuan"];

  return (
    <div className="boarding-points">
      <h2>Boarding Points</h2>

      <div className="points-list">
        {points.map((point, index) => (
          <div className="point-card" key={index}>
            <h3>{point}</h3>

            <p>Pickup Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardingPoints;
