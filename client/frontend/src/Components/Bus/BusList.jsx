import React from "react";
import BusCard from "./BusCard";

const BusList = ({ buses, navigate }) => {
  return (
    <div className="bus-list">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} navigate={navigate} />
      ))}
    </div>
  );
};

export default BusList;
