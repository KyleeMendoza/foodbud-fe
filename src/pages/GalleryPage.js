import React from "react";

import GalleryHero from "../layouts/GalleryLayouts/GalleryHero";
import GalleryCollections from "../layouts/GalleryLayouts/GalleryCollections";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function GalleryPage() {
  return (
    <>
      <div id="gallery">
        <div className="lg:h-[60vh] xl:h-[60vh] 2xl:h-[50vh]  border-2 border-blue-600">
          <GalleryHero />
        </div>
        <div className="lg:h-[120vh] xl:h-[150vh] 2xl:h-[140vh] border-2 border-blue-600">
          <GalleryCollections />
        </div>
        <div
          className="flex flex-col h-[50vh] 2xl:h-[40vh] border-2 border-blue-600"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
