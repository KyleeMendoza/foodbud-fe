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
          className="flex flex-col h-screen  "
          // id="home"
        >
          <HomeHero />
        </div>
        <div
          className="flex flex-col h-[70vh] 2xl:h-[60vh] xl:h-[55vh] "
          // id="deals"
        >
          <HomeDeals />
        </div>
        <div
          className="flex flex-col lg:h-[150vh] xl:h-[135vh] 2xl:h-[120vh] min-[1528px]:h-[140vh] "
          // id="packages"
        >
          <HomePackages />
        </div>
        <div
          className="flex flex-col h-[80vh] xl:h-[60vh] "
          // id="aboutUs"
        >
          <HomeAboutUs />
        </div>
        <div
          className="flex flex-col lg:h-[155vh] xl:h-[140vh] 2xl:h-[110vh] min-[1528px]:h-[150vh]"
          // id="testimonials"
        >
          <HomeTestimonials />
        </div>
        <div
          className="flex flex-col h-[50vh] xl:h-[40vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] "
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default HomePage;
