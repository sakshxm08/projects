import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ProjectFormProvider } from "./context/ProjectFormContext";
import ErrorBoundary from "./pages/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <ProjectFormProvider>
          <App />
        </ProjectFormProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
