import React, { useState, useEffect } from 'react';
import './ListProducts.css';
import cross_icon from '../Components/Assets/cross_icon.png';

const ListProducts = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const token = localStorage.getItem('auth-token');

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/seller/products', {
          headers: {
            'auth-token': token,
          },
        });
        const data = await response.json();
        setSellerProducts(data);
      } catch (error) {
        console.error('Error fetching seller products:', error);
      }
    };

    fetchSellerProducts();
  }, [token]);

  const removeProduct = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/seller/remove-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const updatedProducts = sellerProducts.filter((product) => product.id !== id);
        setSellerProducts(updatedProducts);
      } else {
        console.error('Error removing product');
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="listproduct">
      <h1>Seller Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Phone</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {sellerProducts.map((product) => (
          <div key={product.id}>
            <div className="listproduct-format-main listproduct-format">
              <img className="listproduct-product-icon" src={product.image} alt="" />
              <p>{product.name}</p>
              <p>₹{product.price}</p>
              <p>{product.phone}</p>
              <img
                className="listproduct-remove-icon"
                onClick={() => removeProduct(product.id)}
                src={cross_icon}
                alt=""
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;