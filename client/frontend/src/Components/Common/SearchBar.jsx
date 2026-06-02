import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(searchData);
    }

    console.log(searchData);

    // ✅ NAVIGATE HERE
    navigate("/search-buses");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      {/* FROM */}
      <div className="search-input-group">
        <label>From</label>

        <input
          type="text"
          name="from"
          placeholder="Enter Departure City"
          value={searchData.from}
          onChange={handleChange}
          required
        />
      </div>

      {/* TO */}
      <div className="search-input-group">
        <label>To</label>

        <input
          type="text"
          name="to"
          placeholder="Enter Destination City"
          value={searchData.to}
          onChange={handleChange}
          required
        />
      </div>

      {/* DATE */}
      <div className="search-input-group">
        <label>Date</label>

        <input
          type="date"
          name="date"
          value={searchData.date}
          min={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
          required
        />
      </div>

      {/* BUTTON */}
      <button type="submit" className="searchbar-btn">
        Search Buses
      </button>
    </form>
  );
};

export default SearchBar;
