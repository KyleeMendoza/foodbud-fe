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
        <div className="lg:h-[50vh] xl:h-[40vh] 2xl:h-[40vh]  border-2 border-blue-600">
          <FaqsHero />
        </div>
        <div className="lg:h-[20vh] xl:h-[20vh] 2xl:h-[20vh] border-2 border-blue-600">
          <FaqsDivider />
        </div>
        <div className="lg:h-[190vh] 2xl:h-[120vh] min-[1528px]:h-[160vh] border-2 border-blue-600">
          <FaqsCondition />
        </div>
        <div className="lg:h-[120vh] 2xl:h-[75vh] min-[1528px]:h-[90vh] border-2 border-blue-600">
          <FaqsFaqs />
        </div>
        <div
          className="flex flex-col h-[50vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] border-2 border-blue-600"
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
