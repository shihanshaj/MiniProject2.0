import React from 'react';
import './Sidebar.css';
import list_product_icon from '../Components/Assets/Product_list_icon.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Link to="/seller/list-products" style={{ textDecoration: 'none' }}>
      <div className="sidebar-item">
        <img src={list_product_icon} alt="" />
        <p>Product List</p>
      </div>
    </Link>
  );
};

export default Sidebar;