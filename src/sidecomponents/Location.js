// Location.js
import React from "react";
import InputField from "./InputField";
import './css/Location.css';

const Location = ({ handleChange }) => {
  return (
    <div className="box">
      <h4 className="container">Location</h4>
      <div>
        <label className="container1">
          <input onChange={handleChange} type="radio" value="" name="test" />
          {/* <span className="checkmark"></span>All */}
        </label>
        <InputField
          handleChange={handleChange}
          value="Bhubaneswar"
          title="Bhubaneswar"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Cuttack"
          title="Cuttack"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Puri"
          title="Puri"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Balasore"
          title="Balasore"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
