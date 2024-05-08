import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Logo.png";
import "./Login.css";
import axios from "axios";
import SERVER_URL from "./config.js";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleLogin = async () => {
    if (email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError("");

    if (password.trim() === "") {
      setPasswordError("Please enter your password");
      setShowPasswordError(true);
      return;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character"
      );
      setShowPasswordError(true);
      return;
    }
    setPasswordError("");
    setShowPasswordError(false);

    try {
      setIsLoading(true);
      setLoginError("");

      console.log("Attempting login with:", { email, password });

      // Make an API request to authenticate the user
      const response = await axios.post(`${SERVER_URL}/api/login`, {
        email,
        password,
      });

      console.log("Login response:", response.data);

      // Handle successful login
      if (response.data.message === "Login successful") {
        // Call the onLogin function to update the App component's state
        onLogin();
        // Navigate to profile page
        navigate("/profile");
      } else {
        // Handle unsuccessful login
        setLoginError(response.data.message || "Invalid credentials!");
      }
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      setLoginError("Invalid credentials!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <img src={logo} alt="Logo" />
        <div>Welcome to Northrop Grumman </div>
        <div>Please Login Below</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        {showPasswordError && (
          <div className="passwordError">
            Password must be minimum 8 characters and contain 1 uppercase
            letter, 1 lowercase letter, 1 digit, and 1 special character.
          </div>
        )}
      </div>
      <br />
      <div className={"inputContainer"}>
        <button className={"button"} onClick={handleLogin} disabled={isLoading}>
          {isLoading ? "Loading..." : "Log in"}
        </button>
        {loginError && <div className="loginError">{loginError}</div>}
      </div>
    </div>
  );
};

export default Login;
