import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.login);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default AuthWrapper;
