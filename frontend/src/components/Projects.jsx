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
    <div className="py-10  ml-32 flex gap-40 items-center">
      <div className="w-1/4 flex flex-col gap-4">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="w-3/4 bg-black/20 backdrop-blur-3xl rounded-tl-3xl rounded-bl-3xl h-[480px] overflow-hidden"></div>
    </div>
  );
};
