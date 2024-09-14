import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";
import { setAuthToken } from "../../api";

export const useLogout = () => {
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    setAuthToken(null); // Add this line
    navigate("/");
    toast.success("Logged out successfully");
  };

  return { logout };
};
