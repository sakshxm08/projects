import { Link, useNavigate } from "react-router-dom";
import { saksham } from "../assets";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import toast from "react-hot-toast";
import Loader from "../components/loaders/Loader";
import { useLogin } from "../hooks/auth/useLogin";
const Auth = () => {
  const navigate = useNavigate();

  const { login, loading } = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passHidden, setPassHidden] = useState(true);

  const pass_input = useRef();

  const togglePass = () => {
    setPassHidden(!passHidden);
    if (passHidden) pass_input.current.type = "text";
    else pass_input.current.type = "password";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
      toast.success(
        <div>
          Welcome <span className="font-bold">{username}</span>
        </div>
      );
      setUsername("");
      setPassword("");
      setPassHidden(true);
      navigate("/dashboard");
    } catch (error) {
      // Error is already handled in the useLogin hook
      console.error(error);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="mt-20 max-w-md w-5/6 mx-auto backdrop-blur-3xl bg-white/10 shadow rounded-xl  pt-12 pb-20">
        <Link
          to="/"
          className="text-sm flex items-center gap-1 mb-8 ml-12 hover:text-gray-800 hover:bg-gray-100 py-1 px-2 w-fit rounded-full transition-all"
        >
          <IoIosArrowBack /> Back
        </Link>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center gap-4">
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
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="w-fit text-sm font-medium leading-6"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-black/20 focus:bg-black/40 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
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
              <div className="mt-1 relative">
                <input
                  ref={pass_input}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm bg-black/20 focus:bg-black/40 ring-0 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-100 sm:text-sm sm:leading-6"
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
                className="flex w-full justify-center rounded-md border-2 border-white/60  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-200/20 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
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

export default Auth;
