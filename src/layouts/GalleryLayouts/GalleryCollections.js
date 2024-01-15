import React from "react";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import GalleryViewer from "../../components/GalleryViewer";
import { getGallerySort } from "../../services/getGallerySort";
import GalleryListSort from "../../components/GalleryListSort";
import GalleryImageModal2 from "../../components/GalleryImageModal2";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/SearchGallery";

function GalleryCollections() {
  const [imagesData, setImagesData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [galleryType, setGalleryType] = useState([]);
  const [celebrantGender, setCelebrantGender] = useState([]);
  const [eventType, setEventType] = useState([]);
  const [search, setSearch] = useState([]);

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

  //Search
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchSortGallery = async () => {
      try {
        setIsLoading(true);
        const result = await getGallerySort(
          galleryType,
          celebrantGender,
          eventType,
          search
        );

        // Set the new data, replacing the old data
        setImagesData(result.images);

        setIsLoading(false);

        console.log("sort: ", result.images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSortGallery();
  }, [galleryType, celebrantGender, eventType, search]);

  // useEffect(() => {
  //   if (imagesData && imagesData.length > 0) {
  //     console.log(convertDriveLinkToLH3(imagesData[0].image));
  //   }
  // }, [imagesData]);

  return (
    <div className="h-[50rem]">
      <div className="flex justify-start bg-secondary500 py-10 h-full relative">
        {/* <div className="w-1/4">Happy</div> */}
        {/* <p className="absolute top-0 left-0">
          NOTE: STILL IN PROGRESS, TRYING TO IMITATE FIGMA GALLERY FILTER DESIGN
          AMAP
        </p> */}
        <div class="w-full flex h-full">
          {/* <GalleryViewer /> */}
          <div className="overflow-y-auto">
            <GalleryListSort
              handleGalleryType={handleGalleryType}
              handleCelebrantGender={handleCelebrantGender}
              handleEventType={handleEventType}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-white p-5">
            <div className="border-2 border-black rounded-lg">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={search}
                  onChange={handleSearch}
                />
              </Search>
            </div>
            <div className="  grid grid-cols-1 md:grid-cols-4 gap-8  overflow-y-auto">
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
                : imagesData &&
                  imagesData.map((item, index) => (
                    <div key={index} className="h-auto rounded-lg">
                      <GalleryImageModal2 item={item} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCollections;
