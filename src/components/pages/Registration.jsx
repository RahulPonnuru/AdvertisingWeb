import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (event) => {
    };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Company/Organization Name </label>
          <input type="text" name="company-name" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Email Id </label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="input-container">
          <label>Re-Enter Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign-Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;