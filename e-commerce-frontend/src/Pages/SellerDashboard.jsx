import React from "react";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div>
      <h1>Seller Dashboard</h1>
      <nav>
        <Link to="/seller/add-product">Add Product</Link>
        <Link to="/seller/products">My Products</Link>
      </nav>
    </div>
  );
};

export default SellerDashboard;