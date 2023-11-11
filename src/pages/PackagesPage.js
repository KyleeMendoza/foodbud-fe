import React from "react";

import PackagesHero from "../layouts/PackagesLayouts/PackagesHero";
import PackagesList from "../layouts/PackagesLayouts/PackagesList";
import PackagesPricing from "../layouts/PackagesLayouts/PackagesPricing";

function PackagesPage() {
  return (
    <>
      <div id="packages">
        <div className="h-[120vh] border-2 border-blue-600">
          <PackagesHero />
        </div>
        <div className="h-[70vh] border-2 border-blue-600">
          <PackagesList />
        </div>
        <div className="h-[100vh] border-2 border-blue-600">
          <PackagesPricing />
        </div>
      </div>
    </>
  );
}

export default PackagesPage;
