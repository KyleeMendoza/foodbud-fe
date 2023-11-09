import React from "react";
import AboutUs from "../layouts/landing/AboutUs";

import Deals from "../layouts/landing/Deals";
import Home from "../layouts/landing/Home";
import Packages from "../layouts/landing/Packages";
import Testimonials from "../layouts/landing/Testimonials";
import FooterPage from "../layouts/landing/FooterPage";

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
        id="packages"
      >
        <Packages />
      </div>
      <div
        className="flex flex-col h-[80vh]  border-2 border-blue-600"
        id="aboutUs"
      >
        <AboutUs />
      </div>
      <div
        className="flex flex-col h-[125vh] border-2 border-orange-600"
        id="testimonials"
      >
        <Testimonials />
      </div>
      <div
        className="flex flex-col h-[40vh] border-2 border-blue-600"
        id="footer"
      >
        <FooterPage />
      </div>
    </>
  );
}

export default LandingPage;
