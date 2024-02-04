import { saksham } from "../assets";
import { IoAdd } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div className="mt-28 max-w-md w-5/6 mx-auto backdrop-blur-3xl bg-white/10 shadow rounded-xl  pt-12 pb-20">
      <Link
        to="/"
        className="text-sm flex items-center gap-1 mb-8 ml-12 hover:text-gray-800 hover:bg-gray-100 py-1 px-2 w-fit rounded-full transition-all"
      >
        <IoIosArrowBack /> Home
      </Link>
      <div className="flex items-center justify-center gap-4">
        <img src={saksham} className="aspect-square w-20" alt="" />
        <div className="flex flex-col justify-center">
          <div className="text-3xl">Saksham Gambhir</div>
          <h2 className="text-xl font-extrabold">@sakshxm08</h2>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-4 mt-20">
        <Link
          to="/add?page=1"
          className="border border-gray-100 rounded hover:bg-gray-100 hover:text-gray-800 cursor-pointer transition-all py-2 w-80 flex items-center justify-center gap-2"
        >
          <IoAdd />
          Add a new project
        </Link>
        <span className="font-bold">or</span>
        <div className="border border-gray-100 rounded hover:bg-gray-100 hover:text-gray-800 cursor-pointer transition-all py-2 w-80 flex items-center justify-center gap-2">
          <FiEdit3 />
          Edit project details
        </div>
      </div>
    </div>
  );
};
