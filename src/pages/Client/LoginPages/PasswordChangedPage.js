import React from "react";
import G_FoodbudLogo from "../../../assets/G-FoodbudLogo.png";
import clp_loginclip from "../../../assets/clp-loginclip.png";

function PasswordChangedPage() {
  return (
    <>
      <section class="grid h-screen w-full absolute inset-0">
        <div
          class="flex flex-grow items-center justify-center px-10 py-8 mx-auto md:h-screen w-full lg:py-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clp_loginclip})` }}
        >
          <div class="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 p-2 rounded-md">
            <div class="p-6 sm:p-8">
              <img className="mx-auto" src={G_FoodbudLogo} alt="" />
              <h1 class="text-2xl font-bold leading-tight tracking-normal dark:text-pink-primary-400 mt-5 mb-2">
                New password created
              </h1>
              <p className="text-black text-sm pb-40 text-justify">
                Success! Your password has been changed successfully. You can
                now login with your new credentials.
              </p>
              <form class="space-y-4 md:space-y-6" action="#">
                <button
                  type="submit"
                  class="w-full text-white bg-pink-primary-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                >
                  Back to Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PasswordChangedPage;
