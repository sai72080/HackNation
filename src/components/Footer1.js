import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer1.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">YourLogo</div>
        <div className="social-icons">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;