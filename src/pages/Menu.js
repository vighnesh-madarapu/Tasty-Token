// frontend/src/pages/Menu.js
import React, { useState, useEffect } from "react";
import "./Menu.css";

export default function Menu() {
  const [items, setItems] = useState([]);

  // ✅ Load items from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // ✅ Add to cart function
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find if item already exists
    const index = cart.findIndex((i) => i._id === item._id);

    if (index !== -1) {
      // Item exists → increase quantity
      cart[index].quantity += 1;
    } else {
      // New item → add with quantity 1
      cart.push({ ...item, quantity: 1 });
    }

    // ✅ Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${item.name} added to cart ✅`);
  };

  // ✅ Group items by category
  const grouped = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="menu-container">
      <h1 className="menu-title">🍴 Tasty Token Menu</h1>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">
            {category === "Chocolates" && "🍫 "}
            {category === "Tiffin" && "🍛 "}
            {category === "Lunch" && "🍱 "}
            {category === "Snacks" && "🍟 "}
            {category}
          </h2>

          <div className="items-grid">
            {grouped[category].map((item) => (
              <div key={item._id} className="item-card">
                <img src={item.image} alt={item.name} className="item-img" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
