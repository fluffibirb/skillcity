import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate(); // React Router's useuseNavigate hook

  // Function to validate email format
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to validate password format
  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  // Function to handle login button click
  const onButtonClick = () => {
    // Check if email is entered and valid
    if (email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError(""); // Clear email error

    // Check if password is entered and valid
    if (password.trim() === "") {
      setShowPasswordError(true);
      return;
    } else if (!validatePassword(password)) {
      setShowPasswordError(true);
      return;
    }
    setShowPasswordError(false); // Hide password error tooltip

    // Find user with matching email
    const user = getLogin.find((user) => user.email === email);

    if (!user) {
      setLoginError("User not found");
      return;
    }

    // Check if password matches
    if (user.password !== password) {
      setLoginError("Incorrect password");
      return;
    }

    // Password matches, proceed with successful login
    navigate("/profile"); // Redirect to profile page
  };

  // State to store login data fetched from backend
  const [getLogin, setGetLogin] = useState([]);

  useEffect(() => {
    // Fetch login data from backend
    fetch(`http://localhost:8081/login`)
      .then((res) => res.json())
      .then((data) => setGetLogin(data))
      .catch((error) => console.error("Error fetching login data:", error));
  }, []);

  return (
    <div className="mainContainer">
      <div className="titleContainer">Login here</div>
      <br />
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        {showPasswordError && (
          <div className="passwordError">
            Password must be minimum 8 characters and contain 1 uppercase
            letter, 1 lowercase letter, 1 digit, and 1 special character.
          </div>
        )}
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="button"
          type="button"
          onClick={onButtonClick}
          value="Log in"
        />
      </div>
      {loginError && <div className="loginError">{loginError}</div>}
    </div>
  );
};

export default Login;
