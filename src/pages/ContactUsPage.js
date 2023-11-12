import React from "react";

import ContactHero from "../layouts/ContactLayouts/ContactHero";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function ContactUsPage() {
  return (
    <>
      <div id="faqs">
        <div className="h-[100vh]  border-2 border-blue-600">
          <ContactHero />
        </div>
        <div
          className="flex flex-col h-[50vh] 2xl:h-[40vh] border-2 border-blue-600"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
