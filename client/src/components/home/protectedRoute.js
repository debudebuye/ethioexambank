import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth"; // Assume this hook checks user auth status
// This will check user auth status

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Assuming useAuth provides user and loading states

  if (loading) {
    return <div className="spinner">Loading...</div>; // Replace this with your actual spinner or animation
  }

  if (!user) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Render the children components if authenticated
  return children;
};

export default ProtectedRoute;

