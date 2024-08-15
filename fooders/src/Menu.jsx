import React, { useEffect, useState } from 'react';
import './Menu.css'; // Ensure this CSS file includes the styles for the video background

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="menu-container">
      <video autoPlay loop muted className="background-video">
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1>Our Menu</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
