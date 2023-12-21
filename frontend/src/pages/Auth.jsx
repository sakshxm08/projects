import { Link } from "react-router-dom";
import { saksham } from "../assets";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passHidden, setPassHidden] = useState(true);

  const pass_input = useRef();

  const togglePass = () => {
    setPassHidden(!passHidden);
    if (passHidden) pass_input.current.type = "text";
    else pass_input.current.type = "password";
  };

  return (
    <>
      <Link
        to="/"
        className="absolute top-20 left-20 flex items-center justify-center gap-1 hover:text-yellow-500"
      >
        <IoIosArrowBack /> Back
      </Link>
      <div className="flex min-h-full items-center flex-1 flex-col justify-center px-6 py-28 lg:px-8">
        <div className="sm:mx-auto sm:w-full mt-6 sm:max-w-sm flex flex-col items-center justify-center gap-4">
          <img
            className="mx-auto h-20 w-auto"
            src={saksham}
            alt="Saksham Gambhir"
          />
          <h1 className="text-base font-bold">sakshxm08.in</h1>

          <h2 className="  capitalize text-center text-3xl font-bold leading-9 tracking-tight ">
            Verify yourself
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="w-fit text-sm font-medium leading-6"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-yellow-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="w-fit text-sm font-medium leading-6 "
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  ref={pass_input}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm bg-black/20 focus:bg-black/40 ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-yellow-100 sm:text-sm sm:leading-6"
                />
                <span
                  className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                  onClick={togglePass}
                >
                  {passHidden ? (
                    <IoEyeOffOutline size={16} />
                  ) : (
                    <IoEye size={16} />
                  )}
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border-2 border-white/40 hover:border-yellow-500 hover:text-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
