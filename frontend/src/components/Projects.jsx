import { saksham } from "../assets";
import { Project } from "./Project";
import { ProjectPreview } from "./ProjectPreview";

export const Projects = () => {
  const projects = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <div className="py-10 flex gap-40 items-center">
      <div className="w-1/3 flex flex-col gap-4 ml-32">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="w-2/3 bg-black/20 backdrop-blur-3xl rounded-tl-3xl rounded-bl-3xl h-fit overflow-hidden p-8">
        <ProjectPreview />
      </div>
    </div>
  );
};
