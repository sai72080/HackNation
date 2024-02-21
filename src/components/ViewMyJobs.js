import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import Header from './Header';

const ViewMyJobs = () => {
    const { userEmail } = useAuth(); // Use the custom hook to access userEmail
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (userEmail) { // Check if userEmail is not null or undefined
            const fetchMyJobs = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/getMyJobs/${encodeURIComponent(userEmail)}`);
                    // Ensure that the response data structure matches this path
                    if (response.data && response.data.success && Array.isArray(response.data.jobs)) {
                        setJobs(response.data.jobs);
                    } else {
                        // Log or handle cases where the jobs data is not in the expected format
                        console.error('Unexpected response structure:', response.data);
                    }
                } catch (error) {
                    console.error('Error fetching my jobs:', error);
                }
            };

            fetchMyJobs();
        }
    }, [userEmail]); // Dependency array to re-fetch when userEmail changes

    const deleteJob = async (jobId) => {
        try {
            await axios.delete(`http://localhost:8000/deleteJob/${jobId}`, { data: { email: userEmail } });
            // Refresh the list after deletion
            setJobs(jobs.filter(job => job._id !== jobId));
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    return (
        <div>
            <Header />
            <h2>My Posted Jobs</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <strong>{job.title}</strong> at {job.company} - {job.jobLocation}<br />
                        Salary: {job.minSalary} to {job.maxSalary} {job.salaryType}<br />
                        <button onClick={() => deleteJob(job._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewMyJobs;
