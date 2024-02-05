import { Fragment, useContext, useState } from "react";
import { ProjectFormContext } from "../../context/ProjectFormContext";
import { IoAdd } from "react-icons/io5";
import { Dialog, Transition } from "@headlessui/react";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";

const features = [
  {
    title: "Mobile Responsiveness",
    desc: " Ensure your website dazzles on every screen with responsive design.",
    value: "responsiveness",
    _id: 1,
  },
  {
    title: "Contact Form Integration",
    desc: "Allow users to easily reach out to you through a contact form.",
    value: "contact_form",
    _id: 2,
  },
  {
    title: "Newsletter Signup",
    desc: "Enable users to subscribe to your newsletter for updates and announcements.",
    value: "newsletter",
    _id: 3,
  },
  {
    title: "Social Media Integration",
    desc: "Connect your website to social media platforms for increased engagement.",
    value: "social_media",
    _id: 4,
  },
  {
    title: "Search Feature",
    desc: "Incorporate a search bar for users to easily find specific content on your website.",
    value: "search_feature",
    _id: 5,
  },
  {
    title: "User Login",
    desc: "Implement user authentication for personalized experiences and restricted content.",
    value: "user_login",
    _id: 6,
  },
  {
    title: "Analytics Tracking",
    desc: "Implement analytics tools to gather insights into user behavior and website performance.",
    value: "analytics",
    _id: 7,
  },
];

export const Page3 = () => {
  const { projectDetails, setProjectDetails } = useContext(ProjectFormContext);
  // const [checkedFeatures, setCheckedFeatures] = useState({});
  const handleCheckboxChange = (_id) => {
    // Find the feature by _id
    const selectedFeature = features.find((feature) => feature._id === _id);

    // Check if the feature is already in projectDetails.features
    const isFeatureSelected = projectDetails.features.some(
      (feature) => feature._id === _id
    );

    // Update projectDetails based on checkbox change
    if (isFeatureSelected) {
      // Remove the feature if it was checked and now unchecked
      setProjectDetails({
        ...projectDetails,
        features: projectDetails.features.filter(
          (feature) => feature._id !== _id
        ),
      });
    } else {
      // Add the feature if it was unchecked and now checked
      setProjectDetails({
        ...projectDetails,
        features: [...projectDetails.features, selectedFeature],
      });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [customFeature, setCustomFeature] = useState({
    title: "",
    desc: "",
  });

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
          {features.map((feature) => (
            <div
              key={feature._id}
              className="relative flex justify-between items-center"
            >
              <div className=" flex items-start flex-1">
                <div className="flex items-center h-5 mt-1">
                  <input
                    id={feature._id}
                    value={feature._id}
                    name="features"
                    type="checkbox"
                    checked={projectDetails.features.some(
                      (selectedFeature) => selectedFeature._id === feature._id
                    )}
                    onChange={() => handleCheckboxChange(feature._id)}
                    className="border-gray-200 rounded text-yellow-600 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    aria-describedby={feature._id + "_description"}
                  />
                </div>
                <label htmlFor={feature._id} className="ms-3">
                  <span className="block text-sm font-semibold text-gray-200">
                    {feature.title}
                  </span>
                  <span
                    id={feature._id + "_description"}
                    className="block text-xs text-gray-300"
                  >
                    {feature.desc}
                  </span>
                </label>
              </div>
              {feature.isCustom && (
                <MdDeleteOutline
                  onClick={() => {
                    const updatedFeatures = projectDetails.features.filter(
                      (addedFeature) => feature._id !== addedFeature._id
                    );

                    // Update projectDetails with the modified features array
                    setProjectDetails({
                      ...projectDetails,
                      features: updatedFeatures,
                    });

                    const indexToDelete = features.findIndex(
                      (element) => element._id === feature._id
                    );
                    if (indexToDelete !== -1) {
                      features.splice(indexToDelete, 1);
                    }
                    toast("Custom Feature deleted", {
                      duration: 2000,
                      icon: <MdDeleteOutline size={24} color="red" />,
                    });
                  }}
                  className="p-1 hover:bg-white/20 transition-all cursor-pointer rounded-full"
                  size={28}
                />
              )}
            </div>
          ))}
        </div>
        {/* {customFeatures.map((feature) => (
          <CustomFeature key={feature._id} feature={feature} />
        ))} */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex w-full mt-4 -mb-6 items-center justify-center gap-1 text-sm py-2 backdrop-blur rounded hover:bg-white/20 transition-all"
        >
          <IoAdd />
          Add custom feature
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/80 backdrop-blur-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Add Custom Feature
                  </Dialog.Title>
                  <div className="mt-2">
                    <div>
                      <label
                        htmlFor="title"
                        className="w-fit text-sm font-medium leading-6 text-gray-700"
                      >
                        What&apos;s the feature called?
                      </label>
                      <div className="mt-1">
                        <input
                          id="title"
                          name="title"
                          type="text"
                          autoComplete="text"
                          value={customFeature.title}
                          onChange={(e) =>
                            setCustomFeature({
                              ...customFeature,
                              title: e.target.value,
                            })
                          }
                          required
                          className="block w-full text-gray-800 rounded-md border-0 py-1.5 bg-black/10 focus:bg-black/20 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="desc"
                        className="w-fit text-sm font-medium leading-6 text-gray-700"
                      >
                        Describe the feature in a nutshell
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="desc"
                          name="desc"
                          value={customFeature.desc}
                          onChange={(e) =>
                            setCustomFeature({
                              ...customFeature,
                              desc: e.target.value,
                            })
                          }
                          rows={3}
                          required
                          className="block w-full text-gray-800 rounded-md border-0 py-1.5 bg-black/10 focus:bg-black/20 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="border border-yellow-500  rounded-xl px-6 py-3 text-xs font-semibold bg-yellow-500 hover:bg-yellow-500/80 hover:border-yellow-500/80 transition-all text-gray-800"
                      onClick={() => {
                        if (
                          customFeature.title.trim() !== "" &&
                          customFeature.desc.trim() !== ""
                        ) {
                          // Create a new feature object
                          const newFeature = {
                            _id: Date.now(), // You can use a better ID generation method
                            title: customFeature.title,
                            desc: customFeature.desc,
                          };
                          features.push({
                            ...newFeature,
                            isCustom: true, // Add a property to identify custom features
                          });
                          // Update projectDetails with the new feature
                          setProjectDetails({
                            ...projectDetails,
                            features: [
                              ...projectDetails.features,
                              {
                                ...newFeature,
                                isCustom: true, // Add a property to identify custom features
                              },
                            ],
                          });

                          toast.success(
                            <span>Custom Feature added successfully</span>
                          );
                          // Clear the form after adding the custom feature
                          setCustomFeature({ title: "", desc: "" });
                        }
                        setIsOpen(false);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
