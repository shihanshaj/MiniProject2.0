import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerProductDisplay from './SellerProductDisplay';

const SellerProducts = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const token = localStorage.getItem('auth-token');

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/seller/products', {
          headers: {
            'auth-token': token,
          },
        });
        setSellerProducts(response.data);
      } catch (error) {
        console.error('Error fetching seller products:', error);
      }
    };

    fetchSellerProducts();
  }, [token]);

  return (
    <div className="seller-products">
      <h1>Seller Products</h1>
      {sellerProducts.length > 0 ? (
        sellerProducts.map((product) => (
          <SellerProductDisplay key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SellerProducts;