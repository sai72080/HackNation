// WorkExperience.js
import React from 'react';
import InputField from './InputField';

const WorkExperience = ({ handleChange }) => {
  return (
    <div className='box'>
      <h4 className="container">Work experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          handleChange={handleChange}
          value="Experience"
          title="0-2 years"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Experience"
          title="2-4 years"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
