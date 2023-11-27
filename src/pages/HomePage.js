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
      <div id="home" className="h-auto">
        {/* lg:h-screen h-[40rem] */}
        <div
          className="flex flex-col"
          // id="home"
        >
          <HomeHero />
        </div>
        {/* h-[130vh] lg:h-[70vh] 2xl:h-[60vh] xl:h-[55vh]  */}
        <div
          className="flex flex-col"
          // id="deals"
        >
          <HomeDeals />
        </div>
        {/* h-[120vh] lg:h-[150vh] xl:h-[135vh] 2xl:h-[120vh] min-[1528px]:h-[140vh] */}
        <div
          className="flex flex-col "
          // id="packages"
        >
          <HomePackages />
        </div>
        {/*  h-[90vh] lg:h-[80vh] xl:h-[60vh] */}
        <div
          className="flex flex-col "
          // id="aboutUs"
        >
          <HomeAboutUs />
        </div>
        {/* h-[180vh] lg:h-[155vh] xl:h-[140vh] 2xl:h-[110vh] min-[1528px]:h-[150vh] */}
        <div
          className="flex flex-col  "
          // id="testimonials"
        >
          <HomeTestimonials />
        </div>
        {/*  h-[65vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] */}
        <div
          className="flex flex-col "
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default HomePage;
