import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
export const Project = ({ project }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="flex justify-between flex-col group-hover:scale-110 backdrop-blur-2xl  rounded-xl bg-gray-100/4 z-10 duration-500 group overflow-hidden shadow-xl group-hover:shadow-3xl  group-hover:bg-white/10 relative cursor-pointer transition-all">
        <div className="w-full bg-black/20 flex items-center justify-center p-4 ">
          <div className="aspect-square w-full rounded-full overflow-hidden h-20 flex items-center justify-center object-cover bg-red-60">
            <img src={project.img} alt="" className="h-full" />
          </div>
        </div>
        <div className="w-full h-full bg-white/20 pl-4 flex items-center justify-center z-10">
          <h1 className="text-xl py-4  font-semibold flex items-center justify-center gap-4 group-hover:gap-6 transition-all duration-500">
            {project.name}
          </h1>
        </div>
      </div>
      <div className="absolute w-16 flex items-center justify-center group-hover:bg-white/20 backdrop-blur-2xl  group-hover:-right-16 right-0 -translate-x-2 origin-left transition-all duration-500 h-full   rounded-tr-xl rounded-br-xl z-0  top-0 bg-transparent">
        <FaChevronRight size={32} className="pl-3" />
      </div>
    </div>
    // <div className="flex justify-between backdrop-blur-2xl h-28 rounded-xl bg-gray-100/4 duration-300 group overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2  hover:bg-white/10 cursor-pointer transition-all">
    //   <div className="w-1/3 h-full bg-black/20 flex items-center justify-center p-4">
    //     <div className="aspect-square w-full rounded-full overflow-hidden object-cover bg-red-60">
    //       <img src={project.img} alt="" className="h-full" />
    //     </div>
    //   </div>
    //   <div className="w-2/3 h-full bg-white/20 pl-4 flex items-center">
    //     <h1 className="text-2xl font-extrabold flex items-center justify-center gap-4 group-hover:gap-6 transition-all duration-300">
    //       {project.name}
    //       <FaChevronRight size={20} />
    //     </h1>
    //   </div>
    // </div>
  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
};
