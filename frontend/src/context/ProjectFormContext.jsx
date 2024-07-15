import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ProjectFormContext = createContext();

export const ProjectFormProvider = ({ children }) => {
  const [projectDetails, setProjectDetails] = useState({
    logo: "",
    name: "",
    description: "",
    language: {},
    library: {},
    other_lang: [],
    features: [],
    github: "",
    link: "",
  });
  const setValues = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };
  return (
    <ProjectFormContext.Provider
      value={{ projectDetails, setProjectDetails, setValues }}
    >
      {children}
    </ProjectFormContext.Provider>
  );
};

ProjectFormProvider.propTypes = {
  children: PropTypes.node,
};
