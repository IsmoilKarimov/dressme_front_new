import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const access_token = localStorage.getItem("userAccess") ? localStorage.getItem("userAccess") : null;

  if (!access_token) {
    return <Navigate to="/sign_in" replace />;
  }
  return children;
};
