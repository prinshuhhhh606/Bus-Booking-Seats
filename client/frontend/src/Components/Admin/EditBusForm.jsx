import { useState } from "react";
import "./EditBusForm.css";

function EditBusForm() {
  const [bus, setBus] = useState({
    busName: "Volvo Express",
    route: "Delhi - Jaipur",
    price: 800,
    seats: 40,
  });

  const handleChange = (e) => {
    setBus({
      ...bus,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Bus:", bus);
  };

  return (
    <div className="edit-container">
      <h2>Edit Bus</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="busName"
          value={bus.busName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="route"
          value={bus.route}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={bus.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="seats"
          value={bus.seats}
          onChange={handleChange}
        />

        <button type="submit">Update Bus</button>
      </form>
    </div>
  );
}

export default EditBusForm;
