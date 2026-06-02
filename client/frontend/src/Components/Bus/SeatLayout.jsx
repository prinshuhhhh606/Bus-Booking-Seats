import React from "react";
import "./SeatLayout.css";

const SeatLayout = () => {
  const seats = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="seat-layout">
      {seats.map((seat) => (
        <div className="seat" key={seat}>
          {seat}
        </div>
      ))}
    </div>
  );
};

export default SeatLayout;
