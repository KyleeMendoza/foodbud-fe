import React from "react";

import HomeAboutUs from "../layouts/HomeLayouts/HomeAboutUs";
import HomeDeals from "../layouts/HomeLayouts/HomeDeals";
import HomeHero from "../layouts/HomeLayouts/HomeHero";
import HomePackages from "../layouts/HomeLayouts/HomePackages";
import HomeTestimonials from "../layouts/HomeLayouts/HomeTestimonials";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function HomePage() {
  return (
    <>
      <div id="home">
        <div
          className="flex flex-col h-screen  border-2 border-blue-600"
          // id="home"
        >
          <HomeHero />
        </div>
        <div
          className="flex flex-col h-[70vh] 2xl:h-[60vh] xl:h-[55vh] border-2 border-blue-600"
          // id="deals"
        >
          <HomeDeals />
        </div>
        <div
          className="flex flex-col lg:h-[150vh] xl:h-[110vh] 2xl:h-[120vh] min-[1528px]:h-[140vh] border-2 border-blue-600"
          // id="packages"
        >
          <HomePackages />
        </div>
        <div
          className="flex flex-col h-[80vh] xl:h-[60vh] border-2 border-blue-600"
          // id="aboutUs"
        >
          <HomeAboutUs />
        </div>
        <div
          className="flex flex-col lg:h-[155vh] xl:h-[120vh] 2xl:h-[110vh] min-[1528px]:h-[150vh] border-2 border-orange-600"
          // id="testimonials"
        >
          <HomeTestimonials />
        </div>
        <div
          className="flex flex-col h-[50vh] xl:h-[40vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] border-2 border-blue-600"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default HomePage;
