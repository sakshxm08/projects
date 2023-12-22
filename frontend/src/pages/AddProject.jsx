import { useState } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { Page1 } from "../components/AddProject/Page1";
export const AddProject = () => {
  const [page, setPage] = useState(1);

  //   {JSON.parse(localStorage.getItem("user")).username}

  return (
    <div className="py-10">
      <div className=" max-w-xl w-5/6 mx-auto backdrop-blur-3xl bg-white/10 shadow rounded-xl  py-10 px-20">
        <div className="flex items-center justify-between mb-10">
          {Array.from({ length: 4 }).map((x, index) => (
            <>
              <span
                className={`py-1 px-3 aspect-square rounded-full border transition-all   ${
                  page === index + 1 ? "bg-gray-200 text-black" : " text-white"
                }`}
                key={index}
              >
                {index + 1}
              </span>
              {index !== 3 && <div className="h-px w-full bg-white"></div>}
            </>
          ))}
        </div>
        {page === 1 ? <Page1 /> : null}
        <div className="flex justify-end items-center gap-4 mt-10 h-16">
          {page > 1 && (
            <button
              className="text-xs flex  items-center justify-center px-3 py-2 font-semibold gap-1 hover:gap-2 text-gray-300 transition-all hover:font-bold"
              onClick={() => setPage((page) => page - 1)}
            >
              <IoIosArrowRoundBack size={24} />
              Back
            </button>
          )}
          {page < 4 && (
            <button
              className="border border-yellow-500  rounded-xl px-6 py-3 text-xs font-semibold bg-yellow-500 hover:bg-yellow-500/80 hover:border-yellow-500/80 transition-all text-gray-800"
              onClick={() => setPage((page) => page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
