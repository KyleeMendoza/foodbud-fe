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
          className="flex flex-col h-[70vh] 2xl:h-[70vh] xl:h-[80vh] border-2 border-blue-600"
          // id="deals"
        >
          <HomeDeals />
        </div>
        <div
          className="flex flex-col lg:h-[150vh] xl:h-[150vh] 2xl:h-[135vh] border-2 border-blue-600"
          // id="packages"
        >
          <HomePackages />
        </div>
        <div
          className="flex flex-col h-[80vh]  border-2 border-blue-600"
          // id="aboutUs"
        >
          <HomeAboutUs />
        </div>
        <div
          className="flex flex-col lg:h-[150vh] xl:h-[180vh] 2xl:h-[130vh] border-2 border-orange-600"
          // id="testimonials"
        >
          <HomeTestimonials />
        </div>
        <div
          className="flex flex-col h-[50vh] 2xl:h-[40vh] border-2 border-blue-600"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default HomePage;
