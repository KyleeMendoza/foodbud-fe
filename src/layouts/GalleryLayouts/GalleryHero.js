import React from "react";

function GalleryHero() {
  return (
    <div className="flex bg-[#E6F6FE] justify-center items-center  h-full">
      <div className="flex flex-col gap-10  font-['Poppins'] text-center 2xl:w-[55%] w-[65%]">
        <p className="text-5xl font-bold text-primary-500">
          Explore the Churvaness
        </p>
        <p className="text-lg">
          Craft your ideal event by tailoring it to your preferences, from venue
          to schedule. Customize every detail to match your vision, ensuring a
          uniquely personalized experience.
        </p>
      </div>
    </div>
  );
}

export default GalleryHero;
