import React from "react";
import PricingCards from "../../components/PricingCards";

function PackagesPricing() {
  return (
    <div className="h-full border-2 border-black">
      <div className="flex flex-col justify-center items-center font-['Poppins'] border-2 border-green-600">
        <p className="font-bold text-3xl">Package Comparison</p>
        <div className="border-2 border-red-600">
          <PricingCards />
        </div>
      </div>
    </div>
  );
}

export default PackagesPricing;
