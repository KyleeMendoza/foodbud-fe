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
        <div className="lg:h-[60vh] xl:h-[60vh] 2xl:h-[50vh]  border-2 border-blue-600">
          <FaqsHero />
        </div>
        <div className="lg:h-[30vh] xl:h-[30vh]  border-2 border-blue-600">
          <FaqsDivider />
        </div>
        <div className="lg:h-[190vh] 2xl:h-[130vh] border-2 border-blue-600">
          <FaqsCondition />
        </div>
        <div className="lg:h-[120vh] 2xl:h-[80vh] border-2 border-blue-600">
          <FaqsFaqs />
        </div>
        <div
          className="flex flex-col h-[50vh] 2xl:h-[40vh] border-2 border-blue-600"
          // id="footer"
        >
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
