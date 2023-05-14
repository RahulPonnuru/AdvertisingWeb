import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

import "./style.css";
function getCall(){
  Axios.get("http://localhost:3007/sendForm").then(response => console.log(response.data));
}

function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [companyName,setCompanyName]=useState("");
    const [username,setusername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setrepassword]=useState("");
    function addDetails(){
      Axios.post("http://localhost:3007/sendDetails",{
        companyName:companyName,
        username:username,
        email:email,
        password:password,
        repassword:repassword
      })
    }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Company/Organization Name </label>
          <input type="text" onChange={(e)=>setCompanyName(e.target.value)} name="company-name" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input onChange={(e)=>setusername(e.target.value)} type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Email Id </label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="pass" required />
        </div>
        <div className="input-container">
          <label>Re-Enter Password </label>
          <input onChange={(e)=>setrepassword(e.target.value)} type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" onClick={addDetails} />
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