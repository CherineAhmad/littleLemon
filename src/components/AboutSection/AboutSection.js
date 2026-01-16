import "./AboutSection.css";

function AboutSection({
  backgroundImage,
  title,
  subtitle,
  description,
  children,
}) {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="content">
          <h2 className="title">{title}</h2>
          {subtitle && <h3 className="subtitle">{subtitle}</h3>}
          <p className="lead-text">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
