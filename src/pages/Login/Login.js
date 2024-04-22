import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h2>Login</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
