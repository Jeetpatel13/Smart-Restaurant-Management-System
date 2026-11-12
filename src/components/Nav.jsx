import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h2 className="logo">Smart Restaurant</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Reservation">Reservations</Link>
        <Link to="/Admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Nav;
