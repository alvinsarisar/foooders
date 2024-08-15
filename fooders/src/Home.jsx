import React from 'react';

function Home({ products, addToCart }) {
  return (
    <div>
      
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <button 
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
