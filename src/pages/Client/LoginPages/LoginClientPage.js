import React, { useEffect, useState } from "react";
import H_FoodbudLogo from "../../../assets/H-FoodbudLogo.png";
import clp_login from "../../../assets/clp-login.png";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Cookies from "js-cookie";
import { CookiesProvider, useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginClientPage({ setCookie }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const baseUrl = "http://3.27.163.46:9001";

    try {
      const login = await axios.post(`${baseUrl}/api/user/login`, {
        username: username,
        password: password,
      });
      if (login.data) {
        alert("User Login Successfully");
        // console.log(login.data.loginUser.client_email);
        // Cookies.set("username", login.data.loginUser.client_email, {
        //   expires: 0,
        // });
        setCookie("username", login.data.loginUser.client_email, {
          expires: 0,
        });
        // setIsLoggedIn(true);
        navigate("/client");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Please check your credentials or verify your account");
    }
  };

  return (
    <div>
      <div className="flex h-screen w-full absolute inset-0 font-['DM_Sans']">
        <div className="flex flex-1 flex-grow items-center justify-center bg-cover bg-center">
          <div className="w-full h-full bg-white p-8 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img className="w-48 h-16" src={H_FoodbudLogo} alt="" />
              <h1 className="text-xl font-bold leading-tight tracking-normal  md:text-2xl dark:text-pink-primary-400">
                User Login
              </h1>
              <h1 className="text-black text-lg">
                Welcome back, please login to your account.
              </h1>
              <form className=" relative space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="juandelacruz@gmail.com"
                    required=""
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Password
                  </label>
                  <div className="flex justify-center items-center">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className=" bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="absolute right-2 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <a
                      href="/changePassword"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-black"
                    >
                      Forgot your{" "}
                      <span className="dark:text-pink-primary-400">
                        password?
                      </span>
                    </a>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="w-full text-white bg-pink-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button> */}
                <div>
                  {/* <Link
                    to="/client/home"
                    className="transition-all delay-50 cursor-pointer font-['DM_Sans'] px-4 py-2 text-md font-semibold text-white shadow-middle rounded-md bg-primary-400"
                  >
                    Login
                  </Link> */}
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="transition-all delay-50 cursor-pointer font-['DM_Sans'] px-4 py-2 text-md font-semibold text-white shadow-middle rounded-md bg-primary-400"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-black"
                  >
                    No account yet?{" "}
                    <span className="dark:text-pink-primary-400">
                      Book Now!
                    </span>
                  </a>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Are you an admin?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-secondary-500"
                  >
                    Login Here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden sm:block flex-grow w-full h-screen ">
          <img className="w-full h-full object-cover" src={clp_login} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginClientPage;
