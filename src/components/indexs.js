import React from 'react';
import './index12.css';
import coLingo1Image from "../assets/iop.jpeg";
import SocialIcons from './SocialIcons';
import './Css/footer.css';
import { Link } from 'react-router-dom';
import FooterO from './FooterO';


const Footer = () => {
    return (
      <footer>
        <div className="foot" style={{ display: 'flex', paddingLeft: '30%', paddingRight: '30%' }}>
          <SocialIcons />
        </div>
        <div className="details">
          <div className="company test lnk">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contributors</a></li>
            </ul>
          </div>
          <div className="Job Types">
            <h3>Products</h3>
            <ul>
              <li><a href="#">House keeper</a></li>
              <li><a href="#">Supermarket</a></li>
              <li><a href="#">Drivers</a></li>
              <li><a href="#">Daily Workers</a></li>
            </ul>
          </div>
          <div className="useful-links test lnk">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">LINKK</a></li>
              <li><a href="#">LINKK</a></li>
              <li><a href="#">LINKK</a></li>
              <li><a href="#">LINKK</a></li>
            </ul>
          </div>
        </div>
        <h5 style={{ marginTop: '0px', color: 'white', textAlign: 'center' }}><i className="fa-regular fa-copyright " style={{ color: 'white' }}></i>2020-25 Kalinga, Inc. All Rights Reserved</h5>
      </footer>
    );
  };
  
class Indexs extends React.Component {
  render() {
    return (
      <div className="container">
 
        <header>
          <h1>Welcome to Co-lingo</h1>
          <p>Find your job today!</p>
          <Link to="/login">Signup/Login</Link>
        </header>
        <main>
          <section>
            <h2>Latest Jobs</h2>
            <div className="job-list">
              <div className="job-item">
                <h3>Medical Shop</h3>
                <p>To sell medicines</p>
                <p>Rs. 10,000-15,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>Patanjali</h3>
                <p>Salesman </p>
                <p>Rs. 15,000-20,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>Colgate</h3>
                <p>Manager </p>
                <p>Rs. 50,000-70,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>BarbequeNation</h3>
                <p>Chef </p>
                <p>Rs. 15,000-20,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>khimji</h3>
                <p>Manufacturer </p>
                <p>Rs. 35,000-40,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>Loyala school</h3>
                <p>Peon </p>
                <p>Rs. 15,000-20,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>Vishal mart</h3>
                <p>Salesman </p>
                <p>Rs. 15,000-20,000 Salary </p>
                <button>Apply Now</button>
              </div>
              <div className="job-item">
                <h3>Zudio</h3>
                <p>Security-Guard </p>
                <p>Rs. 25,000-30,000 Salary </p>
                <button>Apply Now</button>
              </div>
            </div>
          </section>
          <aside>
            <div>
              
              <img src={coLingo1Image} alt="Co-Lingo" className='image_pro' />
            </div>
          </aside>
        </main>
        <FooterO />

      </div>
    );
  }
}

export default Indexs;
