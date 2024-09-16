import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/loaders/Loader";
import { IoIosArrowDown } from "react-icons/io";
import LaptopMockup from "../components/LaptopMockup/LaptopMockup";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

const ProjectPage = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  const [loading, setLoading] = useState(true);

  const [techCount, setTechCount] = useState(3);

  const [technologies, setTechnologies] = useState([]);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const contentRefs = useRef({});

  const toggleFeature = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/project/${id}`
        );
        setProject(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error(
            error.response?.data?.error ||
              "An error occurred while fetching the project"
          );
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("No response received from the server");
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error("An error occurred while setting up the request");
        }
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };
    getProject();
  }, [id]);
  useEffect(() => {
    if (project) {
      setTechnologies([
        ...(project.language || []),
        ...(project.library || []),
        ...(project.other_lang || []).map((name, index) => ({
          id: `other_${index + 1}`,
          name,
          avatar: null,
        })),
      ]);
    }
  }, [project]);

  useEffect(() => {
    // Update height for all items
    if (project) {
      project.features.forEach((feature) => {
        const element = contentRefs.current[feature._id];
        if (element) {
          element.style.maxHeight =
            expandedFeature === feature._id
              ? `${element.scrollHeight}px`
              : "0px";
        }
      });
    }
  }, [expandedFeature, project]);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex items-center justify-center max-w-screen-md w-11/12 mx-auto py-10">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4 flex-col">
          <img src={project.logo} alt={project.name} className="h-24" />
          <h1 className="text-4xl font-semibold">{project.name}</h1>
          <div className="flex gap-4 text-sm">
            <Link
              to={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 flex items-center justify-center gap-2 border border-gray-500 hover:bg-gray-400/30 rounded-full"
            >
              <FaGithub size={16} />
              Github
            </Link>
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 flex items-center justify-center gap-2 border border-gray-500 hover:bg-gray-400/30 rounded-full"
            >
              <GoLinkExternal size={16} />
              Visit Website
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {technologies.slice(0, techCount).map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="flex items-center justify-center gap-2 text-xs bg-gray-400/30 rounded-full px-4 py-2"
                >
                  {tech?.avatar && (
                    <img src={tech.avatar} alt={tech.name} className="h-4" />
                  )}
                  <span>{tech.name}</span>
                </div>
              );
            })}
            {technologies.length > techCount && (
              <button
                onClick={() => setTechCount(technologies.length)}
                className="text-xs text-white outline outline-1 outline-white/30 rounded-full hover:bg-white/10 transition-all px-4 py-2"
              >
                +{technologies.length - techCount} more
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-center text-gray-400">
          {project.description}
        </p>

        <div className="w-full my-4 flex items-center justify-center mx-auto">
          <LaptopMockup url={project.link} />
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-4">Project Features</h1>
          <div className="flex flex-col">
            {project.features?.map((feature) => (
              <div
                key={feature._id}
                className="border-b border-gray-400/30 py-2 overflow-hidden"
              >
                <button
                  onClick={() => toggleFeature(feature._id)}
                  className="w-full text-left py-2 font-medium focus:outline-none flex justify-between items-center"
                >
                  <span>{feature.title}</span>
                  <span className="transform transition-transform duration-200">
                    <IoIosArrowDown
                      className={`${
                        expandedFeature === feature._id
                          ? "rotate-180"
                          : "rotate-0"
                      } transition-all duration-300`}
                    />
                  </span>
                </button>
                <div
                  ref={(el) => (contentRefs.current[feature._id] = el)}
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{ maxHeight: "0px" }}
                >
                  <p className="px-4 py-1 text-sm text-gray-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
