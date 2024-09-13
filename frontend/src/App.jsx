import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ProjectFormProvider } from "./context/ProjectFormContext";

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddProject = lazy(() => import("./pages/AddProject"));
const Projects = lazy(() => import("./components/Projects"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            { path: "", element: <Projects /> },
            { path: "project/:id", element: <ProjectPage /> },
          ],
        },
        { path: "/auth", element: <Auth /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/add", element: <AddProject /> },
      ],
    },
  ]);

  return (
    <ProjectFormProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ProjectFormProvider>
  );
}

export default App;
