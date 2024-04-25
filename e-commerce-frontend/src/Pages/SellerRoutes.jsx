// SellerRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SellerDashboard from './SellerDashboard';
import SellerAddProduct from './SellerAddProduct';

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SellerDashboard />} />
      <Route path="/add-product" element={<SellerAddProduct />} />
    </Routes>
  );
};

export default SellerRoutes;