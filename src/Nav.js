import { NavLink } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-list section-category">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" className={({ isActive }) => isActive ? "active" : ""}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" className={({ isActive }) => isActive ? "active" : ""}>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
