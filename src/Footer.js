import { NavLink } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-list section-category">

        {/* Logo */}
        <div className="footer-column">
          <img className="footer-logo" src="/assets/footer-logo.png" alt="Little Lemon logo" />
        </div>

        {/* Doormat Navigation */}
        <nav className="footer-column" aria-label="Footer navigation">
          <h4 className="section-category">Doormat Navigation</h4>
          <ul>
            {/* <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li> */}
            <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="footer-column">
          <h4 className="section-category">Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>

        {/* Social Media */}
        <nav className="footer-column" aria-label="Social media links">
          <h4 className="section-category">Social Media</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
