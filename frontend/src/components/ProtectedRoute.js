// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to the login page with a message
    return <Navigate to="/login" replace state={{ message: 'You need to log in to access this content' }} />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;
