import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectPreview = ({ project }) => {
  return (
    <div className="flex flex-col gap-4 justify-center h-full">
      <div className="flex items-center gap-4">
        <img
          src={project.logo}
          alt={project.name}
          className="w-24 rounded-full aspect-square object-contain"
        />
        <span className="text-4xl font-bold">{project.name}</span>
      </div>
      <span className="text-sm">{project.description}</span>
      <Link
        to={"/project/" + project._id}
        className="border rounded w-fit px-4 py-2 text-sm"
      >
        Expand
      </Link>
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.object,
};

export default ProjectPreview;
