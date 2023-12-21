import { logo, saksham } from "../assets";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center  w-screen py-6 px-10 relative">
      <div className="flex items-center gap-4 absolute left-10 top-6 group select-none">
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
      <h1 className="text-6xl font-extrabold ">Projects</h1>
      <button className="h-fitflex items-center justify-center absolute right-10 top-5 hover:border-emerald-300/30 active:border-emerald-600/30 transition-all border-transparent border-8 rounded-full aspect-square ">
        <img src={saksham} alt="user" className=" h-14" />
      </button>
    </div>
  );
};
