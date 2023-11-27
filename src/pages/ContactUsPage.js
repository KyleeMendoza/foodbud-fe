import React from "react";

import ContactHero from "../layouts/ContactLayouts/ContactHero";
import HomeFooter from "../layouts/HomeLayouts/HomeFooter";

function ContactUsPage() {
  return (
    <>
      <div id="faqs" className="h-auto">
        <div className="flex flex-col">
          <ContactHero />
        </div>
        <div
          className="flex flex-col"
          // id="footer"
        >
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
