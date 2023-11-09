import React from "react";

import cw_ourStory from "../../assets/CW-Ourstory.png";

function AboutUs() {
  return (
    <div className="flex justify-center items-center py-28 h-full bg-red-300 relative">
      <img
        src={cw_ourStory}
        alt="Picture"
        className="h-full w-full object-cover absolute"
      />
      <div className="flex justify-center items-center  w-[55%] h-full rounded-xl text-center drop-shadow-lg backdrop-blur-sm bg-pink-500/30 text-white">
        <div className="flex flex-col gap-8 w-[85%] ">
          <p className="text-5xl font-semibold">Our Story.</p>
          <p className="text-2xl font-semibold italic">Servicing since 2020</p>
          <p className="text-xl">
            We at Elysiums specialize in full time catering services in and
            outside Metro Manila, Philippines. We are based in lorem City but we
            have traveled far and around the Luzon area, helping people create
            lasting memories of their special day.
          </p>
          <p className="text-xl">
            We are a trusted name because of a simple recipe: service,
            presentation, and quality food. Fresh ingredients are used to create
            only the best flavors. Backed by our experienced staff, we aim to
            deliver only the most memorable experience for you.{" "}
          </p>
          <p className="text-xl font-semibold">Read More...</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
