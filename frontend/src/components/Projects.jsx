import { Project } from "./Project";

export const Projects = () => {
  const projects = [
    { name: "WearWorx" },
    { name: "GitFolio" },
    { name: "MindMate" },
    { name: "Promize" },
    { name: "Portfolio" },
    { name: "Spotify" },
  ];
  return (
    <div className="py-20 max-w-7xl w-4/5 mx-auto grid grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};
