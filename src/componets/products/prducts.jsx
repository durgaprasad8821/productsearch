import React from 'react';
import './product.css';

const ProductCard = (Props) => {
    const{data} = Props;
    const{category, description, images , price , tags , rating}  = data;
    
  return (
    <div className="product-card">
      <img src={images[0]} alt={category} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{tags[1]}</h2>
        <p className="product-description">{description}</p>
        <div className="product-bottom">
          <span className="product-price">${price}</span>
        </div>
        <div>
        {Array(Math.round(rating))
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
        </div>
        
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
