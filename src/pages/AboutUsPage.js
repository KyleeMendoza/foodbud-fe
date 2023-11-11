import React from "react";

import AboutUsHero from "../layouts/AboutUsLayouts/AboutUsHero";
import AboutUsDivider from "../layouts/AboutUsLayouts/AboutUsDivider";
import AboutUsClients from "../layouts/AboutUsLayouts/AboutUsClients";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function AboutUsPage() {
  return (
    <>
      <div id="aboutUs">
        <div className="h-screen  border-2 border-blue-600">
          <AboutUsHero />
        </div>
        <div className="h-[25vh]  border-2 border-blue-600">
          <AboutUsDivider />
        </div>
        <div className="h-auto  border-2 border-blue-600">
          <AboutUsClients />
        </div>
        <div className="flex flex-col h-[40vh] border-2 border-blue-600">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
