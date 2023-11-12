import React from "react";

import FaqsHero from "../layouts/FaqsLayouts/FaqsHero";
import FaqsDivider from "../layouts/FaqsLayouts/FaqsDivider";
import FaqsCondition from "../layouts/FaqsLayouts/FaqsCondition";
import FaqsFaqs from "../layouts/FaqsLayouts/FaqsFaqs";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function FaqsPage() {
  return (
    <>
      <div id="faqs">
        <div className="h-[40vh]  border-2 border-blue-600">
          <FaqsHero />
        </div>
        <div className="h-[25vh]  border-2 border-blue-600">
          <FaqsDivider />
        </div>
        <div className="h-[150vh]  border-2 border-blue-600">
          <FaqsCondition />
        </div>
        <div className="h-[90vh]  border-2 border-blue-600">
          <FaqsFaqs />
        </div>
        <div className="h-[40vh]  border-2 border-blue-600">
          <HomeFooter />
        </div>

        {/* <div className="flex flex-col h-[40vh] border-2 border-blue-600">
          <HomeFooter />
        </div> */}
      </div>
    </>
  );
}

export default FaqsPage;
