import React from "react";
import { Navigate } from "react-router-dom";
import DataService from "../services/service";

const RouteGuard = ({ children }) => {
  DataService.authenticate().then((response) => {
    if (response.status === 200) {
      return children;
    } else return <Navigate to="/login" />;
  });
};

export default RouteGuard;
