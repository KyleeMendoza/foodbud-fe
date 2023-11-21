import React from "react";

import cw_ourStory from "../../assets/CW-Ourstory.png";

function HomeAboutUs() {
  return (
    <div className="h-full ">
      <div className="h-full  flex justify-center items-center relative px-7 lg:px-0">
        <img
          src={cw_ourStory}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="flex justify-center items-center lg:w-[60%] h-[75%] rounded-xl text-center drop-shadow-lg backdrop-blur-sm bg-pink-500/30 text-white">
          <div className="flex flex-col justify-between items-center w-[85%] h-[85%] font-['Poppins'] lg:text-sm xl:text-md 2xl:text-xl">
            <p className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
              Our Story.
            </p>
            <p className="text-lg lg:text-md font-semibold italic">
              Servicing since 2020
            </p>
            <p className="text-sm lg:text-md">
              We at Elysiums specialize in full time catering services in and
              outside Metro Manila, Philippines. We are based in lorem City but
              we have traveled far and around the Luzon area, helping people
              create lasting memories of their special day.
            </p>
            <p className="text-sm lg:text-md">
              We are a trusted name because of a simple recipe: service,
              presentation, and quality food. Fresh ingredients are used to
              create only the best flavors. Backed by our experienced staff, we
              aim to deliver only the most memorable experience for you.{" "}
            </p>
            <p className=" font-semibold">Read More...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
