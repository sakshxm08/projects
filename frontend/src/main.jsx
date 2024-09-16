import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ProjectFormProvider } from "./context/ProjectFormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProjectFormProvider>
        <App />
      </ProjectFormProvider>
    </AuthProvider>
  </React.StrictMode>
);
