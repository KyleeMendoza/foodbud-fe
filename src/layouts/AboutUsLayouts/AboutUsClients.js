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
      <div className="flex flex-col gap-10  px-20 py-10">
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="flex flex-col text-start flex-1 gap-4 font-['Poppins']">
            <p className="font-bold text-2xl italic">Servicing since 2020</p>
            <p>
              Building customer trust in the food industry requires time,
              effort, and great passion. For Alfonso’s, it began in 1988 with a
              humble pizza outlet in Makati. The experience gained during those
              early years paved the way for small time canteen operations and
              catering to small private functions. Gradually, service offerings
              expanded to cater to more elaborate events in and out of Metro
              Manila. This eventually led to the incorporation of Seafood
              Ventures Corporation, a company whose main focus is to provide
              catering services to private and public institutions around the
              country.
            </p>
            <p>
              Mrs. Alice Patag, the hands-on CEO of the company, manages
              day-to-day operations and conducts quality inspections in catering
              functions. Her active involvement in all aspects of the business
              ensures that client needs and concerns are immediately addressed.
              She is ably supported by a seasoned pool of managers with the
              expertise to do what it takes to create truly memorable events. As
              the organization continues to grow, we equip employees with the
              necessary training that enables them not just to respond, but to
              anticipate our customers' needs.
            </p>
            <p>
              Our seasoned chefs will help you create the best menu for your
              palette and for your budget. Having had more than 10 years of
              experience abroad and locally, they have gained expertise in an
              abundance of cuisines while continuing to innovate and create the
              best quality food for your event and for your guests.
            </p>
            <p>
              To date, we have over 100 staff members that help us continue to
              grow and excel in food service and creation. We provide regular
              training to our staff in food safety and service to meet global
              standards.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="" className="lg:w-96 lg:h-96" />
          </div>
        </div>
        <div className="flex flex-col font-['Poppins'] gap-4 items-center justify-center ">
          <p className="font-bold text-2xl">Past &amp; Present Clients</p>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 lg:gap-10">
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
