import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
export const Project = ({ project }) => {
  return (
    <div className="flex justify-between backdrop-blur-2xl h-28 rounded-xl bg-gray-100/4 duration-500 group overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-x-3 hover:-translate-y-3  hover:bg-white/10 cursor-pointer transition-all">
      <div className="w-1/3 h-full bg-black/20 flex items-center justify-center p-4">
        <div className="aspect-square w-full rounded-full overflow-hidden object-cover bg-red-60">
          <img src={project.img} alt="" className="h-full" />
        </div>
      </div>
      <div className="w-2/3 h-full bg-white/20 pl-4 flex items-center">
        <h1 className="text-2xl font-extrabold flex items-center justify-center gap-4 group-hover:gap-6 transition-all duration-500">
          {project.name}
          <FaChevronRight size={20} />
        </h1>
      </div>
    </div>
  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
};
