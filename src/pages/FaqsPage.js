import React from "react";

import FaqsHero from "../layouts/FaqsLayouts/FaqsHero";
import FaqsDivider from "../layouts/FaqsLayouts/FaqsDivider";
import FaqsCondition from "../layouts/FaqsLayouts/FaqsCondition";
import FaqsFaqs from "../layouts/FaqsLayouts/FaqsFaqs";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function FaqsPage() {
  return (
    <>
      <div id="faqs" className="h-auto">
        <div className="flex flex-col">
          <FaqsHero />
        </div>
        {/* lg:h-[20vh] xl:h-[20vh] 2xl:h-[20vh]  */}
        <div className="flex flex-col">
          <FaqsDivider />
        </div>
        {/* lg:h-[190vh] 2xl:h-[120vh] min-[1528px]:h-[160vh]  */}
        <div className="flex flex-col">
          <FaqsCondition />
        </div>
        {/* lg:h-[120vh] 2xl:h-[75vh] min-[1528px]:h-[140vh]  */}
        <div className="flex flex-col">
          <FaqsFaqs />
        </div>
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

export default FaqsPage;
