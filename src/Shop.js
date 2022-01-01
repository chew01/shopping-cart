import React, { useState } from 'react';
import Product from './components/Product';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './components/styles/Shop.css';

const Shop = () => {
  const [tempCart, setTempCart] = useState([]);

  const addProductToCart = (product, quantity) => {
    setTempCart([product, quantity]);
  };

  return (
    <div className="shop">
      <Product
        name="Test Product 1"
        description="This is a placeholder description for Test Product 1"
        tempCart={addProductToCart}
      />
      <Product
        name="Test Product 2"
        description="This is a placeholder description for Test Product 2"
        tempCart={addProductToCart}
      />
      <Product
        name="Test Product 3"
        description="This is a placeholder description for Test Product 3"
        tempCart={addProductToCart}
      />
      <Product
        name="Test Product 4"
        description="This is a placeholder description for Test Product 4"
        tempCart={addProductToCart}
      />
      <Product
        name="Test Product 5"
        description="This is a placeholder description for Test Product 5"
        tempCart={addProductToCart}
      />
      <Footer />
      <Cart tempCart={tempCart} />
    </div>
  );
};

export default Shop;
