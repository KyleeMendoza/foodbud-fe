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
        <div className="h-[40vh]  border-2 border-blue-600">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
