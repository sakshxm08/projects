import { useState } from "react";
import { useAuth } from "./useAuth";
import api from "../../api";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser, setToken } = useAuth();

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.login(credentials);
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      console.log(err);
      const errorMessage = err.response?.data?.error || "An error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
