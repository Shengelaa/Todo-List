import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default RequireAuth;
