import "./App.css";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AddProject } from "./pages/AddProject";
import { ProjectFormProvider } from "./context/ProjectFormContext";

const Layout = () => {
  return <Outlet />;
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Auth /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/add", element: <AddProject /> },
      ],
    },
  ]);
  return (
    <>
      <ProjectFormProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ProjectFormProvider>
    </>
  );
}

export default App;
