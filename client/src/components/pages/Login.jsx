import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "./styles.css";
import { useHistory } from "react-router-dom";
// import AdverLogin from "./AdverLogin";

function Login() {
// const navigate = useNavigate();
    const history=useHistory();
  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  function setValues() {
    Axios.post("http://localhost:3007/sendLoginForm", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data === "Sucess") {
          // useNavigate('/adverLogin');
          history.push("/adverLogin")
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // User Login info

  // const handleSubmit = (event) => {
  //Prevent page reload
  // event.preventDefault();

  // var { uname, pass } = document.forms[0];

  // Find user login info
  // const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // JSX code for login form

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Login</div>
        <div className="form">
          <form onSubmit={(e) => e.preventDefault}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                onChange={(e) => setusername(e.target.value)}
                name="uname"
                required
              />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                name="pass"
                required
              />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" onClick={setValues} />
            </div>
          </form>
        </div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
      </div>
    </div>
  );
}

export default Login;
