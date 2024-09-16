import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProjectsListLayout from "../layouts/ProjectsListLayout";
import Loader from "./loaders/Loader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/project`
        );
        setProjects(response.data);
      } catch (error) {
        toast.error(error.response?.data?.error || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    getAllProjects();
  }, []);

  return (
    <div className="py-10 flex flex-col gap-4 items-center justify-center">
      <ProjectsListLayout projects={projects} />
      {loading && <Loader minHScreen={false} />}
    </div>
  );
};

export default Projects;
