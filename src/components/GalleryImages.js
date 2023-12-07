import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GalleryImages() {
  // Trial Images from database
  const API_ENDPOINT = "http://localhost:9000/api/all/gallery";
  const [images, setImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    package_type: "all",
    event_type: "all",
    theme: "all",
    celebrant_gender: "all",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINT);
        const result = response.data.AllPictures;
        setImages(result);
        console.log("Here it is: ", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: value,
    }));
  };

  const filteredImages = images.filter(
    (image) =>
      (selectedFilter.package_type === "all" ||
        image.package_type === selectedFilter.package_type) &&
      (selectedFilter.theme === "all" ||
        image.theme === selectedFilter.theme) &&
      (selectedFilter.event_type === "all" ||
        image.event_type === selectedFilter.event_type) &&
      (selectedFilter.celebrant_gender === "all" ||
        image.celebrant_gender === selectedFilter.celebrant_gender)
  );

  console.log(filteredImages);
  return (
    <div>
      {" "}
      <div>
        <div>
          <button
            onClick={() => handleFilterChange("all")}
            className={selectedFilter === "Budget Package" ? "active" : ""}
          >
            Package Type
          </button>
          {/* Assuming you have predefined categories in your data */}
          <button
            onClick={() => handleFilterChange("nature")}
            className={selectedFilter === "nature" ? "active" : ""}
          >
            Event Type
          </button>
          <button
            onClick={() => handleFilterChange("city")}
            className={selectedFilter === "city" ? "active" : ""}
          >
            Theme
          </button>
          {/* Add more buttons based on your actual categories */}
        </div>
        {filteredImages.map((image) => (
          <div key={image.gallery_id}>
            <img src={image.image} alt={`${image.package_type}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryImages;
