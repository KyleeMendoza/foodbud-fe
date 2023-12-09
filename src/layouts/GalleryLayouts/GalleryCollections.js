import React from "react";
import GalleryViewer from "../../components/GalleryViewer";

function GalleryCollections() {
  return (
    <div className="h-full ">
      <div className="flex justify-start bg-secondary500 py-10">
        {/* <div className="w-1/4">Happy</div> */}
        <div class="w-full">
          <GalleryViewer />
        </div>
      </div>
    </div>
  );
}

export default GalleryCollections;
