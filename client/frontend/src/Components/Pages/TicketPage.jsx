import React, { useState } from "react";
import "../Pages/TicketPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import { isValidPhone,isValidAge, validateName } from "../../utils/validators";

const PassengerForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state;

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.age ||
      !formData.gender ||
      !formData.phone
    ) {
      alert("Please fill all details");
      return;
    }

    if (!validateName(formData.fullName)) {
      alert("Enter a valid name");
      return;
    }

    if (!isValidAge(formData.age)) {
      alert("Enter a valid age");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    navigate("/booking-summary", {
      state: {
        passenger: formData,
        booking: bookingData,
      },
    });
  };

  return (
    <div className="form-container">
      <form className="passenger-form" onSubmit={handleSubmit}>
        <h2>Passenger Details</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PassengerForm;
