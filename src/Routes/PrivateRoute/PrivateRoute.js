import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../../Pages/Home/Shared/Loading/Loading";
import SkeletonLoader from "../../Pages/Home/Shared/SkeletonLoader/SkeletonLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // className="flex justify-center items-center"

  if (loading) {
    return  <SkeletonLoader></SkeletonLoader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
