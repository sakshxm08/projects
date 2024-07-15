import { useContext } from "react";
import { ProjectFormContext } from "../../context/ProjectFormContext";

const Page4 = () => {
  const { projectDetails, setValues } = useContext(ProjectFormContext);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label htmlFor="github" className="w-fit text-sm font-medium leading-6">
          Github Link
        </label>
        <div className="mt-1">
          <input
            id="github"
            name="github"
            type="text"
            autoComplete="text"
            value={projectDetails.github}
            onChange={setValues}
            required
            className="block w-full rounded-md border-0 py-1.5 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="link" className="w-fit text-sm font-medium leading-6">
          Website Link
        </label>
        <div className="mt-1">
          <input
            id="link"
            name="link"
            type="text"
            autoComplete="text"
            value={projectDetails.link}
            onChange={setValues}
            required
            className="block w-full rounded-md border-0 py-1.5 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
