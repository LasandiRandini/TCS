import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  AuthContextProvider.propTypes = {
    children: PropTypes.node,
  };

  const login = async (inputs) => {
    try {
      const res = await axios.post("/auth/login", inputs, { withCredentials: true });
      setCurrentUser(res.data);
      return res.data;  
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };

  const logout = async () => {
    await axios.post("/auth/logout", {}, { withCredentials: true });
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
