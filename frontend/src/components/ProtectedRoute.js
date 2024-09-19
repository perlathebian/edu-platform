// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = ['student', 'teacher'] }) => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
  console.log('Decoded Token:', decodedToken);


  if (!token) {
    // If no token, redirect to the login page with a message
    return <Navigate to="/login" replace state={{ message: 'You need to log in to access this content' }} />;
  }

  // Check if the user's role is allowed to access the route
  const userRole = decodedToken ? decodedToken.role : null;
  console.log('User Role:', userRole);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;
