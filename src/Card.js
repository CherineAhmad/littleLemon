
function Card({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}

export default Card;