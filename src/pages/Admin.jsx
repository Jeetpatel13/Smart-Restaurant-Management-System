import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";

function Admin() {
  const data = useContext(AppContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Starters");
  const [price, setPrice] = useState("");

  function AddItem(e) {
    e.preventDefault();
    data.setMenu([
      ...data.menu,
      { id: Date.now(), name: name, category: category, price: Number(price) },
    ]);
    setName("");
    setCategory("");
    setPrice("");
  }

  function removeItem(id) {
    data.setMenu(data.menu.filter((item) => item.id != id));
  }

  function orderStatus(id, status) {
    data.setOrder(
      data.order.map((e) => (e.id == id ? { ...e, status: status } : e)),
    );
  }

  function reservationStatus(id, status) {
    data.setReservations(
      data.reservations.map((r) => (r.id == id ? { ...r, status: status } : r)),
    );
  }

  return (
    <div className="admin-page">
      <h1>Admin</h1>

      <div className="admin">
        <div className="column">
          <h2>Menu</h2>
          <br />
          <form onSubmit={AddItem}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Starters</option>
              <option>Main</option>
              <option>Desserts</option>
              <option>Drinks</option>
            </select>
            <br />
            <input
              type="Number"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button type="submit">Add Item</button>
          </form>

          {data.menu.map((m) => (
            <div key={m.id} className="menu-card">
              <img src={m.image} />
              <p>
                {m.name} - {m.price} - {m.category}
              </p>
              <button onClick={() => removeItem(m.id)}>Remove</button>
            </div>
          ))}
        </div>

        <br />
        <br />

        <div className="column">
          <h2>Orders</h2>
          {data.order.map((o) => (
            <div key={o.id}>
              <p>
                {o.items.length} items - {o.total} - {o.deliveryType} -{" "}
                {o.status}
              </p>
              <button onClick={() => orderStatus(o.id, "Ready")}>
                {" "}
                Ready{" "}
              </button>
              <button onClick={() => orderStatus(o.id, "Order Completed")}>
                {" "}
                Order Completed{" "}
              </button>
            </div>
          ))}
        </div>

        <br />
        <br />

        <div className="column">
          <h2>Reservations</h2>
          {data.reservations.map((r) => (
            <div key={r.id}>
              <p>
                {r.name} - {r.date} - {r.time} - {r.guests} - {r.status}
              </p>
              <button onClick={() => reservationStatus(r.id, "Approved")}>
                {" "}
                Approve{" "}
              </button>
              <button onClick={() => reservationStatus(r.id, "Cancelled")}>
                {" "}
                Cancel{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
