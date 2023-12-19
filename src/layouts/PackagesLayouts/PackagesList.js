import React from "react";
import Button from "@mui/material/Button";
import fullVenue from "../../assets/full_venue_big.png";
import promo from "../../assets/packageBg.png";
import PackageCarousel from "../../components/PackageCarousel";
import kiddie from "../../assets/Packages/kiddie.jpg";
import debut from "../../assets/Packages/debut.png";
import corporate from "../../assets/Packages/Corporate.jpg";
import adult from "../../assets/Packages/Adult.jpg";
import fvs from "../../assets/Packages/fvs.jpg";
import fvspdf from "../../assets/docu/Fv_styling.pdf";
import aippdf from "../../assets/docu/Allin_package.pdf";

import { Link } from "react-router-dom";

function PackagesList() {
  const handleFvsDownload = () => {
    const blob = new Blob([fvspdf], { type: "docu/pdf" });

    // Create a link element
    const link = document.createElement("a");
    link.href = fvspdf;
    link.download = "Full Venue Styling";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);

    console.log("This is it:", link);
  };

  const handleAipDownload = () => {
    const blob = new Blob([aippdf], { type: "docu/pdf" });

    // Create a link element
    const link = document.createElement("a");
    link.href = aippdf;
    link.download = "All-in Package";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);

    console.log("This is it:", link);
  };

  return (
    <div className="h-full ">
      <div className=" flex flex-col gap-10 py-10 px-5 md:px-40">
        {/* Get quote Kiddie & Adult Package */}
        <div className="">
          <div className="flex items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 text-center monitor:text-left">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  Kiddie Party
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex justify-between monitor:justify-normal monitor:gap-8">
                  <button
                    onClick={handleAipDownload}
                    className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200"
                  >
                    Get a quote
                  </button>
                  <Link to="/gallery">
                    <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                      See photos
                    </button>
                  </Link>
                </div>
              </div>
              <div className="monitor:hidden">
                <img src={kiddie} alt="" className="h-full rounded-xl" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 h-full">
              <div>
                <img src={kiddie} alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Get quote Debut Package */}
        <div className="">
          <div className="flex items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 text-center monitor:text-left">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  Adult Party{" "}
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex justify-between monitor:justify-normal monitor:gap-8">
                  <button
                    onClick={handleAipDownload}
                    className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200"
                  >
                    Get a quote
                  </button>

                  <Link to="/gallery">
                    <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                      See photos
                    </button>
                  </Link>
                </div>
              </div>
              <div className="monitor:hidden">
                <img src={adult} alt="" className="h-full rounded-xl" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 h-full">
              <div>
                <img src={adult} alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Get quote Debut Package */}
        <div className="">
          <div className="flex items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 text-center monitor:text-left">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  Debut Party
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex justify-between monitor:justify-normal monitor:gap-8">
                  <button
                    onClick={handleAipDownload}
                    className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200"
                  >
                    Get a quote
                  </button>

                  <Link to="/gallery">
                    <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                      See photos
                    </button>
                  </Link>
                </div>
              </div>
              <div className="monitor:hidden">
                <img src={debut} alt="" className="h-full rounded-xl" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 h-full ">
              <div>
                <img src={debut} alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Get quote Corporate Package */}
        <div className="">
          <div className="flex items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 text-center monitor:text-left">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  Corporate Events
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex justify-between monitor:justify-normal monitor:gap-8">
                  <button
                    onClick={handleAipDownload}
                    className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200"
                  >
                    Get a quote
                  </button>

                  <Link to="/gallery">
                    <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                      See photos
                    </button>
                  </Link>
                </div>
              </div>
              <div className="monitor:hidden">
                <img src={corporate} alt="" className="h-full rounded-xl" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 h-full">
              <div>
                <img src={corporate} alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Get quote Full venue stylist */}
        <div className="">
          <div className="flex items-center  h-full">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10 ">
              <div className="flex flex-col gap-8 text-center monitor:text-left">
                <p className="text-heading36 font-bold text-secondary500">
                  All-In Packages
                </p>
                <p className="text-heading14 font-bold capitalize text-primary500">
                  Full Venue Styling
                </p>
                <p className="text-title24">
                  Unleash the celebration without breaking the bank!
                </p>
              </div>
              <div>
                <div className="flex justify-between monitor:justify-normal monitor:gap-8">
                  <button
                    onClick={handleFvsDownload}
                    className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200"
                  >
                    Get a quote
                  </button>

                  <Link to="/gallery">
                    <button className="border-2 px-7 py-3 w-fit font-tbc font-semibold text-body 2xl:text-heading36 text-secondary400 rounded-xl hover:text-white hover:bg-secondary500 duration-200">
                      See photos
                    </button>
                  </Link>
                </div>
              </div>
              <div className="monitor:hidden">
                <img src={fvs} alt="" className="h-full rounded-xl" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 h-full">
              <div>
                <img src={fvs} alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" h-1/2 flex justify-center items-center ">
          <div className="flex items-center border-2 border-black rounded-2xl h-full pr-5">
            <div className="flex flex-col gap-5 flex-1 font-heading p-10">
              <div className="flex flex-col gap-8 text-center monitor:text-left">
                <p className="text-2xl font-bold text-secondary600">
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
                <div className="flex justify-between monitor:justify-normal monitor:gap-8">
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
        </div> */}
      </div>
    </div>
  );
}

export default PackagesList;
