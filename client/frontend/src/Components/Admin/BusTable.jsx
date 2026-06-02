import "./BusTable.css";

function BusTable() {
  const buses = [
    {
      id: 1,
      busName: "Volvo Express",
      route: "Delhi - Jaipur",
      price: 800,
      seats: 40,
    },
    {
      id: 2,
      busName: "Rajdhani Travels",
      route: "Mumbai - Pune",
      price: 600,
      seats: 35,
    },
    {
      id: 3,
      busName: "City Rider",
      route: "Indore - Bhopal",
      price: 450,
      seats: 30,
    },
  ];

  return (
    <div className="table-container">
      <h2>Bus Management</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Bus Name</th>
            <th>Route</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.busName}</td>
              <td>{bus.route}</td>
              <td>₹{bus.price}</td>
              <td>{bus.seats}</td>
              <td>
                <button className="edit-btn">Edit</button>

                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusTable;
