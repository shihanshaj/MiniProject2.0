import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserTypeSelection.css";

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType) => {
    localStorage.setItem("user-role", userType);
    if (userType === "buyer") {
      navigate("/");
    } else if (userType === "seller") {
      navigate("/seller");
    }
  };

  
  return (
    <div className="user-type-selection">
      <div className="user-type-container">
        <h1>Welcome to our E-commerce Platform</h1>
        <p>Please select your user type:</p>
        <div className="user-type-buttons">
          <div
            className="user-type-button buyer"
            onClick={() => handleUserTypeSelection("buyer")}
          >
            <i className="fas fa-shopping-cart"></i>
            <h2>Buyer</h2>
            <p>Access the e-commerce platform as a buyer.</p>
          </div>
          <div
            className="user-type-button seller"
            onClick={() => handleUserTypeSelection("seller")}
          >
            <i className="fas fa-store"></i>
            <h2>Seller</h2>
            <p>Access the seller dashboard to manage your products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;