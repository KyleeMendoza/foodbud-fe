import React from "react";

import GalleryHero from "../layouts/GalleryLayouts/GalleryHero";
import GalleryCollections from "../layouts/GalleryLayouts/GalleryCollections";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";
import GalleryImages from "../components/GalleryImages";

function GalleryPage() {
  return (
    <>
      <div id="gallery" className="h-auto">
        {/* lg:h-[50vh] xl:h-[40vh] 2xl:h-[40vh]   */}
        <div className="flex flex-col">
          <GalleryHero />
        </div>
        {/* lg:h-[120vh] xl:h-[110vh] 2xl:h-[105vh] min-[1528px]:h-[120vh]  */}
        <div className="flex flex-col">
          <GalleryCollections />
        </div>
        {/* <div
          className="flex flex-col"
          // id="footer"
        >
          <GalleryImages />
        </div> */}
        <div
          className="flex flex-col"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
