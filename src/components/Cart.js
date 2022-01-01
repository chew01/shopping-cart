import React, { useState, useEffect } from 'react';
import './styles/Cart.css';

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const { tempCart } = props;
  const displayQuantity = cart.length > 99 ? '99+' : cart.length;

  useEffect(() => {
    const addToCart = (product, quantity) => {
      for (let i = 0; i < quantity; i++) {
        setCart((cart) => cart.concat(product));
      }
    };

    addToCart(tempCart[0], tempCart[1]);
  }, [tempCart]);

  return (
    <div className="cart">
      <div className="checkout">Checkout</div>
      <div className="cart-counter">{displayQuantity}</div>
    </div>
  );
};

export default Cart;
