import { useState } from "react";
import "../App.css";
import "../css/loginstyle.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const onchangehandleusr = (e) => {
    setusername(e.target.value);
  };

  const onchangehandlepass = (e) => {
    setpassword(e.target.value);
  };

  const handlesubmit = (e) => {
    axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          if (response.data.data[0].role === "student") {
            navigate("/studentsdashboard", { state: { username: username } });
          } else if (response.data.data[0].role === "admin") {
            navigate("/admindashboard", { state: { username: username } }); 
          }
        }
      });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="credcontainer">
        <div className="leftcolumn">
          <div className="label">Login In</div>
          <input
            type="text"
            name="username"
            id="usernamea"
            placeholder="Username"
            value={username}
            onChange={onchangehandleusr}
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onchangehandlepass}
          />
          <div className="forgotpass">
            <a href="/forgotpass"> Forgot your password ?</a>
          </div>
          <div className="loginbutton">
            <button type="submit" onClick={handlesubmit}>
              {" "}
              Log In
            </button>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="register">
            <button onClick={(e)=>{navigate("/register", { state: { role: "student" } })}}>
              {" "}
              Register as a Student
            </button>
            <button onClick={(e)=>{navigate("/register", { state: { role: "admin" } })}}>
              {" "}
              Register as an Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
