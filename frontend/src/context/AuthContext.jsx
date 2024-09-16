import { createContext, useState, useEffect, useCallback } from "react";
import api, { setAuthToken } from "../api";
import PropTypes from "prop-types";
import Loader from "../components/loaders/Loader";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = useCallback(async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        setAuthToken(storedToken); // Add this line
        const response = await api.getCurrentUser("/auth/me");
        setUser(response.data.user);
        setToken(storedToken);
      } catch (error) {
        console.error("Authentication failed:", error);
        localStorage.removeItem("token");
        setAuthToken(null); // Add this line
        setUser(null);
        setToken(null);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const value = {
    user,
    setUser,
    token,
    setToken,
    loading,
    checkAuthStatus,
  };

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    ); // Or a loading spinner
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
