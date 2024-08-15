import React from 'react';

function Cart({ cart, updateCart }) {
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const incrementQuantity = (productId) => {
    updateCart(productId, 1);
  };

  const decrementQuantity = (productId) => {
    updateCart(productId, -1);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <div className="quantity-control">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
            <p>Price: {item.price}</p>
            <p>Subtotal: {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2>Total Amount: {totalAmount}</h2>
    </div>
  );
}

export default Cart;
