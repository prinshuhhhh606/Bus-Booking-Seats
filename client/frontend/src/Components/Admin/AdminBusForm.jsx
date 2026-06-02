import { useState } from "react";
import "./AdminBusForm.css";

function AddBusForm() {
  const [bus, setBus] = useState({
    busName: "",
    route: "",
    price: "",
    seats: "",
  });

  const handleChange = (e) => {
    setBus({
      ...bus,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bus);
  };

  return (
    <div className="form-container">
      <h2>Add New Bus</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="busName"
          placeholder="Bus Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="route"
          placeholder="Route"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Ticket Price"
          onChange={handleChange}
        />

        <input
          type="number"
          name="seats"
          placeholder="Total Seats"
          onChange={handleChange}
        />

        <button type="submit">Add Bus</button>
      </form>
    </div>
  );
}

export default AddBusForm;
