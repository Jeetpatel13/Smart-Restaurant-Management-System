import { useContext, useState } from "react";
import { AppContext } from "../AppProvider";

function Menu() {
  const data = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = data.menu.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (category == "All" || e.category == category),
  );

  return (
    <div className="page">
      <h1>Menu</h1>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Starters</option>
        <option>Main</option>
        <option>Desserts</option>
        <option>Drinks</option>
      </select>

      <div className="menu-grid">
        {filtered.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} />

            <h3>{item.name}</h3>
            <p>
              {item.category} - ${item.price}
            </p>
            <button onClick={() => data.setCart([...data.cart, item])}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
