import React from "react";
import "./SearchBuses.css";
import { useNavigate } from "react-router-dom";

import BusList from "../Bus/BusList";

const SearchBuses = () => {
  const navigate = useNavigate();

  const buses = [
    {
      id: 1,
      name: "Raj Travels",
      type: "AC Sleeper",
      departure: "10:00 PM",
      arrival: "05:30 AM",
      duration: "7h",
      price: 799,
      seats: 12,
      rating: 4.5,
    },

    {
      id: 2,
      name: "Verma Travels",
      type: "Volvo Multi-Axle",
      departure: "11:15 PM",
      arrival: "06:45 AM",
      duration: "7h",
      price: 999,
      seats: 7,
      rating: 4.7,
    },

    {
      id: 3,
      name: "Sharma Express",
      type: "Non AC Sleeper",
      departure: "09:30 PM",
      arrival: "04:30 AM",
      duration: "7h",
      price: 599,
      seats: 20,
      rating: 4.2,
    },
  ];

  return (
    <div className="search-buses">
      {/* TOP SECTION */}

      <div className="search-header">
        <div>
          <h1>Available Buses</h1>

          <p>Indore → Bhopal | 25 May 2026</p>
        </div>

        <button className="modify-btn">Modify Search</button>
      </div>

      {/* BUS LIST COMPONENT */}

      <BusList buses={buses} navigate={navigate} />
    </div>
  );
};

export default SearchBuses;
