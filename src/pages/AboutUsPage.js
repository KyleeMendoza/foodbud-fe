import React from "react";

import AboutUsHero from "../layouts/AboutUsLayouts/AboutUsHero";
import AboutUsDivider from "../layouts/AboutUsLayouts/AboutUsDivider";
import AboutUsClients from "../layouts/AboutUsLayouts/AboutUsClients";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function AboutUsPage() {
  return (
    <>
      <div id="aboutUs">
        <div className="h-screen xl:h-[70vh] 2xl:h-[70vh] min-[1528px]:h-[80vh] border-2 border-blue-600">
          <AboutUsHero />
        </div>
        <div className="h-[25vh] xl:h-[20vh] 2xl:h-[30vh] min-[1528px]:h-[30vh] border-2 border-blue-600">
          <AboutUsDivider />
        </div>
        <div className="h-auto border-2 border-blue-600">
          <AboutUsClients />
        </div>
        <div className="flex flex-col lg:h-[50vh] xl:h-[40vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] border-2 border-blue-600">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
