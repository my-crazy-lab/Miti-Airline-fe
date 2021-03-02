import React from 'react';
import "./Login.css";

const Login =({toggleLogin})=>{
  return(
    <div className="login">
      <div className="login-header margin-bottom-text">
        <div className="login-exit">
          <button type="button" className="button-exit-big margin-top-text margin-right-text" onClick={toggleLogin}>
            <i class="fas fa-times button-exit-icon"></i>
          </button>
        </div>
        <h1 className="login-topic">Login</h1>
      </div>
      <div className="login-user">
        <div className="login-user-name">
          <i class="fas fa-user"></i>
          <input placeholder="Email or PhoneNumber"></input>
        </div>
        <div className="login-user-pass">
          <i class="fas fa-lock"></i>
          <input placeholder="Password"></input>
        </div>
      </div>
      <div className="login-forgot">
        <a href="#">Forgot Password?</a>
      </div>
      <button className="login-sign-in">
        Sign in
      </button>
      <div className="login-sign-up">
        <span>Not a member?</span>
        <a>Sign up</a>
      </div>
    </div>
  )
}

export default Login;