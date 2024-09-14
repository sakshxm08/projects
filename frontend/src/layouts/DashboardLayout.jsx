import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Loader from "../components/loaders/Loader";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
