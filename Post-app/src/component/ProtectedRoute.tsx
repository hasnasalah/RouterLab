import {useContext } from "react";
import {Navigate} from "react-router-dom";
import AuthoContex from "../context/AuthoContext";
type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({children }: ProtectedRouteProps) => {
   const {isAuthenticated}=useContext(AuthoContex);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};