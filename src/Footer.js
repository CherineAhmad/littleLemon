function Footer() {
  return (
    <footer>
        <div className="footer-logo">
            <img src="/assets/footer-logo.png" alt="Little Lemon logo" />
        </div>

        <nav aria-label="Footer navigation">
            <h2 className="visually-hidden">Footer navigation</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>


        <contact>
            <h2>Contact</h2>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
         </contact>


        <nav aria-label="Social media links">
            <h2>Social Media</h2>
            <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            </ul>
        </nav>
</footer>

  );
}

export default Footer;

