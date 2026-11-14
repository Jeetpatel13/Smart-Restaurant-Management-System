import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Smart Restaurant</h1>
        <p>Fresh food, made with love. Order online or book a table.</p>
        <Link to="/Menu">
          <button>View Menu</button>
        </Link>
        <Link to="/Reservation">
          <button>Book a Table</button>
        </Link>
      </div>

      <div className="page">
        <h2>Popular Dishes</h2>
        <div className="dish-row">
          <div className="dish-card">
            <img src="src/images/Margherita_pizza.jpg" />

            <h3>Margherita Pizza</h3>
            <p>$12.99</p>
          </div>

          <div className="dish-card">
            <img src="src/images/Chicken_Alfredo.jpeg" />

            <h3>Chicken Alfredo</h3>
            <p>$18.99</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h3>Visit Us</h3>
        <p>Open daily 11:00 AM - 10:00 PM</p>
        <p>123 Main Street, Calgary, AB | (403) 555-1234</p>
      </div>
    </div>
  );
}

export default Home;
