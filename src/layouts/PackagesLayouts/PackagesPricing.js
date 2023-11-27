import React from "react";
import PricingCards from "../../components/PricingCards";

function PackagesPricing() {
  return (
    <div className="h-full ">
      <div className="flex flex-col justify-center items-center font-['Poppins'] py-10">
        <p className="font-bold text-3xl capitalize">additional services</p>
        <div className="">
          <PricingCards />
        </div>
      </div>
    </div>
  );
}

export default PackagesPricing;
