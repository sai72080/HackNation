// Newsletter.js

import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";


const Newsletter = () => {
  return (
    <div className="newsletter-container1">
      {/* 1st section */}
      <div className="newsletter-section">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          {" "}
          <FaEnvelopeOpenText /> Email me for any help
        </h3>
        <p className="text-primary/75 text-base mb-4">
          If you want any assistant or help from our executive than you can email-us , we will reply you within 24 hours.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full block py-2 bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* 2nd section */}
      <div className="newsletter-section mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          For recieving better user experience and engagement you can upload your shop image.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value="Upload your store images"
            className="w-full block py-2 bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
