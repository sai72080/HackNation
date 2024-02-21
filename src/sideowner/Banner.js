// Banner.js

import React, { useState } from 'react';
import { FiMapPin, FiSearch } from "react-icons/fi";
import './css/banner.css';
// import FormExample from "../components/FormExample";

const Banner = ({ handleInputChange, query }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className="container">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Hire your <span className="text-blue">Employee</span> today
      </h1>
      <p className="text-lg text-black-70 mb-8">
        Thousands of employees in our website are waiting to get job.
        
      </p>

      {/* <form className="form-container">
        <div className="input-group search-box">
          <div className="flex rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 flex-1 input-container">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="What position are you looking for ?"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="icon text-gray-400" />
          </div>

          <div className="flex rounded-none rounded ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 flex-1 input-container">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Location"
              onChange={handleInputChange}
              value={""}
            />
            <FiMapPin className="icon text-gray-400" />
          </div>
        </div>

        <div className="button-container">
          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white rounded"
          >
            Search
          </button>
        </div> */}
      {/* </form> */}
    </div>
  );
};

export default Banner;
