import { useContext } from "react";
import { ProjectFormContext } from "../../context/ProjectFormContext";

export const Page3 = () => {
  const features = [
    {
      title: "Contact Form Integration",
      desc: "Allow users to easily reach out to you through a contact form.",
      value: "contact_form",
    },
    {
      title: "Newsletter Signup",
      desc: "Enable users to subscribe to your newsletter for updates and announcements.",
      value: "newsletter",
    },
    {
      title: "Social Media Integration",
      desc: "Connect your website to social media platforms for increased engagement.",
      value: "social_media",
    },
    {
      title: "Search Feature",
      desc: "Incorporate a search bar for users to easily find specific content on your website.",
      value: "search_feature",
    },
    {
      title: "User Login",
      desc: "Implement user authentication for personalized experiences and restricted content.",
      value: "user_login",
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      desc: "Include a section addressing common queries to enhance user experience.",
      value: "faqs",
    },
    {
      title: "Blog or News Updates",
      desc: "Allow users to easily reach out to you through a contact form",
      value: "blogs",
    },
  ];
  const { projectDetails, setProjectDetails } = useContext(ProjectFormContext);

  const handleToggle = (c) => {
    // return the first index or -1
    const clickedCategory = projectDetails.features.indexOf(c);
    const all = [...projectDetails.features];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    setProjectDetails({ ...projectDetails, features: all });
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-extrabold text-3xl text-gray-100 ">
          Additional Features
        </h2>
        <p className="text-gray-200 text-sm">
          Choose additional features for your project
        </p>
      </div>
      <div>
        <div className="grid space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="relative flex items-start">
              <div className="flex items-center h-5 mt-1">
                <input
                  id={feature.value}
                  value={feature.value}
                  name="features"
                  type="checkbox"
                  checked={
                    projectDetails.features.findIndex(
                      (checkedFeature) => checkedFeature === feature.value
                    ) !== -1
                  }
                  onChange={() => handleToggle(feature.value)}
                  className="border-gray-200 rounded text-yellow-600 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  aria-describedby={feature.value + "_description"}
                />
              </div>
              <label htmlFor={feature.value} className="ms-3">
                <span className="block text-sm font-semibold text-gray-200">
                  {feature.title}
                </span>
                <span
                  id={feature.value + "_description"}
                  className="block text-xs text-gray-300"
                >
                  {feature.desc}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
