import { useEffect, useState } from "react";
import { Project } from "./Project";

import toast from "react-hot-toast";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getAllProjects = async () => {
      const response = await fetch(
        import.meta.env.VITE_APP_BASE_URL + "/project"
      );
      const json = await response.json();
      if (!response.ok) {
        return toast.error(json.error);
      }
      if (response.ok) {
        setProjects(() => json);
        // console.log(json);
      }
    };
    getAllProjects();
  }, []);

  return (
    <div className="py-10 flex gap-40 items-center justify-center">
      <div className="w-4/5 gap-4 grid grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        {/* <div className="flex flex-col justify-center"> */}
      </div>
      {/* <div className="w-2/3 bg-black/20 backdrop-blur-3xl rounded-tl-3xl min-h-[400px] rounded-bl-3xl h-fit overflow-hidden p-8">
        <ProjectPreview project={selectedProject} />
      </div> */}
    </div>
  );
};
