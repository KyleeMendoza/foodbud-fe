import React from "react";
import cw_ebox1 from "../../assets/CW-Ebox1.png";
import cw_ebox2 from "../../assets/CW-Ebox2.png";
import cw_ebox3 from "../../assets/CW-Ebox3.png";
import cw_ebox4 from "../../assets/CW-Ebox4.png";
import cw_event1 from "../../assets/CW-Event1.png";

function Packages() {
  const picture = [cw_ebox1, cw_ebox2, cw_ebox3, cw_ebox4];
  const label = ["baptismal", "kid's party", "adult party", "corporate"];
  return (
    <div className="border-2 border-red-600 flex flex-col gap-10 items-center h-full py-20">
      <p className="text-xl capitalize font-['Poppins']  text-sky-400 font-semibold">
        Crafting unforgettable moments, one bite at a time.
      </p>
      <div className="border-2 border-red-600 w-[75%] h-[55%]">
        <img
          src={cw_event1}
          alt="Picture"
          className=" border-2 border-green-600 object-cover h-[100%] w-[100%]"
        />
      </div>
      <div className="flex  justify-between px-4 items-center flex-1 border-2 border-red-600 w-[75%]">
        {label.map((label, key) => (
          <div
            className="w-[20%] h-[80%] rounded-xl drop-shadow-lg bg-white"
            key={key}
          >
            <img
              src={picture[key]}
              alt="Picture"
              className="border-2 border-green-600 object-cover h-[78%] w-[100%] mb-3 rounded-t-xl"
            />
            <p className="text-xl capitalize font-['Poppins'] text-center text-sky-400 font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
