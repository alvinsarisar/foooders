import React from 'react';

function Checkout({ cart }) {
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-items">
        {cart.map(item => (
          <div key={item.id} className="checkout-item">
           <h2>{item.name}</h2>
           <p>Price: {item.price}</p>
           <p>Subtotal: {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2>Total Amount: {totalAmount}</h2>
      <button onClick={() => alert('Order placed successfully.For M-Pesa payments, use BUY GOODS:808080 .For cash payment , the bill will be presented to you once your order is processed . Have a nice time !')}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
