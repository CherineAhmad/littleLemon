import "./MenuItem.css";

function MenuItem({ image, title, description, price }) {
  return (
    <div className="menu-item">
      <img src={image} alt={title} className="menu-item__image" />

      <div className="menu-item__content">
        <h3 className="menu-item__title">{title}</h3>
        <p className="menu-item__description">{description}</p>
      </div>

      <span className="menu-item__price">${price}</span>
    </div>
  );
}

export default MenuItem;
