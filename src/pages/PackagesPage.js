import React, { useState } from "react";

import PackagesHero from "../layouts/PackagesLayouts/PackagesHero";
import PackagesList from "../layouts/PackagesLayouts/PackagesList";
import PackagesPricing from "../layouts/PackagesLayouts/PackagesPricing";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function PackagesPage() {
  return (
    <>
      <div id="packages" className="h-auto">
        {/* lg:h-[160vh] xl:h-[150vh] 2xl:h-[120vh] min-[1528px]:h-[150vh]  */}
        <div className="flex flex-col">
          <PackagesHero />
        </div>
        {/* lg:h-[135vh] xl:h-[135vh] 2xl:h-[130vh] min-[1528px]:h-[135vh]  */}
        <div className="flex flex-col">
          <PackagesList />
        </div>
        {/* h-[175vh] xl:h-[150vh] 2xl:h-[120vh] min-[1528px]:h-[160vh] */}
        <div className="flex flex-col">
          <PackagesPricing />
        </div>
        {/* h-[50vh] xl:h-[40vh] 2xl:h-[40vh] min-[1528px]:h-[50vh]  */}
        <div className="flex flex-col ">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default PackagesPage;
