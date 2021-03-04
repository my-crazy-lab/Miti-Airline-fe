import React, {useContext} from 'react';
import "./Login.css";
import {FlyContext} from "../context"
import $ from 'jquery';

const Login =()=>{
  const context = useContext(FlyContext);

  const toggleLoginExit=()=>{
    if(context.showLogin === false) context.setShowLogin(true);
    else context.setShowLogin(false);
    context.setShowOverlay(false);
  }
  const clickToLogin=()=>{
    context.setCheckClickLogin(true);
    let count = 0;
    for(let acc of context.appData.account){
      if(acc.username === context.user && acc.pass === context.pass) {
        count ++;
        context.setThisAccount(acc)
        context.setShowOverlay(false)
      }; 
    }
    if(count > 0) {
      context.setCheckLogin(true);
      $('.flight-login').toggle();
    }
    else context.setCheckLogin(false);
  }

  return(
    <div className="login">
      <div className="login-header margin-bottom-text">
        <div className="login-exit">
          <button type="button" className="button-exit-big margin-top-text margin-right-text" onClick={toggleLoginExit}>
            <i class="fas fa-times button-exit-icon"></i>
          </button>
        </div>
        <h1 className="login-topic">Login</h1>
      </div>
      <div className="login-user">
        <div className="login-user-name">
          <i class="fas fa-user"></i>
          <input placeholder="Email or PhoneNumber" onInput={(e)=>{context.setUser(e.target.value)}}></input>
        </div>
        <div className="login-user-pass">
          <i class="fas fa-lock"></i>
          <input type ='password' placeholder="Password" onInput={(e)=>{context.setPass(e.target.value)}}></input>  
        </div>
        <div className={`${context.checkLogin === false && context.checkClickLogin === true ? "error-login" : 'error-login-hide'}`}>
          <i class="fas fa-exclamation-triangle"></i>
          <span>This Account is wrong.<br></br> Please check or create new account!</span>
        </div> 
      </div>
      <div className="login-forgot">
        <a href="#">Forgot Password?</a>
      </div>
      <button className="login-sign-in" onClick={clickToLogin}>
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