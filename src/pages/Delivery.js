import React, { useState } from "react";
import "./Delivery.css";

export default function DeliveryForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    pincode: "",
    country: "",
    phoneno: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create random order ID
    const generatedId = "TT-" + Math.floor(Math.random() * 1000000);
    setOrderId(generatedId);
    setOrderPlaced(true);

    // Clear cart after order
    localStorage.removeItem("cart");
  };

  if (orderPlaced) {
    return (
      <div className="delivery-container">
        <h3>✅ Order Confirmed!</h3>
        <div className="delivery-summary">
          <h4>Order ID: {orderId}</h4>
          <p>Status: <strong>Pending (Cash on Delivery)</strong></p>
          <hr />
          <h4>Delivery Information</h4>
          <p><strong>Name:</strong> {form.firstname} {form.lastname}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Address:</strong> {form.street}, {form.city} - {form.pincode}, {form.country}</p>
          <p><strong>Phone:</strong> {form.phoneno}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="delivery-container">
      <h3>📝 Delivery Details</h3>
      <form className="delivery-form" onSubmit={handleSubmit}>
        <input
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="street"
          placeholder="Street Address"
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />
        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          required
        />
        <input
          name="country"
          placeholder="Country"
          onChange={handleChange}
          required
        />
        <input
          name="phoneno"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <button type="submit">Place Order (COD)</button>
      </form>
    </div>
  );
}
