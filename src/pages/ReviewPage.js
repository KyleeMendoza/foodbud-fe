import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";
import ReviewBody from "../layouts/ReviewLayouts/ReviewBody";

function ReviewPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col  ">
        <ReviewBody />
      </div>
      <div className="flex flex-col  ">
        <HomeFooter />
      </div>
    </div>
  );
}

export default ReviewPage;
