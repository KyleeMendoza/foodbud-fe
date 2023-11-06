import React from "react";

import NavBar from "../../components/NavBar";
import cw_hero from "../../assets/CW-Hero.png";

function Home() {
  return (
    <div className="flex flex-col h-3/4 lg:h-screen relative border-2 border-red-600">
      <div className="z-10 ">
        <NavBar />
      </div>
      <img
        src={cw_hero}
        alt="Picture"
        className="absolute inset-0 w-full h-full object-cover lg:hidden"
      />
      <div className="flex items-center justify-center flex-1 relative">
        <img
          src={cw_hero}
          alt="Picture"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />
        <div className="flex flex-col gap-5 lg:gap-3 absolute w-[90%] lg:w-[80%] border-2 border-red-600">
          <p className="border-2 border-green-600 text-4xl font-bold text-white text-center lg:text-left">
            Elevate Your Events with us!
          </p>
          <p className="border-2 border-blue-600 text-lg text-white lg:w-[40%] text-center lg:text-left">
            At Elysium, we are more than just a catering company; we're your
            culinary partners in creating unforgettable moments.
          </p>
          <div className=" flex justify-center lg:justify-normal items-center ">
            <a
              //   href={resume}
              download="Mendoza, Kyle Dominic L. - Resume.pdf"
              className=" transition-all delay-50 cursor-pointer font-['DM_Sans'] px-7 py-3 text-lg font-semibold  text-white shadow-middle rounded-md bg-primary-500"
            >
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
