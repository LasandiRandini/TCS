// // src/Components/ProtectedRoute.js
// import { Navigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useAuth } from "../hooks/useAuth";

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <Element {...rest} /> : <Navigate to="/SLogin" />;
// };

// ProtectedRoute.propTypes = {
//   element: PropTypes.elementType.isRequired,
// };

// export default ProtectedRoute;


// // src/Components/ProtectedRoute.js
// import { Navigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useAuth } from "../hooks/useAuth";

// const ProtectedRoute = ({ element: Element, role, ...rest }) => {
//   const { isAuthenticated, user } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/SLogin" />;
//   }

//   if (role && user?.status !== role) {
//     return <Navigate to="/" />;
//   }

//   return <Element {...rest} />;
// };

// ProtectedRoute.propTypes = {
//   element: PropTypes.elementType.isRequired,
//   role: PropTypes.string,
// };

// export default ProtectedRoute;
// import PropTypes from "prop-types";
// import { Navigate } from "react-router-dom";


//  const ProtectedRoute = ({children}) =>{
//   const getItemFromLocalStorage = JSON.parse(localStorage.getItem("user"))
//   console.log(getItemFromLocalStorage?.status);
//   return getItemFromLocalStorage?.status == "physical" || "online" ? children : (<Navigate to="/SLogin" replace={true}/>)
// }

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ProtectedRoute;

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
