import React, { useState } from "react";

import PackagesHero from "../layouts/PackagesLayouts/PackagesHero";
import PackagesList from "../layouts/PackagesLayouts/PackagesList";
import PackagesPricing from "../layouts/PackagesLayouts/PackagesPricing";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function PackagesPage() {
  return (
    <>
      <div id="packages">
        <div className="lg:h-[160vh] xl:h-[150vh] 2xl:h-[120vh] min-[1528px]:h-[150vh] ">
          <PackagesHero />
        </div>
        <div className="lg:h-[160vh] xl:h-[120vh] 2xl:h-[130vh] min-[1528px]:h-[150vh] ">
          <PackagesList />
        </div>
        <div className="h-[175vh] xl:h-[150vh] 2xl:h-[120vh] min-[1528px]:h-[160vh] ">
          <PackagesPricing />
        </div>
        <div className="flex flex-col h-[50vh] xl:h-[40vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] ">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default PackagesPage;
