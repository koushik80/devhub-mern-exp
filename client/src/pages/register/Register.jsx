import axios from "axios";
import { useRef } from "react";
import "./register.css";
import logo from "./logo.png";
import { useHistory } from "react-router";

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">devHuß</h3>
          <span className="logo"><img src={logo} alt="devHuß" className="brand" /></span>
          <span className="loginDesc">
            Connect with coders and the world around you on devHuß.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required
              ref={username} className="loginInput" />
            <input placeholder="Email" required
              ref={email} className="loginInput" type="email" />
            <input placeholder="Password" required
              ref={password} className="loginInput" type="password"
              minLength="6"  />
            <input placeholder="Confirm Password" required
              ref={confirmPassword} className="loginInput"  type="password" />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}