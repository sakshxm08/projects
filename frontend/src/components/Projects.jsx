import { bg, logo, saksham } from "../assets";
import { Project } from "./Project";

export const Projects = () => {
  const projects = [
    { name: "WearWorx", img: saksham },
    { name: "GitFolio", img: logo },
    { name: "MindMate", img: bg },
    { name: "Promize", img: saksham },
    { name: "Portfolio", img: bg },
    { name: "Spotify", img: logo },
  ];
  return (
    <div className="py-20 max-w-screen-2xl w-5/6 mx-auto grid grid-cols-4 gap-x-20 gap-y-10">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};
