import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ProjectFormContext = createContext();

export const ProjectFormProvider = ({ children }) => {
  const [projectDetails, setProjectDetails] = useState({
    logo: null,
    name: "",
    description: "",
    language: [],
    library: [],
    other_lang: [],
    features: [],
    github: "",
    link: "",
    poster: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);

  const setValues = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (files[0]) {
        setProjectDetails((prev) => ({ ...prev, [name]: files[0] }));

        // Create preview URL
        const reader = new FileReader();
        reader.onload = (event) => {
          if (name === "logo") {
            setLogoPreview(event.target.result);
          } else if (name === "poster") {
            setPosterPreview(event.target.result);
          }
        };
        reader.readAsDataURL(files[0]);
      }
    } else {
      setProjectDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <ProjectFormContext.Provider
      value={{
        projectDetails,
        setProjectDetails,
        setValues,
        logoPreview,
        posterPreview,
      }}
    >
      {children}
    </ProjectFormContext.Provider>
  );
};

ProjectFormProvider.propTypes = {
  children: PropTypes.node,
};
