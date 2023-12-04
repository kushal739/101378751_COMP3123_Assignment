import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://assignment-2-backend-e0dcc9f66224.herokuapp.com/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Login successful");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-align">
          <button type="submit" id="button-desgin" className="button-desgin">
            Log In
          </button>
          <button
            type="button"
            onClick={handleSignupClick}
            id="button-desgin"
            className="button-desgin"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
