// Salary.js
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import './css/Salary.css';

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className="box">
      <h4 className="container">Salary</h4>


      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
