import PropTypes from "prop-types";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Outlet, useNavigate, useRouteError } from "react-router-dom";

function ErrorFallback({ error }) {
  const navigate = useNavigate();
  const routeError = useRouteError();

  console.error("Error caught by ErrorBoundary:", error || routeError);

  const errorMessage =
    error?.message || routeError?.statusText || "An unexpected error occurred";

  return (
    <div
      role="alert"
      className="error-fallback"
      style={{
        padding: "20px",
        backgroundColor: "#ffeeee",
        border: "1px solid #ff0000",
      }}
    >
      <h2>Oops! Something went wrong</h2>
      <pre>{errorMessage}</pre>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
};

function ErrorBoundary() {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => (window.location.href = "/")}
    >
      <Outlet />
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
