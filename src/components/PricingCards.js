import React from "react";
import Button from "@mui/material/Button";

const PricingCards = () => {
  const cardData = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Host-Magician",
      features: [
        "Host & 1 Assistant",
        "Magic show with doves",
        "Interactive parlor games",
        "Human puppet show",
        "Program management from start to end of the program",
      ],
    },
    {
      title: "Lights & Sounds",
      features: [
        "Basic Lights & Sound System",
        "2-3 Tech Operator",
        "2 speakers with 2 wireless mic",
        "4-6 RGBW Par led lights",
        "Laptop playback",
        "Music operated by tech",
        "FREE TRANSPO WITHIN QC ONLY",
        "Add 1k for any adult events such as corporate, wedding, debut & etc.",
      ],
    },
    {
      title: "Mascots",
      features: [
        "JJ cocomelon",
        "Cocomelon -watermelon",
        "Cinderella princess",
        "Unicorn",
        "Elsa of frozen",
        "Spiderman",
        "Ironman",
        "Mickey Mouse",
        "Minnie Mouse",
        "Hello Kitty",
        "FREE transpo within QC ONLY",
        "2 apperances in program",
      ],
    },
    {
      title: "Photobooth",
      features: ["Free 3pcs photo magnet", "Add 1,500 for upgrade to magnetic"],
    },
    {
      title: "Face Painting",
      features: ["2-3hrs unlimited face painting", "1 Face paint Artist"],
    },
    {
      title: "Cakes & Cupcakes",
      features: [
        "2 tier cake fondant ( all edible )",
        "Free 12pcs fondant cupcakes",
        "You may send/request any theme/pegs",
      ],
    },
    {
      title: "Photo Coverage",
      features: [
        "1 Photographer",
        "3-4hrs unlimited shots from start to end of program",
        "Edited pictures will be sent 2-3 weeks after event via gdrive (soft copy)",
        "Add 1,500 for church baptismal photo coverage",
      ],
    },
    {
      title: "Photo & Video Coverage",
      features: [
        "1 Photographer & 1 Videographer",
        "3-4hrs unlimited shots from start to end of program",
        "Event MTV highlights",
        "Edited pictures will be sent 2-3 weeks after event via gdrive (soft copy)",
        "Edited Video highlights will be sent 5 weeks after event (Sent via gdrive)",
        "Add 1,500 for church baptismal coverage",
      ],
    },
    {
      title: "4pcs Food Carts",
      features: [
        "Pancake (Chocolate or maple syrup)",
        "Juice bar (2 flavors)",
        "Mixed balls (Fish Ball, kikiam and etc.)",
        "Ice cream (Ube, Choco,Cheese)",
        "Hotdog on Stick (Tender Juicy)",
        "Ice scramble",
        "Siomai",
        "Cheesy buttered corn",
        "Unlimited Cotton candy",
        "Unlimited Popcorn",
        "Transpo fee will depend on your location",
      ],
    },
  ];
  return (
    <div className="w-full px-4 bg-white">
      <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] mx-auto grid md:grid-cols-4 gap-5 border-2 border-red-600">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full border-2 border-black py-5 shadow-xl flex flex-col items-center justify-center my-4 rounded-lg hover:scale-105 duration-300`}
          >
            {/* <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            /> */}
            <h2 className="text-xl font-bold text-center">{card.title}</h2>
            {/* <p className="text-center text-4xl font-bold">{card.price}</p> */}
            <div className="text-center text-xs my-3 max-h-40 overflow-y-auto">
              {card.features.map((feature, index) => (
                <p key={index} className={`py-2 border-b mx-8 ${index === 0}`}>
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
              Read more
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
