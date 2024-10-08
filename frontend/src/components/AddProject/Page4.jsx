import { useContext } from "react";
import { ProjectFormContext } from "../../context/ProjectFormContext";
import { IoCloudUploadOutline, IoImageOutline } from "react-icons/io5";

const Page4 = () => {
  const { projectDetails, posterPreview, setValues } =
    useContext(ProjectFormContext);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 mt-2">
        <span className="w-fit text-sm font-medium leading-6">
          Upload your project&apos;s cover image
        </span>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full aspect-video  rounded-xl flex items-center justify-center bg-black/20 object-cover overflow-hidden">
            {posterPreview ? (
              <img
                src={posterPreview}
                alt="poster"
                className="h-full object-cover"
              />
            ) : (
              <IoImageOutline size={28} className="text-slate-300" />
            )}
          </div>

          <div className="w-full">
            {!posterPreview ? (
              <label
                htmlFor="posterUpload"
                className="rounded-xl flex gap-2 items-center justify-center font-medium text-xs py-2 px-8 w-full text-slate-50 hover:bg-gray-200 hover:text-slate-800  cursor-pointer border transition-all"
              >
                <IoCloudUploadOutline size={16} />
                Upload image
              </label>
            ) : (
              <label
                htmlFor="posterUpload"
                className="rounded-xl flex gap-2 items-center justify-center font-medium text-xs py-2 px-8 w-full text-slate-50 hover:bg-gray-200 hover:text-slate-800  cursor-pointer border transition-all"
              >
                <IoCloudUploadOutline size={16} />
                Upload another image
              </label>
            )}
            <input
              type="file"
              className="hidden"
              id="posterUpload"
              name="poster"
              onChange={setValues}
              accept="image/*"
            />
          </div>
        </div>
      </div>
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
