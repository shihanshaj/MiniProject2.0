import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');

  useEffect(() => {
    // Fetch the user's name and profile picture from the backend
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem('auth-token');
        const response = await fetch('/api/user', {
          headers: {
            'auth-token': authToken,
          },
        });
        const userData = await response.json();
        setUserName(userData.name);
        setUserPicture(userData.profilePicture);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-user">
        {userPicture ? (
          <img src={userPicture} alt="User Profile" className="nav-profile" />
        ) : (
          <div className="nav-profile-placeholder">
            {userName.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="nav-username">{userName}</span>
      </div>
    </div>
  );
};

export default Navbar;