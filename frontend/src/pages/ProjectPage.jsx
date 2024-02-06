import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export const ProjectPage = () => {
  const { id } = useParams();

  const [project, setProject] = useState({});
  useEffect(() => {
    const getProject = async () => {
      const response = await fetch(
        import.meta.env.VITE_APP_BASE_URL + "/project/" + id
      );
      console.log(import.meta.env.VITE_APP_BASE_URL + "/project/" + id);
      const json = await response.json();
      if (!response.ok) {
        return toast.error(json.error);
      }
      if (response.ok) {
        console.log(json);
        setProject(() => json);
        // console.log(json);
      }
    };
    getProject();
  }, [id]);
  return <div>{project.name}</div>;
};
