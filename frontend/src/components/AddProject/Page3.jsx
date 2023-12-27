export const Page3 = () => {
  const features = [
    {
      title: "Contact Form Integration",
      desc: "Allow users to easily reach out to you through a contact form.",
    },
    {
      title: "Newsletter Signup",
      desc: "Enable users to subscribe to your newsletter for updates and announcements.",
    },
    {
      title: "Social Media Integration",
      desc: "Connect your website to social media platforms for increased engagement.",
    },
    {
      title: "Search Feature",
      desc: "Incorporate a search bar for users to easily find specific content on your website.",
    },
    {
      title: "User Login",
      desc: "Implement user authentication for personalized experiences and restricted content.",
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      desc: "Include a section addressing common queries to enhance user experience.",
    },
    {
      title: "Blog or News Updates",
      desc: "Allow users to easily reach out to you through a contact form",
    },
  ];
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-extrabold text-3xl text-gray-100 ">
          Additional Features
        </h2>
        <p className="text-gray-200 text-sm">
          Choose additional features for your website.
        </p>
      </div>
      <div>
        <div className="grid space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="relative flex items-start">
              <div className="flex items-center h-5 mt-1">
                <input
                  id="hs-checkbox-delete"
                  name="hs-checkbox-delete"
                  type="checkbox"
                  className="border-gray-200 rounded text-yellow-600 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  aria-describedby="hs-checkbox-delete-description"
                />
              </div>
              <label htmlFor="hs-checkbox-delete" className="ms-3">
                <span className="block text-sm font-semibold text-gray-200">
                  {feature.title}
                </span>
                <span
                  id="hs-checkbox-delete-description"
                  className="block text-xs text-gray-200"
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
