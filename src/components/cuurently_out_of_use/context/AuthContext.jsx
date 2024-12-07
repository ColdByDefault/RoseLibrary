import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load the logged-in user from localStorage on initialization
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const logIn = (username) => {
    setUser(username);
    localStorage.setItem("user", JSON.stringify(username)); // Save logged-in user to localStorage
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
