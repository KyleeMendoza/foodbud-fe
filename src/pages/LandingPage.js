import React from "react";
import AboutUs from "../layouts/landing/AboutUs";

import Deals from "../layouts/landing/Deals";
import Home from "../layouts/landing/Home";
import Packages from "../layouts/landing/Packages";

function LandingPage() {
  return (
    <>
      <div
        className="flex flex-col h-screen  border-2 border-blue-600"
        id="home"
      >
        <Home />
      </div>
      <div
        className="flex flex-col h-[60vh]  border-2 border-blue-600"
        id="deals"
      >
        <Deals />
      </div>
      <div
        className="flex flex-col h-[130vh]  border-2 border-blue-600"
        id="deals"
      >
        <Packages />
      </div>
      <div
        className="flex flex-col h-[80vh]  border-2 border-blue-600"
        id="deals"
      >
        <AboutUs />
      </div>
    </>
  );
}

export default LandingPage;
