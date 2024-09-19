// src/components/TeacherProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const TeacherProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  
  if (decodedToken.role !== 'teacher') { // Check if the user has a teacher role
    return <Navigate to="/" />; // Redirect non-teachers to home or an error page
  }

  return children;
};

export default TeacherProtectedRoute;
