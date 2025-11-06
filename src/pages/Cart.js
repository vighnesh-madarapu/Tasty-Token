import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // ✅ Load cart data from localStorage on page load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  // ✅ Save updated cart back to localStorage
  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Increase quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(updated);
  };

  // ✅ Decrease quantity (and remove if quantity = 0)
  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    saveCart(updated);
  };

  // ✅ Remove item completely
  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    saveCart(updated);
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((i) => (
            <div key={i._id} className="cart-item">
              <img src={i.image} alt={i.name} className="cart-img" />

              <div className="cart-details">
                <h3>{i.name}</h3>
                <p>Price: ₹{i.price}</p>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(i._id)}>-</button>
                  <span>{i.quantity}</span>
                  <button onClick={() => increaseQty(i._id)}>+</button>
                </div>

                <p><b>Subtotal: ₹{i.price * i.quantity}</b></p>
                <button className="remove-btn" onClick={() => removeItem(i._id)}>❌ Remove</button>
              </div>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
          <Link to="/delivery">
            <button className="checkout-btn">Proceed to Delivery</button>
          </Link>
        </>
      )}
    </div>
  );
}
