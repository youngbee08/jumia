import React from "react";
import { useEffect, useContext } from "react";
import { userContext } from "../hooks/UserContext";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { checkIsAuthenticated } = useContext(userContext);
  useEffect(() => {
    if (!checkIsAuthenticated()) {
      navigate("/login");
    }
  }, [navigate, checkIsAuthenticated]);

  return checkIsAuthenticated() && <Outlet />;
};

export default ProtectedRoute;