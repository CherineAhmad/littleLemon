import MenuSection from "../components/Menu/MenuSection";


const menu = {
  appetizers: [
    {
      id: 1,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },
    {
      id: 2,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 3,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 4,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 5,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 6,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    }
  ],
  mains: [ {
      id: 1,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },
    {
      id: 2,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 3,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 4,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 5,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 6,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },],
  sweets: [ {
      id: 1,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },
    {
      id: 2,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 3,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 4,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 5,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },{
      id: 6,
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives and feta cheese",
      price: "25.50",
      image: "/assets/greek salad.jpg", 
    },],
};

function Menu() {
  return (
    <div>
      <div className="menu-page-title-subtitle">
        <h1 className="subtitle"> DELICIOUS & AMAZING</h1>
        <h1 className="title"> Menu</h1>
      </div>
      <div className="menus">
        <MenuSection title="Appetizers" items={menu.appetizers} />
        <MenuSection title="Main Dishes" items={menu.mains} />
        <MenuSection title="Sweets" items={menu.sweets} />
      </div>
    </div>
  );
}

export default Menu;