import React from "react";

import bg from "../../assets/CWAU-core.png";

function AboutUsDivider() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Set the background size to cover
        backgroundPosition: "bottom center", // Center the background image
      }}
      className="h-full"
    ></div>
  );
}

export default AboutUsDivider;
