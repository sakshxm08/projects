import { useState } from "react";
import { useAuth } from "./useAuth";
import api from "../../api";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser, setToken } = useAuth();

  const signup = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.signup(userData);
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
