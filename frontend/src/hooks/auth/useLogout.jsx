import { useAuth } from "./useAuth";

export const useLogout = () => {
  const { setUser, setToken } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return { logout };
};
