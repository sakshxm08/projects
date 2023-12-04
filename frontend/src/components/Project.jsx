import PropTypes from "prop-types";
export const Project = ({ project }) => {
  return <div>{project}</div>;
};
Project.propTypes = {
  project: PropTypes.string.isRequired,
};
