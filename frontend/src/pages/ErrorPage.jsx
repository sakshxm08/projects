import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("ErrorPage rendered. Error:", error);

  return (
    <div
      role="alert"
      style={{
        padding: "20px",
        backgroundColor: "#ffeeee",
        border: "1px solid #ff0000",
      }}
    >
      <h1>Oops! Something went wrong</h1>
      <p>An unexpected error has occurred.</p>
      {error ? (
        <pre>{error.message || error.statusText || JSON.stringify(error)}</pre>
      ) : (
        <p>No error details available</p>
      )}
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default ErrorPage;
