import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PricingCards from "../../components/PricingCards";
import { ImportExport } from "@mui/icons-material";

function PackagesPricing() {
  const [addons, setAddons] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/all/addons"
        );
        const addonsinfo = response.data;
        const filteredaddons = addonsinfo.filter(
          (row) => row.addons_type === "Tie-Up"
        );

        setAddons(filteredaddons);
        console.log("Here it is:", filteredaddons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  console.log("Here it is addons:", addons);
  return (
    <div className="h-full ">
      <div
        className="flex flex-col justify-center items-center gap-10 font-heading py-10"
        id="additional"
      >
        <p className="font-bold text-heading14 capitalize text-sky-600 ">
          additional services
        </p>
        <ul className="text-center pl-4">
          {Array.isArray(addons) &&
            addons.map((addon) => (
              <li
                className="font-tbc text-title13 text-gray-800 hover:text-secondary500 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-default"
                key={addon.id}
              >
                {addon.addons_name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PackagesPricing;
