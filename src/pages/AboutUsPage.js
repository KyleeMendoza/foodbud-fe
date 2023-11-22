import React from "react";

import AboutUsHero from "../layouts/AboutUsLayouts/AboutUsHero";
import AboutUsDivider from "../layouts/AboutUsLayouts/AboutUsDivider";
import AboutUsClients from "../layouts/AboutUsLayouts/AboutUsClients";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function AboutUsPage() {
  return (
    <>
      <div id="aboutUs">
        <div className="h-[140vh] lg:h-screen xl:h-[70vh] 2xl:h-[70vh] min-[1528px]:h-[80vh] ">
          <AboutUsHero />
        </div>
        <div className="h-[15vh] lg:h-[25vh] xl:h-[20vh] 2xl:h-[30vh] min-[1528px]:h-[30vh] ">
          <AboutUsDivider />
        </div>
        <div className="h-auto ">
          <AboutUsClients />
        </div>
        <div className="flex flex-col h-[70vh] lg:h-[50vh] xl:h-[40vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] ">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
