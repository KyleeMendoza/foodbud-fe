import React, { useState, useEffect } from "react";
import Logo from "../assets/foodBudLogo.png";
import { HamburgerMenu } from "./framer-menu/HamburgerMenu";

//IMPORT PAGES

import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("/");

  const handleButtonClick = (path) => {
    setSelectedButton(path);
    // Save the selected path to localStorage
    localStorage.setItem("selectedButton", path);
  };

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

  useEffect(() => {
    // Retrieve the selected path from localStorage on component mount
    const storedSelectedButton = localStorage.getItem("selectedButton");
    if (storedSelectedButton) {
      setSelectedButton(storedSelectedButton);
    }
  }, []);

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
                onClick={() => handleButtonClick(item.path)}
                className={`btn-hover font-tbc font-semibold ${
                  item.path === selectedButton
                    ? "text-primary500"
                    : "text-secondary500"
                } hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue`}
              >
                {item.name}
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
