import React from "react";

import PackagesHero from "../layouts/PackagesLayouts/PackagesHero";
import PackagesList from "../layouts/PackagesLayouts/PackagesList";
import PackagesPricing from "../layouts/PackagesLayouts/PackagesPricing";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function PackagesPage() {
  return (
    <>
      <div id="packages">
        <div className="lg:h-[160vh] xl:h-[180vh] 2xl:h-[120vh] border-2 border-blue-600">
          <PackagesHero />
        </div>
        <div className="lg:h-[190vh] xl:h-[210vh] 2xl:h-[150vh] border-2 border-blue-600">
          <PackagesList />
        </div>
        <div className="h-[175vh] xl:h-[190vh] 2xl:h-[140vh] border-2 border-blue-600">
          <PackagesPricing />
        </div>
        <div className="flex flex-col h-[50vh] border-2 border-blue-600">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default PackagesPage;
