import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
export const Project = ({ project, onClick }) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-start group-hover:scale-110 p-4 gap-4 backdrop-blur-2xl bg-white/10  rounded-xl z-10 duration-500 group overflow-hidden shadow-xl group-hover:shadow-3xl  group-hover:bg-white/20 relative cursor-pointer transition-all">
        <div className=" flex items-center justify-center">
          <div className="aspect-square p-4 bg-white rounded-full backdrop-blur flex items-center justify-center object-cover">
            <img src={project.logo} alt="" className="h-12" />
          </div>
        </div>
        <div className=" h-full flex items-center justify-center z-10">
          <h1 className="text-xl font-semibold transition-all duration-500">
            {project.name}
          </h1>
        </div>
      </div>
      <div className="absolute w-20 flex items-center justify-center group-hover:bg-white/10 backdrop-blur-2xl  group-hover:-right-20 right-0 -translate-x-2 origin-left transition-all duration-500 h-full   rounded-tr-xl rounded-br-xl z-0  top-0 bg-transparent">
        <FaChevronRight size={24} className="ml-4" />
      </div>
    </div>
  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
