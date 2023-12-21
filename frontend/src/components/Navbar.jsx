import { Link } from "react-router-dom";
import { logo, saksham } from "../assets";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between  w-screen py-6 px-10 relative">
      <div className="flex items-center gap-4 group select-none">
        <img
          src={logo}
          alt="logo"
          className="h-16 group-hover:scale-110 transition-all group-active:scale-100"
        />
        <div className="flex flex-col cursor-pointer">
          <div className="text-2xl font-extrabold group-hover:text-emerald-300 transition-all group-active:text-emerald-500">
            sakshxm08
          </div>
          <div className="text-sm tracking-wider text-center w-full text-red-300 group-active:tracking-wider group-active:text-emerald-500 group-hover:tracking-widest transition-all">
            Saksham Gambhir
          </div>
        </div>
      </div>
      <h1 className="text-6xl font-extrabold">Projects</h1>
      <div className="flex gap-4 items-center">
        <Link
          to="/auth"
          className="border p-2 text-sm cursor-pointer hover:bg-white/20 transition-all rounded"
        >
          Add Project
        </Link>
        <button className="h-fit flex items-center justify-center hover:border-emerald-300/30 active:border-emerald-600/30 transition-all border-transparent border-8 rounded-full aspect-square ">
          <img src={saksham} alt="user" className=" h-14" />
        </button>
      </div>
    </div>
  );
};
