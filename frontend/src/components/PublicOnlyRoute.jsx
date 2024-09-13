import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";
import PropTypes from "prop-types";

const PublicOnlyRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

PublicOnlyRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PublicOnlyRoute;
