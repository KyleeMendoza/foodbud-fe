import React from "react";
import { useEffect, useState } from "react";
import GalleryViewer from "../../components/GalleryViewer";
import { getGallerySort } from "../../services/getGallerySort";
import GalleryListSort from "../../components/GalleryListSort";

function GalleryCollections() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const fetchSortGallery = async () => {
      try {
        const result = await getGallerySort();
        for (const images of result.images) {
          setImagesData((prev) => [...prev, images.image]);
        }

        // console.log("sort: ", result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSortGallery();
  }, []);

  useEffect(() => {
    console.log("imagesData: ", imagesData);
  }, [imagesData]);

  return (
    <div className="h-[50rem]">
      <div className="flex justify-start bg-secondary500 py-10 h-full relative">
        {/* <div className="w-1/4">Happy</div> */}
        <p className="absolute top-0 left-0">
          NOTE: STILL IN PROGRESS, TRYING TO IMITATE FIGMA GALLERY FILTER DESIGN
          AMAP
        </p>
        <div class="w-full flex h-full">
          {/* <GalleryViewer /> */}
          <div className="overflow-y-auto">
            <GalleryListSort />
          </div>
          <div className="flex-1 bg-white grid grid-cols-1 md:grid-cols-4 gap-8 p-5 overflow-y-auto">
            {imagesData.map((item, index) => (
              <div key={index} className="h-auto rounded-lg">
                <img src={item} className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCollections;
