import React from "react";
import { Link } from "react-router-dom";
import './Errorpage.css';
import image from "../assets/job_portal_about.svg";
const ErrorPage = () => {
    return (
        <div
            data-theme="light"
            className="grid h-screen px-4 place-content-center">
            <div className="text-left">
               {/* <p>
                <span>CO-LINGO</span> aims to bridge the gap between job seekers with basic skills and potential employers. The platform focuses on providing accessible and entry-level opportunities for those who may not have advanced educational qualifications. 
                </p>  */}
                <span><b>CO-LINGO</b></span><b>aims to bridge the gap between job seekers with basic skills and potential employers. The platform focuses on providing accessible and entry-level opportunities for those who may not have advanced educational qualifications.</b>
                <img src={image} alt="error" width="900px" height="800px"/>
            </div>
            <div className="text-center">
                <h1 class="error">CO-LINGO</h1>
               <Link to="/" className="home-button">
                    LET'S EXPLORE
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
