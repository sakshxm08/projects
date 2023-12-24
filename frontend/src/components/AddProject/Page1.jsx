import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
export const Page1 = () => {
  const [img, setImg] = useState(null);
  const convertToBase64 = (e) => {
    const reader = new FileReader();
    const img = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/svg"];
    if (!allowedTypes.includes(img?.type))
      return alert("Only JPEG, PNG, and SVG images are allowed.");
    if (img) {
      if (img.size / 1048576 > 2)
        return alert("Please upload an image of size < 2MB");
      reader.readAsDataURL(img);
      reader.onload = () => {
        setImg(reader.result);
      };
    }
  };
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-extrabold text-3xl text-gray-100 ">
          Basic Information
        </h2>
        <p className="text-gray-200 text-sm">
          Provide basic details about your website project.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <span className="w-fit text-sm font-medium leading-6">
          Introduce your project&apos;s logo
        </span>
        <div className="flex gap-4 items-center">
          <div className="w-28 aspect-square  rounded-xl flex items-center justify-center bg-black/20 object-cover overflow-hidden">
            {img ? (
              <img src={img} alt="" className="w-28 object-cover" />
            ) : (
              <IoImageOutline size={28} className="text-slate-300" />
            )}
          </div>

          <div className="w-full">
            {!img ? (
              <label
                htmlFor="imgUpload"
                className="rounded-xl flex gap-2 items-center justify-center font-medium text-xs py-2 px-8 w-fit text-slate-50 hover:bg-gray-200 hover:text-slate-800  cursor-pointer border backdrop-blu transition-all"
              >
                <IoCloudUploadOutline size={16} />
                Upload image
              </label>
            ) : (
              <label
                htmlFor="imgUpload"
                //   onClick={() => setImg("")}
                className="rounded-xl flex gap-2 items-center justify-center font-medium text-xs py-2 px-8 w-fit text-slate-50 hover:bg-gray-200 hover:text-slate-800  cursor-pointer border backdrop-blu transition-all"
              >
                <IoCloudUploadOutline size={16} />
                Upload another image
              </label>
            )}
            <input
              type="file"
              className="hidden"
              id="imgUpload"
              onChange={convertToBase64}
              accept="image/*"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="w-fit text-sm font-medium leading-6">
          What&apos;s your project called?
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="text"
            required
            className="block w-full rounded-md border-0 py-1.5 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="w-fit text-sm font-medium leading-6"
        >
          Describe your project in a nutshell
        </label>
        <div className="mt-1">
          <textarea
            id="description"
            name="description"
            rows={3}
            required
            className="block w-full rounded-md border-0 py-1.5 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
