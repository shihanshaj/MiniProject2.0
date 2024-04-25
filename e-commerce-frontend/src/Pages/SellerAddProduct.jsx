import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SellerAddProduct.css";
import upload_area from "../Components/Assets/upload_area.svg";

const SellerAddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    price: '',
    phone: '',
  });
  const navigate = useNavigate();
  const token = localStorage.getItem('auth-token');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload the image to the server
      const formDataWithImage = new FormData();
      formDataWithImage.append('product', formData.image);
      const imageResponse = await axios.post('http://localhost:4000/upload', formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token': token,
        },
      });
      const imageUrl = imageResponse.data.image_url;

      // Send the product data to the server
      const productData = {
        name: formData.name,
        image: imageUrl,
        price: formData.price,
        phone: formData.phone,
      };
      const response = await axios.post('http://localhost:4000/seller/add-product', productData, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      });

      if (response.data.success) {
        alert('Product added successfully!'); // Display a success message
        navigate('/seller/products'); // Navigate to the SellerProducts component
      } else {
        alert('Error adding product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Price</p>
        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Contact Phone</p>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Image</p>
        <label htmlFor="file-input">
          <img className="addproduct-thumbnail-img" src={!formData.image ? upload_area : URL.createObjectURL(formData.image)} alt="" />
        </label>
        <input onChange={handleChange} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={handleSubmit}>ADD</button>
    </div>
  );
};

export default SellerAddProduct;
