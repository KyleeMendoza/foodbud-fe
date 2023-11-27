import React from "react";

import bg from "../../assets/CWAU-core.png";

function AboutUsDivider() {
  return (
    // <div
    //   style={{
    //     backgroundImage: `url(${bg})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover", // Set the background size to cover
    //     backgroundPosition: "bottom center", // Center the background image
    //   }}
    //   className="h-full border-2 border-red-600"
    // ></div>
    <div className="h-full ">
      <div
        className="  h-[20vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default AboutUsDivider;
