import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { logo, saksham } from "../assets";

// Replace with your CloudFront URL if you set it up

const Navbar = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = logo;

    if (imgRef.current) {
      imgRef.current.src = img.src;
    }
  }, []);

  return (
    <div className="flex items-center justify-between w-screen py-4 px-10 z-10 border-b border-gray-900 sticky top-0 bg-black">
      <div className="flex items-center gap-4 group select-none">
        <div className="w-12 h-12 flex items-center justify-center">
          {" "}
          {/* Placeholder color */}
          <img
            ref={imgRef}
            alt="logo"
            loading="eager"
            className="h-12 w-12 object-contain group-hover:scale-110 transition-all group-active:scale-100 invert"
          />
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-xl font-extrabold group-hover:text-yellow-400 transition-all group-active:text-yellow-500">
            sakshxm08
          </div>
          <div className="text-xs tracking-wide text-center w-full group-hover:text-yellow-400 group-active:tracking-wide group-active:text-yellow-500 group-hover:tracking-wider transition-all">
            Saksham Gambhir
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold">Projects</h1>
      <div className="flex gap-4 items-center">
        <Link
          to="/auth"
          className="border p-2 text-xs cursor-pointer hover:bg-white/20 transition-all rounded"
        >
          Add Project
        </Link>
        <button className="h-12 flex items-center justify-center hover:ring-emerald-300/30 active:ring-emerald-600/30 transition-all ring-transparent ring-8 rounded-full aspect-square ">
          <img src={saksham} alt="user" className=" h-12 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
