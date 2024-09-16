import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
const ProjectsListLayout = ({ projects }) => {
  return (
    <table className="w-full max-w-screen-xl px-10">
      <thead>
        <tr className="text-sm text-gray-500 font-normal border-b border-gray-800 text-left">
          <th className="p-2 font-normal">Name</th>
          <th className="p-2 font-normal">Description</th>
          <th className="p-2 font-normal">Language</th>
          <th className="p-2 font-normal">Github</th>
          <th className="p-2 font-normal">Website</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <ProjectList key={project._id} project={project} />
        ))}
      </tbody>
    </table>
  );
};

const ProjectList = ({ project }) => {
  //   console.log(project);
  //   const truncateDescription = (desc) => {
  //     const words = desc.split(" ");
  //     return words.length > 10 ? words.slice(0, 10).join(" ") + "..." : desc;
  //   };

  return (
    <Link
      to={`/project/${project._id}`}
      className="text-sm cursor-pointer text-gray-200 border-b border-gray-800 hover:bg-gray-800/40 transition-all px-4 table-row align-middle isolate"
    >
      <td className="py-4 px-2">{project.name}</td>
      <td className="py-4 px-2 max-w-sm truncate">{project.description}</td>
      <td className="py-4 px-2">{project.language[0].name}</td>
      <td className="py-4 px-2">
        <Link
          to={project.github}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          rel="noopener noreferrer"
          className=" hover:text-gray-500"
        >
          <FaGithub size={24} />
        </Link>
      </td>
      <td className="py-4 px-2">
        <Link
          to={project.link}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          rel="noopener noreferrer"
          className=" hover:text-gray-500"
        >
          <GoLinkExternal size={24} />
        </Link>
      </td>
    </Link>
  );
};

ProjectsListLayout.propTypes = {
  projects: PropTypes.array,
};

ProjectList.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.array.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default ProjectsListLayout;
