import React, { useState } from "react";

import PackagesHero from "../layouts/PackagesLayouts/PackagesHero";
import PackagesList from "../layouts/PackagesLayouts/PackagesList";
import PackagesPricing from "../layouts/PackagesLayouts/PackagesPricing";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function PackagesPage() {
  return (
    <>
      <div id="packages" className="h-auto">
        <div className="flex flex-col ">
          <PackagesHero />
        </div>
        <div className="flex flex-col">
          <PackagesList />
        </div>
        <div className="flex flex-col">
          <PackagesPricing />
        </div>
        <div className="flex flex-col ">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default PackagesPage;
