import React from 'react';

const ShoppingCart = ({ cart, updateQuantity, removeFromCart, checkout }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.product.id}>
          <p>{item.product.name}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
            +1
          </button>
          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
            -1
          </button>
          <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
