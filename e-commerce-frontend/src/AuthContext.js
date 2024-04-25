import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('auth-token'));
  const [userType, setUserType] = useState(""); // Set the user type after login

  const login = () => {
    setIsAuthenticated(true);
    // Set user type based on fetched data
    setUserType("buyer"); // or "seller" depending on fetched data
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    setIsAuthenticated(false);
    setUserType("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
