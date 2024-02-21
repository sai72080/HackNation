// Salary.js
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import './css/Salary.css';

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className="box">
      <h4 className="container">Qualification</h4>
      {/* <div className="sal">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div> */}

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleChange={handleChange}
          value="10th pass"
          title="10th pass"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="12th pass"
          title="12th pass"
          name="test"
        />



        <InputField
          handleChange={handleChange}
          value="UnderGraduate"
          title="Under-Graduate"
          name="test"
        />

      <InputField
          handleChange={handleChange}
          value="PostGraduate"
          title="Post-Graduate"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
