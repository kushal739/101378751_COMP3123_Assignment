import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://assignment-2-backend-e0dcc9f66224.herokuapp.com/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Signup successful");
    } catch (error) {
      console.error("Error during SignUp:", error);
    }
  };
  const handleBackClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>SignUp </h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="abc@123.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <div className="button-align-signup">
          <button
            type="submit"
            id="button-desgin-signup"
            className="button-desgin-signup"
          >
            Sign Up
          </button>
          <a href="/login" className="link">
            Already have Account? Log-In here
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
