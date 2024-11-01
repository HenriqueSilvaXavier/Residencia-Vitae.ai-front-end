// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ element: Component }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? Component : <Navigate to="/login" />;
}

export default ProtectedRoute;

