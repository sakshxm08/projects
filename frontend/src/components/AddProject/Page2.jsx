import { useContext, useState } from "react";
import { Dropdown } from "./Dropdown";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { ProjectFormContext } from "../../context/ProjectFormContext";

export const Page2 = () => {
  const languages = [
    {
      id: 1,
      name: "JavaScript",
      avatar: "https://asset.brandfetch.io/idq5ck33b2/id8Fb4RR16.png",
    },
    {
      id: 2,
      name: "Python",
      avatar: "https://asset.brandfetch.io/idbpOFBgcc/idcTemqrrW.svg",
    },
    {
      id: 3,
      name: "Java",
      avatar: "https://asset.brandfetch.io/id6uEhoiBT/idJdbKiNbX.svg",
    },
    {
      id: 4,
      name: "C++",
      avatar: "https://asset.brandfetch.io/idOOXqeOLj/idZyC3f2Yv.png",
    },
    {
      id: 5,
      name: "Ruby",
      avatar: "https://asset.brandfetch.io/idRGkoG2vp/id6P5bGYTN.svg",
    },
    {
      id: 6,
      name: "PHP",
      avatar: "https://asset.brandfetch.io/idYqAg6C_T/idrmGAHGiz.jpeg",
    },
    {
      id: 7,
      name: "Swift",
      avatar: "https://asset.brandfetch.io/id43MWupxN/idarMU4lGB.jpeg",
    },
    {
      id: 8,
      name: "TypeScript",
      avatar: "https://asset.brandfetch.io/idKX_Hb7va/idVe_I6YV3.png",
    },
    {
      id: 9,
      name: "Go",
      avatar: "https://asset.brandfetch.io/idXO72MFSq/idtEtTwTjQ.png",
    },
    {
      id: 10,
      name: "Kotlin",
      avatar: "https://asset.brandfetch.io/id8oU9wOdk/idritPOXtM.png",
    },
  ];
  const libraries = [
    {
      id: 1,
      name: "React.js",
      avatar: "https://asset.brandfetch.io/idbkMiejO4/idee5k_Xjl.svg",
    },
    {
      id: 2,
      name: "Angular",
      avatar: "https://asset.brandfetch.io/idriCbvjOU/idoQhcof0i.jpeg",
    },
    {
      id: 3,
      name: "Vue.js",
      avatar: "https://asset.brandfetch.io/idT-7aLCAj/idYSAxBM8n.svg",
    },
    {
      id: 4,
      name: "Next.js",
      avatar: "https://asset.brandfetch.io/id2alue-rx/id9K4_Y8_G.jpeg",
    },
    {
      id: 5,
      name: "Django",
      avatar: "https://asset.brandfetch.io/idnYlnDpTD/id15mhlprs.png",
    },
    {
      id: 6,
      name: "Ruby on Rails",
      avatar: "https://asset.brandfetch.io/idxO9z49eB/idlYXzjNMl.png",
    },
    {
      id: 7,
      name: "Laravel",
      avatar: "https://asset.brandfetch.io/ide68-31CH/idhaVMa0Af.svg",
    },
    {
      id: 8,
      name: "Spring",
      avatar: "https://asset.brandfetch.io/idkd3FItdK/idwTr6RbuS.png",
    },
    {
      id: 9,
      name: "Express.js",
      avatar: "https://asset.brandfetch.io/idh1lvV1BF/iddg3cqCPj.png",
    },
    {
      id: 10,
      name: "Flask",
      avatar: "https://asset.brandfetch.io/idDFTJRqUQ/idmUi1vJRv.svg",
    },
  ];

  const { projectDetails, setProjectDetails } = useContext(ProjectFormContext);
  const [keywords, setKeywords] = useState(projectDetails.other_lang);
  const [keyword, setKeyword] = useState("");
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-extrabold text-3xl text-gray-100 ">
          Technical Details
        </h2>
        <p className="text-gray-200 text-sm">
          Tell us about the technical aspects of your project.
        </p>
      </div>
      <div className="mt-2">
        <Dropdown
          options={languages}
          initial={projectDetails.language || []}
          label={"Programming language used"}
          name={"language"}
        />
      </div>
      <div>
        <Dropdown
          options={libraries}
          initial={projectDetails.library || []}
          label={"Frameworks or Libraries used"}
          name={"library"}
        />
      </div>
      <div>
        <label htmlFor="name" className="w-fit text-sm font-medium leading-6">
          Other technologies used
        </label>
        <div className="mt-1 relative">
          <input
            value={keyword}
            id="keyword"
            onChange={(e) => setKeyword(e.target.value)}
            name="name"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pr-10 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (
                keywords.find(
                  (key) => key.toLowerCase() === keyword.toLowerCase()
                ) ||
                keyword === ""
              )
                return alert("Enter unique keywords");
              keywords.push(keyword);
              setProjectDetails({ ...projectDetails, other_lang: keywords });
              setKeyword("");
            }}
            className="text-xs rounded-full border  p-1 transition-all absolute right-2 top-2 hover:bg-white hover:text-gray-800"
          >
            <FiPlus />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {keywords.length !== 0 &&
            keywords.map((keyword) => (
              <span
                key={keyword}
                className="flex items-center justify-center gap-1 bg-yellow-500 text-black py-1 pl-2 rounded-md text-xs w-fit"
              >
                {keyword}
                <IoIosClose
                  className="text-lg cursor-pointer"
                  onClick={() => {
                    setKeywords(() =>
                      keywords.filter((key) => key !== keyword)
                    );
                    setProjectDetails({
                      ...projectDetails,
                      other_lang: keywords.filter((key) => key !== keyword),
                    });
                  }}
                />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
