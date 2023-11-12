import React from "react";

function FaqsHero() {
  return (
    <div className="flex bg-[#E6F6FE] justify-center items-center border-2 border-black h-full">
      <div className="flex flex-col gap-10  border-2 border-green-600 font-['Poppins'] text-center 2xl:w-[55%] w-[100%]">
        <p className="text-5xl font-bold capitalize text-primary-500">
          frequently asked questions
        </p>
        <p className="text-4xl font-semibold capitalize">
          Welcome! How can we help you ?
        </p>
      </div>
    </div>
  );
}

export default FaqsHero;
