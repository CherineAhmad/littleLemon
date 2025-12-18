function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-list">

        {/* Logo */}
        <div className="footer-column">
          <img className="footer-logo" src="/assets/footer-logo.png" alt="Little Lemon logo" />
        </div>

        {/* Doormat Navigation */}
        <nav className="footer-column" aria-label="Footer navigation">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>

        {/* Social Media */}
        <nav className="footer-column" aria-label="Social media links">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
