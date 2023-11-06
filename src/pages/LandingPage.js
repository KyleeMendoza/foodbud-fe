import React from "react";

import NavBar from "../components/NavBar";
import cw_hero from "../assets/CW-Hero.png";

function LandingPage() {
  return (
    <>
      <div
        className="flex flex-col h-screen border-2 border-green-600"
        id="home"
      >
        <header>
          <NavBar />
        </header>
        <div className="border-8 border-blue-600 h-full">
          <img src={cw_hero} alt="Picture" className="" />
        </div>
      </div>
      <div className="flex flex-col h-screen border-2 border-red-600" id="home">
        <div className="border-2 border-blue-600 ">
          <img src={cw_hero} alt="Picture" className="" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
