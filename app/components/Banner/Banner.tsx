"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "../Contact/ContactForm";

const Banner = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
              Solve problem with an <br /> integrated Autocad agency.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Kashi Patient design is the leading platform in Autocad design and
              services. Our expert patent illustration team is here to <br />
              provide you with the highest quality illustrations to support your
              patent application.
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              onClick={handleContactClick}
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              Contact Us
            </button>
            {/* <button
              type="button"
              className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
            >
              More info
            </button> */}
          </div>

          <Image
            src={"/assets/banner/dashboard.svg"}
            alt="banner-image"
            width={1200}
            height={598}
          />
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ContactForm onClose={handleFormClose} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Banner;
