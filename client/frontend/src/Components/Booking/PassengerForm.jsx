import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import {
  isValidPhone,
  isValidAge,
  validateName,
} from "../../utils/validators";
import  "../Booking/PassengerForm.css";
const PassengerForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.age ||
      !formData.gender ||
      !formData.phone.trim()
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
          min="1"
          max="120"
        />

        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          maxLength="10"
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PassengerForm;
