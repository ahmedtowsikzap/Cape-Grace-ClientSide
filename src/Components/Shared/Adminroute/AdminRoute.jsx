import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, adminLoading } = useAuth();
  const location = useLocation();
  if (adminLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user?.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
