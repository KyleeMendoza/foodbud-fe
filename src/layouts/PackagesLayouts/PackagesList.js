import React from "react";
import Button from "@mui/material/Button";
import fullVenue from "../../assets/full_venue_big.png";
import promo from "../../assets/packageBg.png";
import PackageCarousel from "../../components/PackageCarousel";

function PackagesList() {
  return (
    <div className="h-full ">
      <div className=" flex flex-col gap-10 py-10 px-5 md:px-40">
        <div className=" h-1/2 flex justify-center items-center ">
          <PackageCarousel />
        </div>
        <div className=" h-1/2 flex justify-center items-center ">
          <div className="flex items-center border-2 border-black rounded-2xl h-full pr-5">
            <div className="flex flex-col gap-5 flex-1 font-['Poppins'] p-10">
              <div className="flex flex-col gap-8 ">
                <p className="text-2xl font-bold text-sky-600">
                  Full Venue Styling
                </p>
                <p className="text-5xl font-bold capitalize text-[#e91e63]">
                  Venue Perfection
                </p>
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
            <div className="hidden md:flex  flex-1 h-full rounded-2xl">
              <div>
                <img src={fullVenue} alt="" className="h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagesList;
