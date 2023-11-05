import React, { useState } from "react";
import Logo from "../assets/foodBudLogo.png";
import { HamburgerMenu } from "./framer-menu/HamburgerMenu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#aboutUs", name: "About Us" },
    { path: "#packages", name: "Packages" },
    { path: "#gallery", name: "Gallery" },
    { path: "#faqs", name: "FAQs" },
    { path: "#contactUs", name: "Contact Us" },
  ];

  return (
    <>
      <div className="flex justify-center items-center lg:py-3 border-2 border-red-600">
        <div className="flex w-full lg:max-w-[80%] justify-between border-2 border-blue-600">
          <div className="w-full lg:w-auto flex justify-between flex-row-reverse items-center border-2 border-green-600">
            <div className="flex items-center text-3xl cursor-pointer">
              <img
                src={Logo}
                alt="logo"
                className="hidden lg:block w-full h-10"
              />
              <div className="flex lg:hidden lg:items-center mt-5 mr-4">
                <a
                  //   href={resume}
                  download="Mendoza, Kyle Dominic L. - Resume.pdf"
                  className=" transition-all delay-50 cursor-pointer font-['DM_Sans'] px-4 py-2 text-sm font-semibold  text-black shadow-middle rounded-md border-2 border-black"
                >
                  Sign in
                </a>
              </div>
            </div>
            <div className="lg:hidden border-2 border-yellow-600">
              {/* <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
              <HamburgerMenu />
            </div>
          </div>

          <div className="hidden items-center gap-14 text-md lg:flex lg:flex-row w-auto py-0 bg-transparent text-black transition-all duration-400 border-2 border-green-600">
            {navData.map((item) => (
              <a
                href={item.path}
                className="btn-hover font-['DM_Sans'] font-semibold text-secondary-500 hover:text-primary-500 transition-all ease-in-out lg:text-darkBlue"
              >
                {item.name}
              </a>
            ))}
            <div className="hidden lg:flex lg:items-center ">
              <a
                //   href={resume}
                download="Mendoza, Kyle Dominic L. - Resume.pdf"
                className=" transition-all delay-50 cursor-pointer font-['DM_Sans'] px-4 py-2 text-md font-semibold  text-white shadow-middle rounded-md bg-primary-400"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
