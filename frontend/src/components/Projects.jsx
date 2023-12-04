import { Project } from "./Project";

export const Projects = () => {
  const projects = ["WearWorx", "GitFolio", "OneTap"];
  return (
    <div className="py-20 max-w-7xl w-4/5 mx-auto">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};
