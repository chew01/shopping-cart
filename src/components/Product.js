import React, { useState } from 'react';
import './styles/Product.css';

const Product = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    if (e.target.validity.valid) {
      setQuantity(e.target.value);
    }
  };
  const handleAddToCart = () => {
    props.tempCart(props.name, quantity);
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product">
      <img src="https://via.placeholder.com/300" alt="placeholder" />
      <div className="product-para">
        <div className="product-name">{props.name}</div>
        <div className="product-desc">{props.description}</div>
        <div className="cart-add">
          <span className="dec" onClick={decrement}>
            &#8722;
          </span>
          <input
            type="text"
            minLength={0}
            maxLength={2}
            pattern="[0-9]*"
            onChange={handleQuantityChange}
            value={quantity}
          />
          <span className="inc" onClick={increment}>
            &#43;
          </span>
          <button className="cartButton" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
