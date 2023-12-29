import React from "react";
import clp_login from "../../assets/clp-login.png";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import cw_review from "../../assets/CW-ReviewBG.png";

function HomeTestimonials() {
  const names = ["juan dela cruz", "cardo dalisay", "agimat"];

  // Your data from db will look like this.
  const reviewData = [
    {
      name: "Kristel Ann Tuscano",
      date: "August 2023",
      comment: `We had the most incredible experience with (Food Bud Events &
      Catering Services) at my little sister’s 7th birthday party!
      Grabe, from start to finish of our event, your services were
      exceptional. The food impressed us that left both of our
      guests (kids and adults) delighted — plus beautifully
      presented! Every detail (small or big) was taken care of, and
      their professionalism and attentiveness to our guests needs
      were commendable… Super duper maasikaso po ni Sir Kyle (Team
      Leader) all throughout our event, couldn’t ask for more na
      talaga!`,
      stars: 5,
    },
    {
      name: "Djlord Sucat",
      date: "October 2023",
      comment: `We had an event last September 22 with Food Bud Events and
      Catering Services for my nephew’s 7th Birtday, and they have
      provided an awesome experience with their creative setup and
      amazing group of staff. We actually didn't expect the amount of attendees as it
      exceeded the number of guests we anticipated, and we're quite
      anxious in terms of quantity. But to our surprise, Food Bud's
      outstanding team planned and executed excellently the
      distribution of meals.`,
      stars: 5,
    },
    {
      name: "Jongko Janina",
      date: "September 2023",
      comment: `Hello po. I just wanted to provide feedback po regarding our
      event last September 23 for my son’s 4th birthday celebration. 
      My husband and I are very thankful to your team and we can say
      choosing your service is one of the best decision we made for
      our son’s birthday. The food was absolutely delicious which
      was also mentioned by most of our guests during that day.`,
      stars: 5,
    },
    {
      name: "Bea Yuvienco",
      date: "September 2023",
      comment: `I had the pleasure of hiring Food Bud Events and Catering
      Services for my son Jaden’s birthday, and I must say, despite
      a few ups and downs during the planning process, the end
      result was truly remarkable. This journey had its fair share
      of challenges, but Food Bud Events showed their dedication and
      professionalism throughout.`,
      stars: 5,
    },
  ];

  return (
    <div className=" h-full ">
      {/* <div className="h-full relative">
        <img
          src={clp_login}
          alt="Picture"
          className="h-full w-full object-cover absolute"
        />
        <div
          className="absolute inset-0 z-10 bg-white opacity-90 filter"
          // style={{ zIndex: 1 }}
        ></div>
        <div className="absolute flex justify-center items-center inset-0 z-20 px-7 lg:px-0">
          <div className=" flex flex-col justify-around items-center font-['Poppins']">
            <p className="text-2xl lg:text-4xl font-bold text-sky-500 uppercase">
              client testimonials
            </p>
            <div className="flex flex-col flex-1 my-6 gap-10 lg:gap-5 justify-center items-center ">
              <div className="bg-white lg:w-[70%] p-5 rounded-3xl drop-shadow-lg">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-2 ">
                    <p className="text-xl lg:text-2xl font-bold text-sky-600 capitalize">
                      cardo dalisay
                    </p>
                    <p className="text-slate-400 text-body lg:text-title24">
                      September 2023
                    </p>
                  </div>
                  <div className="stars">stars</div>
                </div>
                <div className="flex flex-col gap-5 mt-8 text-body lg:text-title24">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis voluptas corporis quos facilis nihil excepturi
                    quo, perferendis porro aspernatur sapiente vitae cum labore
                    commodi rem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis voluptas corporis quos facilis nihil excepturi
                    quo, perferendis porro aspernatur sapiente vitae cum labore
                    commodi rem.
                  </p>
                </div>
              </div>
              <div className="bg-white lg:w-[70%] p-5 rounded-3xl drop-shadow-lg">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-2 ">
                    <p className="text-xl lg:text-2xl font-bold text-sky-600 capitalize">
                      cardo dalisay
                    </p>
                    <p className="text-slate-400 text-body lg:text-title24">
                      September 2023
                    </p>
                  </div>
                  <div className="stars">stars</div>
                </div>
                <div className="flex flex-col gap-5 mt-8 text-body lg:text-title24">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis voluptas corporis quos facilis nihil excepturi
                    quo, perferendis porro aspernatur sapiente vitae cum labore
                    commodi rem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis voluptas corporis quos facilis nihil excepturi
                    quo, perferendis porro aspernatur sapiente vitae cum labore
                    commodi rem.
                  </p>
                </div>
              </div>
              <div className="bg-white lg:w-[70%] p-5 rounded-3xl drop-shadow-lg">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-2 ">
                    <p className="text-xl lg:text-2xl font-bold text-sky-600 capitalize">
                      cardo dalisay
                    </p>
                    <p className="text-slate-400 text-body lg:text-title24">
                      September 2023
                    </p>
                  </div>
                  <div className="stars">stars</div>
                </div>
                <div className="flex flex-col gap-5 mt-8 text-body lg:text-title24">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis voluptas corporis quos facilis nihil excepturi
                    quo, perferendis porro aspernatur sapiente vitae cum labore
                    commodi rem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis voluptas corporis quos facilis nihil excepturi
                    quo, perferendis porro aspernatur sapiente vitae cum labore
                    commodi rem.
                  </p>
                </div>
              </div>
            </div>
            <a className="text-xl font-bold text-sky-400 underline capitalize">
              read more
            </a>
          </div>
        </div>
      </div> */}
      <div
        className=" flex justify-center items-center bg-cover bg-no-repeat py-10 px-10 lg:px-0"
        style={{ backgroundImage: `url(${cw_review})` }}
      >
        <div className=" flex flex-col justify-around items-center font-heading">
          <p className="text-2xl lg:text-4xl font-bold py-10 text-sky-500 uppercase">
            client testimonials
          </p>
          <div className="flex flex-col flex-1 my-6 gap-10 lg:gap-5 justify-center items-center ">
            {reviewData.map((review, index) => (
              <Link
                key={index}
                to="/review"
                state={{ data: review }}
                className="bg-white lg:w-[70%] p-5 rounded-3xl drop-shadow-lg hover:cursor-pointer hover:bg-[#f8b9ce]"
              >
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-2 ">
                    <p className="text-xl lg:text-2xl font-bold text-sky-600 capitalize">
                      {review.name}
                    </p>
                    <p className="text-slate-400 text-body lg:text-title24">
                      {review.date}
                    </p>
                  </div>
                  <div className="text-yellow-400">
                    {[...Array(review.stars)].map((_, index) => (
                      <StarIcon key={index}></StarIcon>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-5 mt-8 text-body lg:text-title24">
                  <p>{review.comment}</p>
                </div>
              </Link>
            ))}
          </div>
          <a
            className="font-heading text-heading25 font-extrabold text-secondary400 py-5 underline"
            href="https://www.facebook.com/foodbudevents/reviews"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials;
