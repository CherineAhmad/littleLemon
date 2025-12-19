function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-heading">
            <h1 className="title" style={{ color: 'var(--primary-500)' }}>Little Lemon</h1>
            <h2 className="subtitle" >Lebanon</h2>
        </div>

        <p className="lead-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <button className="primary-btn">Reserve a Table</button>
      </div>
       
      <img
        src="/assets/restauranfood.jpg"
        alt="Restaurant food"
        className="hero-image"
      />

    </section>
  );
}

export default Hero;