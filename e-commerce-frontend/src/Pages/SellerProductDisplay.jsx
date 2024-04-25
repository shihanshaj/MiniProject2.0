import React from "react";
import "./SellerProductDisplay.css";

const SellerProductDisplay = ({ product }) => {
  return (
    <div className="seller-product-display">
      <div className="seller-product-display-image">
        <img src={product.image || 'placeholder.jpg'} alt={product.name} />
      </div>
      <div className="seller-product-display-details">
        <h2>{product.name || 'Loading...'}</h2>
        <div className="seller-product-display-prices">
          <p className="seller-product-display-price">New Price: ₹{product.new_price || 0}</p>
          <p className="seller-product-display-price">Old Price: ₹{product.old_price || 0}</p>
        </div>
        <p className="seller-product-display-phone">
          <span>Phone:</span> {product.phone || 'Loading...'}
        </p>
      </div>
    </div>
  );
};

export default SellerProductDisplay;