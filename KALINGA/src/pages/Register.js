import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function OwnerSignup() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [location, setLocation] = useState('');
  const [pancardNumber, setPancardNumber] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup/owner", {
        email,
        userName,
        contactNumber,
        shopName,
        location,
        pancardNumber,
        password,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist" && email) {
        
        history("/home", { state: { id: email, role: "owner" } });
      }
    } catch (error) {
      console.error("Error submitting owner signup:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="signup1">
      <h1>Owner Signup</h1>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="hidden" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        <input type="hidden" onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
        <input type="hidden" onChange={(e) => setShopName(e.target.value)} placeholder="Shop Name" />
        <input type="hidden" onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <input type="hidden" onChange={(e) => setPancardNumber(e.target.value)} placeholder="Pancard Number" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
}


function EmployeeSignup() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [resumeLink, setResumeLink] = useState(''); 
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup/employee", {
        email,
        userName,
        contactNumber,
        resumeLink,
        password,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist" && email) {
        
        history("/home", { state: { id: email, role: "employee" } });
      }
    } catch (error) {
      console.error("Error submitting employee signup:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="signup1">
      <h1>Employee Signup</h1>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="hidden" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        <input type="hidden" onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
        <input type="hidden" onChange={(e) => setResumeLink(e.target.value)} placeholder="Resume Link" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>
      
    </div>
  );
}


function Signup() {
  const [isOwner, setIsOwner] = useState(true);

  return (
    <div className="signup">
      <h1></h1>
      {isOwner ? <OwnerSignup /> : <EmployeeSignup />}

      <label>
        <input
          type="checkbox"
          checked={isOwner}
          onChange={() => setIsOwner(!isOwner)}
        />
        Owner
        <br/>
      </label>
      <label>
        <input
          type="checkbox"
          checked={!isOwner}
          onChange={() => setIsOwner(!isOwner)}
        />
        Employee/Job Seeker
      </label>

      <br />
      <p>Already Registered?</p>
      <Link to="/Login">Login</Link>
      
    </div>
  );
}

export default Signup;  