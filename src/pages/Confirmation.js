import React from 'react';
export default function Confirmation(){
  const order = JSON.parse(localStorage.getItem('order')||'null');
  if(!order) return <p>No order found</p>;
  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>Order ID: {order.orderId}</p>
      <p>Status: {order.status}</p>
      <h3>Delivery</h3>
      <pre>{JSON.stringify(order.delivery, null, 2)}</pre>
      <h3>Items</h3>
      {order.items.map(i=> <div key={i.name}>{i.name} x {i.quantity} = ₹{i.lineTotal}</div>)}
      <h3>Grand Total: ₹{order.grandTotal}</h3>
    </div>
  );
}
