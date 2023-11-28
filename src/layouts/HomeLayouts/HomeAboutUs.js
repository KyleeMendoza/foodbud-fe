import React from "react";
import { Link } from "react-router-dom";
import cw_ourStory from "../../assets/CW-Ourstory.png";

function HomeAboutUs() {
  return (
    <div className="h-full">
      <div className="h-full flex justify-center items-center relative py-10 ">
        <img
          src={cw_ourStory}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div className="flex justify-center items-center w-[90%] lg:w-[50%] rounded-xl text-center drop-shadow-lg backdrop-blur-sm bg-pink-500/30 text-white py-10">
          <div className="flex flex-col justify-between items-center gap-5 w-[85%] h-[85%] font-['Poppins'] lg:text-sm xl:text-md 2xl:text-xl">
            <p className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
              Our Story
            </p>
            <p className="text-lg lg:text-md font-semibold italic">
              Servicing since 2021
            </p>
            <p className="text-sm lg:text-md">
              At Food Bud Events & Catering Services, we specialize in crafting
              unforgettable moments for your little ones and beyond. Our diverse
              party packages ensure a fun-filled experience for every occasion,
              from kiddie parties to corporate events.
            </p>
            <p className="text-sm lg:text-md">
              Committed to excellence, our mission is to surpass client
              expectations by giving our best in every event. With a vision to
              be among Metro Manila's premier kiddie suppliers, we offer quality
              services at reasonable prices.
            </p>
            {/* Use Link for "Read More" */}
            <Link to="/aboutUs" className="font-semibold">
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
