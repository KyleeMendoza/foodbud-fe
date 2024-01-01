import React, { useState, useEffect } from "react";
import Logo from "../assets/H-FoodbudLogo.png";
import { HamburgerMenu } from "./framer-menu/HamburgerMenu";

//IMPORT PAGES

import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  // Function to handle navigation to the client page
  const goToClientPage = () => {
    navigate("/login");
  };

  const navData = [
    { path: "/", name: "Home" },
    { path: "/aboutUs", name: "About Us" },
    { path: "/packages", name: "Packages" },
    { path: "/gallery", name: "Gallery" },
    { path: "/faqs", name: "FAQs" },
    { path: "/contactUs", name: "Contact Us" },
  ];

  // useEffect(() => {
  //   console.log("location: ", window.location.pathname);
  // }, [window.location.pathname]);

  return (
    <>
      <div className="flex justify-center items-center py-5 px-4 lg:py-3 bg-primary500 lg:bg-white">
        <div className="flex w-full lg:max-w-[80%] justify-between ">
          <div className="w-full lg:w-auto flex justify-between flex-row-reverse items-center ">
            <div className="flex items-center text-3xl cursor-pointer">
              <img
                src={Logo}
                alt="logo"
                className="hidden lg:block w-full h-10"
              />
              <div className="z-20 flex lg:hidden lg:items-center">
                <a
                  href="http://www.facebook.com"
                  className=" transition-all delay-50 cursor-pointer font-tbc px-4 py-2 text-sm font-semibold text-primary500 shadow-middle rounded-md bg-white"
                >
                  Sign in
                </a>
              </div>
            </div>
            <div className="lg:hidden">
              {/* <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
              <HamburgerMenu />
            </div>
          </div>

          <div className="hidden items-center gap-14 text-md lg:flex lg:flex-row w-auto py-0 bg-transparent text-black transition-all duration-400">
            {navData.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                isActive={() => window.location.pathname === item.path}
              >
                {index === 0 ? (
                  <p
                    className="text-secondary500 btn-hover font-tbc font-semibold hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
                    style={{
                      color: window.location.pathname === "/" ? "#E7238B" : "",
                    }}
                  >
                    {item.name}
                  </p>
                ) : index === 1 ? (
                  <p
                    className="text-secondary500 btn-hover font-tbc font-semibold hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
                    style={{
                      color:
                        window.location.pathname === "/aboutUs"
                          ? "#E7238B"
                          : "",
                    }}
                  >
                    {item.name}
                  </p>
                ) : index === 2 ? (
                  <p
                    className="text-secondary500 btn-hover font-tbc font-semibold hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
                    style={{
                      color:
                        window.location.pathname === "/packages"
                          ? "#E7238B"
                          : "",
                    }}
                  >
                    {item.name}
                  </p>
                ) : index === 3 ? (
                  <p
                    className="text-secondary500 btn-hover font-tbc font-semibold hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
                    style={{
                      color:
                        window.location.pathname === "/gallery"
                          ? "#E7238B"
                          : "",
                    }}
                  >
                    {item.name}
                  </p>
                ) : index === 4 ? (
                  <p
                    className="text-secondary500 btn-hover font-tbc font-semibold hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
                    style={{
                      color:
                        window.location.pathname === "/faqs" ? "#E7238B" : "",
                    }}
                  >
                    {item.name}
                  </p>
                ) : index === 5 ? (
                  <p
                    className="text-secondary500 btn-hover font-tbc font-semibold hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
                    style={{
                      color:
                        window.location.pathname === "/contactUs"
                          ? "#E7238B"
                          : "",
                    }}
                  >
                    {item.name}
                  </p>
                ) : null}
              </Link>
            ))}
            <div className="hidden lg:flex lg:items-center">
              {/* <a
                onClick={goToClientPage}
                className="transition-all delay-50 cursor-pointer font-['DM_Sans'] px-4 py-2 text-md font-semibold text-white shadow-middle rounded-md bg-primary-400"
              >
                Sign in
              </a> */}
              <Link
                to="/login"
                className="transition-all delay-50 cursor-pointer font-tbc px-4 py-2 text-md font-semibold text-white shadow-middle rounded-md bg-primary300 hover:bg-primary400"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
