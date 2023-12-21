import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <div>
      <div className="fixed inset-0 h-screen w-screen bg-black/40"></div>
      <Navbar />
      <Projects />
    </div>
  );
};
