import React, { useState } from "react";
import G_FoodbudLogo from "../../../assets/G-FoodbudLogo.png";
import clp_loginclip from "../../../assets/clp-loginclip.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserIdentificationPage() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the backend API
      const response = await axios.post(`https://3.27.163.46/api/user/forgot?email=${email}`, { email });
      console.log(response)
      navigate("/email/sent")

    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <>
      <section class="grid h-screen w-full absolute inset-0">
        <div
          class="flex flex-grow items-center justify-center px-6 py-8 mx-auto md:h-screen w-full lg:py-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clp_loginclip})` }}
        >
          <div class="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 p-2 rounded-md">
            <div class="p-6 sm:p-8">
              <img className="mx-auto" src={G_FoodbudLogo} alt="" />
              <h1 class="text-2xl font-bold leading-tight tracking-normal dark:text-pink-primary-400 mt-5 mb-2">
                Find your account
              </h1>
              <p className="text-black text-sm mb-5">
                Enter the Email address associated with your account to change
                your password
              </p>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="mb-20 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="juandelacruz@gmail.com"
                    required=""
                    onChange={(e) =>{
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="w-full text-white bg-pink-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                >
                  Confirm Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserIdentificationPage;
