import { useEffect, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProjectsListLayout from "../layouts/ProjectsListLayout";
import { AuthContext } from "../context/AuthContext";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { setGlobalLoading } = useContext(AuthContext);

  useEffect(() => {
    const getAllProjects = async () => {
      setGlobalLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/project`
        );
        setProjects(response.data);
      } catch (error) {
        toast.error(error.response?.data?.error || "An error occurred");
      } finally {
        setGlobalLoading(false);
      }
    };
    getAllProjects();
  }, [setGlobalLoading]);

  return (
    <div className="py-10 flex gap-40 items-center justify-center">
      <ProjectsListLayout projects={projects} />
    </div>
  );
};

export default Projects;
