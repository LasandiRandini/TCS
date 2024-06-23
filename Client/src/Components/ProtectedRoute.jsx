

import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const getItemFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log(getItemFromLocalStorage?.status);
  return (getItemFromLocalStorage?.status === "physical" || getItemFromLocalStorage?.status === "online") 
    ? children 
    : <Navigate to="/SLogin" replace={true} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
