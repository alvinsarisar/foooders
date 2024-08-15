import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import Navbar from './Navbar';
import About from './About';
import './App.css'
import Review from './Review';
import { Footer } from './Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setProducts(products.map(item => 
      item.id === product.id ? { ...item, stock: item.stock - 1 } : item
    ));
  };

  const updateCart = (productId, amount) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + amount;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(item => item !== null);

    setCart(updatedCart);

    setProducts(products.map(item => {
      const cartItem = cart.find(cartItem => cartItem.id === item.id);
      if (cartItem && item.id === productId) {
        return { ...item, stock: item.stock - amount };
      }
      return item;
    }));
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
