import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function ReviewPage() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center h-screen items-center">
        Disney Princess
      </div>
      <div className="flex flex-col  ">
        <HomeFooter />
      </div>
    </div>
  );
}

export default ReviewPage;
