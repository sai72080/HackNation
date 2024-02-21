import React, { useState } from 'react';
import axios from 'axios';
import './PostJob.css';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import FooterO from './FooterO';

const PostJob = () => {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    company: '', 
    minSalary: '', 
    maxSalary: '', // New field: Maximum Salary
    salaryType: 'Yearly', // New field: Salary Type
    jobLocation: '', // New field: Job Location
    postingDate: new Date(), // New field: Job Posting Date
    experienceLevel: '', // New field: Experience Level
    companyLogo: '', // New field: Company Logo URL
    employmentType: 'Full-time', // New field: Employment Type
    jobPostedBy: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
        ...jobData,
        [name]: value,
    });
};
  const handleDateChange = (date) => {
    setJobData({ ...jobData, postingDate: date });
  };

  const handlePostJob = async () => {
    try {
      const response = await axios.post('http://localhost:8000/postJob', jobData);
      console.log(response.data);
      if(response.data) {
        alert('You have successfully posted the job'); // Show success message
        navigate('/home'); // Redirect to home page
      }
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error posting job:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <Header />
    <div className="post-job-container">
      
      <h2>Post a Job</h2>
      <form className="job-form">
        <label>Title:</label>
        <input type="text" name="title" value={jobData.title} onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" value={jobData.description} onChange={handleInputChange} />

        <label>Requirements:</label>
        <textarea name="requirements" value={jobData.requirements} onChange={handleInputChange} />

        <label>Location:</label>
        <input type="text" name="location" value={jobData.location} onChange={handleInputChange} />

        <label>Salary:</label>
        <input type="text" name="salary" value={jobData.salary} onChange={handleInputChange} />
        <label>Shop Name:</label>
        <input type="text" name="company" value={jobData.company} onChange={handleInputChange} />

        {/* <label>Minimum Salary:</label>
        <input type="text" name="minSalary" value={jobData.minSalary} onChange={handleInputChange} />

        <label>Maximum Salary:</label>
        <input type="text" name="maxSalary" value={jobData.maxSalary} onChange={handleInputChange} /> */}

        <label>Salary Type:</label>
        <select name="salaryType" value={jobData.salaryType} onChange={handleInputChange}>
          <option value="Hourly">Hourly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>

        <label>Job Location:</label>
        <input type="text" name="jobLocation" value={jobData.jobLocation} onChange={handleInputChange} />

        <label>Job Posting Date:</label>
        <DatePicker
          selected={jobData.postingDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
        />

        <label>Experience Level:</label>
        <input type="text" name="experienceLevel" value={jobData.experienceLevel} onChange={handleInputChange} />

        {/* <label>Company Logo URL:</label>
        <input type="text" name="companyLogo" value={jobData.companyLogo} onChange={handleInputChange} /> */}

        <label>Employment Type:</label>
        <select name="employmentType" value={jobData.employmentType} onChange={handleInputChange}>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Temporary">Temporary</option>
        </select>

        <label>Job Posted By (Your email):</label>
        <input type="text" name="jobPostedBy" value={jobData.jobPostedBy} onChange={handleInputChange} />

        <button type="button" onClick={handlePostJob}>
          Post Job
        </button>
      </form>
    </div>
    <FooterO />
    </div>
  );
};

export default PostJob;
