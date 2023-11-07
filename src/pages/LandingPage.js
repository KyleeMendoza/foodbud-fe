import React from "react";

import Deals from "../layouts/landing/Deals";
import Home from "../layouts/landing/Home";

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
        className="flex flex-col h-screen  border-2 border-blue-600"
        id="deals"
      >
        <Deals />
      </div>
    </>
  );
}

export default LandingPage;
