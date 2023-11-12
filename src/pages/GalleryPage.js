import React from "react";

import GalleryHero from "../layouts/GalleryLayouts/GalleryHero";
import GalleryCollections from "../layouts/GalleryLayouts/GalleryCollections";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function GalleryPage() {
  return (
    <>
      <div id="gallery">
        <div className="h-[40vh]  border-2 border-blue-600">
          <GalleryHero />
        </div>
        <div className="h-[100vh]  border-2 border-blue-600">
          <GalleryCollections />
        </div>
        <div className="flex flex-col h-[40vh] border-2 border-blue-600">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
