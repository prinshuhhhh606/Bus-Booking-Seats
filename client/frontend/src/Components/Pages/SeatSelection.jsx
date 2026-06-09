// SeatSelection.jsx

import React, { useState } from "react";
import "./SeatSelection.css";
import { useNavigate } from "react-router-dom";
import { calculateFare } from "../../utils/calculateFare";
import { generateSeatMap } from "../../utils/generateSeatMap";

const SeatSelection = () => {
  const navigate = useNavigate();

  const totalSeats = 40;
  const bookedSeats = [3, 7, 10, 15, 22];

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Generate seat numbers using utility
  const seats = generateSeatMap(totalSeats);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // Calculate fare using utility
  const totalPrice = calculateFare(selectedSeats.length, 799);

  // CONTINUE BUTTON
  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    navigate("/passenger-form", {
      state: {
        selectedSeats,
        totalPrice,
        busName: "Raj Travels",
        route: "Indore → Bhopal",
      },
    });
  };

  return (
    <div className="seat-page">
      {/* LEFT SIDE */}

      <div className="seat-layout-section">
        <div className="top-bar">
          <h1>Select Your Seats</h1>
          <p>Raj Travels • AC Sleeper</p>
        </div>

        {/* LEGEND */}

        <div className="legend">
          <div className="legend-item">
            <div className="seat available"></div>
            <span>Available</span>
          </div>

          <div className="legend-item">
            <div className="seat selected"></div>
            <span>Selected</span>
          </div>

          <div className="legend-item">
            <div className="seat booked"></div>
            <span>Booked</span>
          </div>
        </div>

        {/* SEAT GRID */}

        <div className="seat-grid">
          {seats.map((seatNumber) => {
            const isBooked = bookedSeats.includes(seatNumber);
            const isSelected = selectedSeats.includes(seatNumber);

            return (
              <div
                key={seatNumber}
                className={`seat
                  ${isBooked ? "booked" : ""}
                  ${isSelected ? "selected" : ""}
                `}
                onClick={() => handleSeatClick(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="booking-summary">
        <h2>Booking Summary</h2>

        <div className="summary-card">
          <p>
            <strong>Bus:</strong> Raj Travels
          </p>

          <p>
            <strong>Route:</strong> Indore → Bhopal
          </p>

          <p>
            <strong>Selected Seats:</strong>
          </p>

          <div className="selected-seat-list">
            {selectedSeats.length > 0 ? (
              selectedSeats.map((seat) => <span key={seat}>{seat}</span>)
            ) : (
              <p>No seats selected</p>
            )}
          </div>

          <div className="price-box">
            <h3>Total Price</h3>
            <h1>₹ {totalPrice}</h1>
          </div>

          {/* BUTTON */}

          <button className="checkout-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
