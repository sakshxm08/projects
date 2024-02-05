// import { useState } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { Page1 } from "../components/AddProject/Page1";
import { Page2 } from "../components/AddProject/Page2";
import { Page3 } from "../components/AddProject/Page3";
import { Link, useSearchParams } from "react-router-dom";
import { Fragment } from "react";
export const AddProject = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="py-10">
      <div className=" max-w-xl w-5/6 mx-auto backdrop-blur-3xl bg-white/10 shadow rounded-xl  py-10 px-20">
        <div className="flex items-center justify-between mb-10">
          {Array.from({ length: 4 }).map((x, index) => (
            <Fragment key={index}>
              <span
                className={`py-1 px-3 aspect-square rounded-full border transition-all select-none ${
                  parseInt(searchParams.get("page")) === index + 1
                    ? "bg-gray-200 text-black"
                    : " text-white"
                }`}
                key={index}
              >
                {index + 1}
              </span>
              {index !== 3 && <div className="h-px w-full bg-white"></div>}
            </Fragment>
          ))}
        </div>
        {parseInt(searchParams.get("page")) === 1 ? (
          <Page1 />
        ) : parseInt(searchParams.get("page")) === 2 ? (
          <Page2 />
        ) : parseInt(searchParams.get("page")) === 3 ? (
          <Page3 />
        ) : null}
        <div className="flex justify-end items-center gap-4 mt-10 h-16">
          {parseInt(searchParams.get("page")) > 1 && (
            <Link
              to={-1}
              className="text-xs flex  items-center justify-center px-3 py-2 font-semibold gap-1 hover:gap-2 text-gray-300 transition-all hover:font-bold"
            >
              <IoIosArrowRoundBack size={24} />
              Back
            </Link>
          )}
          {parseInt(searchParams.get("page")) < 4 && (
            <button
              className="border border-yellow-500  rounded-xl px-6 py-3 text-xs font-semibold bg-yellow-500 hover:bg-yellow-500/80 hover:border-yellow-500/80 transition-all text-gray-800"
              onClick={() =>
                setSearchParams({
                  page: parseInt(searchParams.get("page")) + 1,
                })
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
