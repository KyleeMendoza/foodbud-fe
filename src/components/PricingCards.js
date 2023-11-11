import React from "react";
import Button from "@mui/material/Button";

const PricingCards = () => {
  const cardData = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Budget Package",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "Deluxe Package",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Diamond Package",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Debut Package",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
  ];
  return (
    <div className="w-full pt-16 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col justify-center items-center p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#0249FF" }}
              className="w-[200px]"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
