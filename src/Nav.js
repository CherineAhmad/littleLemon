
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="nav-list section-category">
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
