import { Suspense, lazy, useContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loaders/Loader";
import PrivateRoute from "./components/PrivateRoute";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import { AuthContext } from "./context/AuthContext";

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddProject = lazy(() => import("./pages/AddProject"));
const Projects = lazy(() => import("./components/Projects"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

const Layout = () => {
  const { globalLoading } = useContext(AuthContext);

  if (globalLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
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
        {
          path: "/auth",
          element: (
            <PublicOnlyRoute>
              <Auth />
            </PublicOnlyRoute>
          ),
        },
        {
          path: "/dashboard",
          children: [
            { path: "", element: <Dashboard /> },
            { path: "add", element: <AddProject /> },
            {
              path: "edit",
              element: <div />,
              children: [
                { path: "", element: <div /> },
                { path: ":id", element: <></> },
              ],
            },
          ],
          element: (
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="w-screen min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
