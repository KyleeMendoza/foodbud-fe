import React from "react";

import GalleryHero from "../layouts/GalleryLayouts/GalleryHero";
import GalleryCollections from "../layouts/GalleryLayouts/GalleryCollections";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function GalleryPage() {
  return (
    <>
      <div id="gallery">
        <div className="lg:h-[50vh] xl:h-[40vh] 2xl:h-[40vh]  border-2 border-blue-600">
          <GalleryHero />
        </div>
        <div className="lg:h-[120vh] xl:h-[90vh] 2xl:h-[105vh] min-[1528px]:h-[120vh] border-2 border-blue-600">
          <GalleryCollections />
        </div>
        <div
          className="flex flex-col lg:h-[50vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] border-2 border-blue-600"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
