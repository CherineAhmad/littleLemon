import MenuItem from "./MenuItem";
import "./MenuSection.css";

function MenuSection({ title, items }) {
  return (
    <section className="menu-section">
      <h2 className="menu-section__title">{title}</h2>

      <div className="menu-section__grid">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
