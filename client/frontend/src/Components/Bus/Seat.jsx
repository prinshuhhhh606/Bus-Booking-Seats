import React from "react";
import "./Seat.css";

const Seat = ({ number, selected }) => {
  return (
    <div className={`seat-box ${selected ? "selected" : ""}`}>{number}</div>
  );
};

export default Seat;
