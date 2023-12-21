import PropTypes from "prop-types";
export const Project = ({ project }) => {
  return (
    <div className=" backdrop-blur-2xl h-40 rounded-xl bg-gray-100/4 duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-x-3 hover:-translate-y-3 hover:bg-white/10 cursor-pointer transition-all">
      {project.name}
    </div>
  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
};
