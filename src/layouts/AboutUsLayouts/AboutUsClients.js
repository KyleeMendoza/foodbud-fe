import React from "react";
import logo from "../../assets/G-FoodbudFooterLogo.png";
import ReviewComponent from "../../components/ReviewComponent";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";
import client7 from "../../assets/client7.png";
import client8 from "../../assets/client8.png";

function AboutUsClients() {
  return (
    <div className="h-full ">
      <div className="flex flex-col gap-10 lg:px-40 lg:py-20 px-10 py-10">
        <div className="flex w-full flex-col-reverse lg:flex-row ">
          <div className="flex flex-col text-justify flex-1 gap-4 font-heading">
            <p className="font-bold text-2xl text-center lg:text-start italic text-[#e91e63]">
              Servicing since 2021
            </p>
            <p>
              Welcome to Food Bud Events and Catering Services, where we
              specialize in crafting unforgettable moments for your little ones
              and beyond. Our diverse party packages ensure a fun-filled
              experience for every occasion, from kiddie parties to corporate
              events. Committed to excellence, our mission is to surpass client
              expectations by giving our best in every event.
            </p>
            <p>
              Founded by Ms. Myka Roque and Mr. Ruben Lumagbas, Food Bud Events
              and Catering Services has proudly operated for 2 years,
              experiencing notable growth and earning an impressive Facebook
              page rating of 4.9.With an average daily engagement of 85
              individuals, our business has become a trusted choice for clients
              seeking top-notch event services.
            </p>
            <p>
              Beyond our expertise in catering and services, we also offer
              equipment rentals for stylish event designs and excel in event
              management for various celebrations, including birthdays,
              baptisms, debuts, and corporate events.
            </p>
            <p>
              Join us on this journey at our offices in North Caloocan and let's
              create lasting memories together. Your celebration is special, and
              so are we.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="" className="lg:w-96 lg:h-96" />
          </div>
        </div>
        <div className="flex flex-col font-heading gap-4 items-center justify-center ">
          <p className="font-bold text-heading36 text-primary500 py-5 text-center monitor:pt-20 monitor:text-heading14">
            Past &amp; Present Clients
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 lg:grid-cols-4 lg:gap-20">
            <img src={client1} alt="" className="lg:w-52 lg:h-52" />
            <img src={client2} alt="" className="lg:w-52 lg:h-52" />
            <img src={client3} alt="" className="lg:w-52 lg:h-52" />
            <img src={client4} alt="" className="lg:w-52 lg:h-52" />
            <img src={client5} alt="" className="lg:w-52 lg:h-52" />
            <img src={client6} alt="" className="lg:w-52 lg:h-52" />
            <img src={client7} alt="" className="lg:w-52 lg:h-52" />
            <img src={client8} alt="" className="lg:w-52 lg:h-52" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsClients;
