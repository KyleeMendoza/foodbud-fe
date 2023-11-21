import React from "react";

import GalleryHero from "../layouts/GalleryLayouts/GalleryHero";
import GalleryCollections from "../layouts/GalleryLayouts/GalleryCollections";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function GalleryPage() {
  return (
    <>
      <div id="gallery">
        <div className="lg:h-[50vh] xl:h-[40vh] 2xl:h-[40vh]  ">
          <GalleryHero />
        </div>
        <div className="lg:h-[120vh] xl:h-[110vh] 2xl:h-[105vh] min-[1528px]:h-[120vh] ">
          <GalleryCollections />
        </div>
        <div
          className="flex flex-col lg:h-[50vh] 2xl:h-[40vh] min-[1528px]:h-[50vh] "
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
