import "./Login.css";
import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  // const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const onButtonClick = () => {
    if (email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError(""); // Clear previous error

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
    setPasswordError(""); // Clear previous error
    setShowPasswordError(false); // Hide password error tooltip

    // Proceed with login logic
    // You'll update this function later...
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login here</div>
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
        <input
          className={"button"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default Login;
