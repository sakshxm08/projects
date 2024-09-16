import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/loaders/Loader";
import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <Outlet />
      </Suspense>
    </div>
  );
};

export default Home;
