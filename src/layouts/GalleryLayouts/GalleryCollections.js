import React from "react";
import GalleryViewer from "../../components/GalleryViewer";

function GalleryCollections() {
  return (
    <div className=" border-2 border-black flex justify-center items-center h-full">
      <div className="border-2 border-green-600 lg:w-[90%] xl:w-[80%] 2xl:w-[80%]">
        <GalleryViewer />
      </div>
    </div>
  );
}

export default GalleryCollections;
