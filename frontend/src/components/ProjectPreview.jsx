import { saksham } from "../assets";

export const ProjectPreview = () => {
  const project = {
    logo: saksham,
    name: "Portfolio",
    description:
      "This portfolio website is a reflection of my passion for coding and web development. Crafted with React for dynamic and responsive interactions, and styled with the sleek aesthetics of TailwindCSS, this platform not only showcases my technical skills but also represents my commitment to modern and elegant design.",
    language: {
      id: 2,
      name: "Python",
      avatar: "https://asset.brandfetch.io/idbpOFBgcc/idcTemqrrW.svg",
    },
    library: {
      id: 4,
      name: "Next.js",
      avatar: "https://asset.brandfetch.io/id2alue-rx/id9K4_Y8_G.jpeg",
    },
    other_lang: ["HTML", "CSS", "TailwindCSS"],
    features: [
      {
        title: "Mobile Responsiveness",
        desc: "Ensure your website dazzles on every screen with responsive design.",
        _id: 1,
      },
      {
        title: "Contact Form Integration",
        desc: "Allow users to easily reach out to you through a contact form.",
        _id: 2,
      },
      {
        title: "Newsletter Signup",
        desc: "Enable users to subscribe to your newsletter for updates and announcements.",
        _id: 3,
      },
      {
        title: "Social Media Integration",
        desc: "Connect your website to social media platforms for increased engagement.",
        _id: 4,
      },
    ],
  };
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex items-center gap-4">
        <img
          src={project.logo}
          alt={project.name}
          className="w-24 rounded-full aspect-square object-contain"
        />
        <span className="text-4xl font-bold">{project.name}</span>
      </div>
      <span className="text-sm">{project.description}</span>

      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
