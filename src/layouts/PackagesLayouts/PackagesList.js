import React from "react";
import Button from "@mui/material/Button";

import promo from "../../assets/packageBg.png";
import PackageCarousel from "../../components/PackageCarousel";

function PackagesList() {
  return (
    <>
      <div className="border-2 border-black h-1/2 p-10">
        <PackageCarousel />
      </div>
      <div className="border-2 border-red-600 h-1/2 p-10">
        <div className="flex  items-center border-2 border-green-600 h-full">
          <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10 border-2 border-red-600">
            <div className="flex flex-col gap-8 border-2 border-black">
              <p className="text-2xl font-bold">Full Venue Styling</p>
              <p className="text-5xl font-bold capitalize">Venue Perfection</p>
              <p className="text-lg">
                Venue Perfection Unleashed! .Transforming Spaces, Creating
                Memories.
              </p>
            </div>
            <div>
              <div className="flex gap-5">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ color: "#0249FF", border: "2px solid #0249FF" }}
                >
                  get a quote
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "#0249FF" }}
                >
                  see photos
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 border-2 border-red-600 h-full">
            <div>
              <img src={promo} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackagesList;
