
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAdminAuth } from "../hooks/useAdminAuth";

const ProtectedAdminRoute = ({ element: Element, ...rest }) => {
  const { isAdminAuthenticated } = useAdminAuth();

  return isAdminAuthenticated ? <Element {...rest} /> : <Navigate to="/AdLogin" />;
};

ProtectedAdminRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedAdminRoute;
