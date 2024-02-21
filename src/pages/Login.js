import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOwner, setIsOwner] = useState(true);

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        isOwner
          ? "http://localhost:8000/login/owner"
          : "http://localhost:8000/login/employee",
        {
          email,
          password,
        }
      );

      if (response.data === "exist") {
        
        history("/home", { state: { id: email, role: isOwner ? "owner" : "employee" } });
      } else if (response.data === "notexist") {
        alert(isOwner ? "Owner not found" : "Employee not found");
      }
    } catch (error) {
      alert("Wrong details");
      console.error("Error:", error);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <label>
          <input
            type="checkbox"
            checked={isOwner}
            onChange={() => setIsOwner(!isOwner)}
          />
          Owner
        </label>
        <label>
          <input
            type="checkbox"
            checked={!isOwner}
            onChange={() => setIsOwner(!isOwner)}
          />
          Employee/Job Seeker
        </label>
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>Not Registered?</p>
      <Link to="/register">Signup</Link>
    </div>
  );
}

export default Login;