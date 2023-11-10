import React from "react";
import clp_login from "../../assets/clp-login.png";

function HomeTestimonials() {
  const names = ["juan dela cruz", "cardo dalisay", "pepeng agimat"];
  return (
    <div
      className=" h-full border-2 border-red-600 relative"
      style={{
        backgroundImage: `url(${clp_login})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Set the background size to cover
        backgroundPosition: "bottom center", // Center the background image
      }}
    >
      <div
        className="absolute inset-0 z-10 bg-white opacity-90 filter"
        // style={{ zIndex: 1 }}
      ></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-around py-10 items-center font-['Poppins'] border-4 border-blue-600">
        <p className="text-4xl font-bold text-sky-500 uppercase">
          client testimonials
        </p>
        <div className="flex flex-col gap-5 justify-center items-center border-2 border-green-600">
          {names.map((names, key) => (
            <div
              key={key}
              className="bg-white w-[70%] p-5 rounded-3xl drop-shadow-lg"
            >
              <div className="flex justify-between ">
                <div className="flex flex-col gap-2 ">
                  <p className="text-2xl font-bold text-sky-600 capitalize">
                    {names}
                  </p>
                  <p className="text-slate-400">September 2023</p>
                </div>
                <div className="stars">stars</div>
              </div>
              <div className="flex flex-col gap-5 mt-8">
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
          ))}
        </div>
        <a className="text-xl font-bold text-sky-400 underline capitalize">
          read more
        </a>
      </div>
    </div>
  );
}

export default HomeTestimonials;
