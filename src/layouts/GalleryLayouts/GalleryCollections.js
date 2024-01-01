import React from "react";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import GalleryViewer from "../../components/GalleryViewer";
import { getGallerySort } from "../../services/getGallerySort";
import GalleryListSort from "../../components/GalleryListSort";
import GalleryImageModal2 from "../../components/GalleryImageModal2";

function GalleryCollections() {
  const [imagesData, setImagesData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [galleryType, setGalleryType] = useState([]);
  const [celebrantGender, setCelebrantGender] = useState([]);
  const [eventType, setEventType] = useState([]);

  // Packages
  const handleGalleryType = (data) => {
    const newFilterData = [...galleryType];
    if (newFilterData.includes(data)) {
      newFilterData.splice(newFilterData.indexOf(data), 1);
    } else {
      newFilterData.push(data);
    }
    setGalleryType(newFilterData);
  };

  //Gender
  const handleCelebrantGender = (data) => {
    const newFilterData = [...celebrantGender];
    if (newFilterData.includes(data)) {
      newFilterData.splice(newFilterData.indexOf(data), 1);
    } else {
      newFilterData.push(data);
    }
    setCelebrantGender(newFilterData);
  };

  //EventType
  const handleEventType = (data) => {
    const newFilterData = [...eventType];
    if (newFilterData.includes(data)) {
      newFilterData.splice(newFilterData.indexOf(data), 1);
    } else {
      newFilterData.push(data);
    }
    setEventType(newFilterData);
  };

  useEffect(() => {
    const fetchSortGallery = async () => {
      try {
        setIsLoading(true);
        const result = await getGallerySort(
          galleryType,
          celebrantGender,
          eventType
        );

        // Set the new data, replacing the old data
        // setImagesData(result.images.map((images) => images.image));
        setImagesData(result.images);

        setIsLoading(false);

        console.log("sort: ", result.images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSortGallery();
  }, [galleryType, celebrantGender, eventType]);

  // useEffect(() => {
  //   console.log("Event: ", eventType);
  // }, [eventType]);
  // useEffect(() => {
  //   console.log("imageData: ", imagesData);
  // }, [imagesData]);

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
            <GalleryListSort
              handleGalleryType={handleGalleryType}
              handleCelebrantGender={handleCelebrantGender}
              handleEventType={handleEventType}
            />
          </div>
          <div className="flex-1 bg-white grid grid-cols-1 md:grid-cols-4 gap-8 p-5 overflow-y-auto">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rounded"
                    width={250}
                    height={400}
                    sx={{ borderRadius: 2, marginBottom: 2 }}
                  />
                ))
              : imagesData.map((item, index) => (
                  <div key={index} className="h-auto rounded-lg">
                    {/* <img
                      src={item}
                      alt={`Image ${index}`}
                      className="rounded-lg"
                    /> */}
                    <GalleryImageModal2 item={item} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCollections;
