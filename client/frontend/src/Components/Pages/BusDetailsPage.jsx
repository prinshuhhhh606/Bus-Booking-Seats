
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BusDetailsPage.css";

const BusDetailsPage = () => {
  const navigate = useNavigate();

  const bus = {
    id: 1,
    name: "Raj Travels",
    type: "AC Sleeper",
    from: "Indore",
    to: "Bhopal",
    departure: "08:00 PM",
    arrival: "02:00 AM",
    duration: "6h",
    price: 899,
    rating: 4.5,
    seatsLeft: 12,
    amenities: [
      "Charging Point",
      "WiFi",
      "Water Bottle",
      "Blanket",
      "Live Tracking",
    ],
  };

  const handleSeatSelection = () => {
    navigate("/seat-selection");
  };

  return (
    <div className="bus-details-page">
      <div className="bus-card">
        <div className="top-section">
          <div>
            <h1>{bus.name}</h1>
            <p className="bus-type">{bus.type}</p>
          </div>

          <div className="rating-box">
            ⭐ {bus.rating}
          </div>
        </div>

        <div className="route-section">
          <div className="time-box">
            <h2>{bus.departure}</h2>
            <p>{bus.from}</p>
          </div>

          <div className="duration-box">
            <p>{bus.duration}</p>
            <div className="line"></div>
          </div>

          <div className="time-box">
            <h2>{bus.arrival}</h2>
            <p>{bus.to}</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-card">
            <h3>Price</h3>
            <p>₹ {bus.price}</p>
          </div>

          <div className="detail-card">
            <h3>Seats Left</h3>
            <p>{bus.seatsLeft}</p>
          </div>
        </div>

        <div className="amenities-section">
          <h2>Amenities</h2>

          <div className="amenities-list">
            {bus.amenities.map((item, index) => (
              <span key={index} className="amenity-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <button className="select-seat-btn" onClick={handleSeatSelection}>
          Select Seats
        </button>
      </div>
    </div>
  );
};

export default BusDetailsPage;


