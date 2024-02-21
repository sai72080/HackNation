// SearchBox.js

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Css/Form.css';

const SearchBox = ({ handleSearch, handleButtonClick }) => {
  return (
    <div className="search-box">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="search-button" onClick={handleButtonClick}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
