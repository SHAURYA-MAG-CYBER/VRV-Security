// Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { sampleUsers } from "../data/UserLogin"; // Import sample user data
import PropTypes from "prop-types";
import "./Login.css";
import logo from "../assets/logo.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = sampleUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      onLogin(user); // Pass the user object to the parent
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
        <div className="logo-container">
            <img className="logo" src={logo} alt="vrv-logo"/>
            <h1 className="login-container-h1">Global leader in <br/>Cyber-security</h1>
        </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="mb-2 mt-2">Username</label>
            <input
              type="text"
              className="form-control mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-2">Password</label>
            <input
              type="password"
              className="form-control mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // Callback to pass logged-in user
};

export default Login;
