import react,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import $ from "jquery";

const Navbar=({showLogin,setShowLogin})=>{
  const toggleLogin=()=>{
    if(showLogin === false) setShowLogin(true);
    else setShowLogin(false);
  }
  const clickExit=()=>{
    $('.nav-currency-list-frame').hide();
    $('.nav-language-list-frame').hide();
  }
  const showCurrency=()=>{
    $('.nav-language-list-frame').hide();
    $('.nav-currency-list-frame').show();
  }
  const showLanguage=()=>{
    $('.nav-currency-list-frame').hide();
    $('.nav-language-list-frame').show();
  }
  return(
    <div className="nav-frame">
      <div className="nav">
        <div className="nav-logo">
          <span className="nav-logo-brand">D</span>
          <span className="nav-logo-brand">R</span>
          <span className="nav-logo-brand">E</span>
          <span className="nav-logo-brand">A</span>
          <span className="nav-logo-brand">M</span>
          <span className="nav-logo-text">Ariline</span>
          <i class="fas fa-fighter-jet"></i>
        </div>
        <div className="nav-list">
          <Link to="/" className="nav-list-child">Flight</Link>
          <Link to="/Hotel" className="nav-list-child">Hotel</Link>
          <Link to="/Promo" className="nav-list-child">Promo</Link>
          <Link to="/Orders" className="nav-list-child">Orders</Link>
          <Link to="/Price" className="nav-list-child">Price</Link>
          <Link to="/Promo" className="nav-list-child">
            More
            <i class="fas fa-angle-down"></i>
          </Link>   
        </div>
        <div className="nav-price">
          <button className="nav-language" onClick={showLanguage}>
            <i class="fas fa-globe-europe"></i>
            <span>EN</span>        
            <i class="fas fa-angle-down"></i>
          </button>
          <button className="nav-currency" onClick={showCurrency}>
            <i class="fas fa-coins"></i>
            <span>VND</span>     
            <i class="fas fa-angle-down"></i>
          </button>
          <div className="nav-currency-list-frame">
            <div className="nav-currency-list-head">
              <span>Currency</span>
              <button type="button" className="button-exit" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
              </button>
            </div>
            <div className="nav-currency-list">
              <div className="nav-currency-list-child">
                <span>AED</span>
                <span>Arab Emirates Dirham</span>
              </div>
              <div className="nav-currency-list-child">
                <span>BND</span>
                <span>Brunei Dollar</span>
              </div>
              <div className="nav-currency-list-child">
                <span>CAD</span>
                <span>Canadian Dollar</span>
              </div>
            </div>
            <div className="nav-currency-list">
              <div className="nav-currency-list-child">
                <span>AED</span>
                <span>Arab Emirates Dirham</span>
              </div>
              <div className="nav-currency-list-child">
                <span>BND</span>
                <span>Brunei Dollar</span>
              </div>
              <div className="nav-currency-list-child">
                <span>CAD</span>
                <span>Canadian Dollar</span>
              </div>
            </div>
          </div>
          <div className="nav-language-list-frame">
            <div className="nav-language-list-head">
              <span>Language</span>
              <button type="button" className="button-exit" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
              </button>
            </div>
            <div className="nav-language-list">
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/gb.d3ddd60.svg"></img>
                <span>English</span>
              </div>
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/id.17b9967.svg"></img>
                <span>Indonesia</span>
              </div>
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/ph.12f36ee.svg"></img>
                <span>Tagalog</span>
              </div>
            </div>
            <div className="nav-language-list">
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/cn.02c229d.svg"></img>
                <span>简体中文</span>
              </div>
              <div className="nav-language-list-child">
              <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/tw.8a19468.svg"></img>
                <span> 繁體中文</span>
              </div>
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/th.76fca72.svg"></img>
                <span>ภาษาไทย</span>
              </div>
            </div>
            <div className="nav-language-list">
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/jp.3e72015.svg"></img>
                <span>日本語 </span>
              </div>
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/kr.60fde7f.svg"></img>
                <span>한국어</span>
              </div>
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/my.e6739f4.svg"></img>
                <span>Malay</span>
              </div>
            </div>
            <div className="nav-language-list">
              <div className="nav-language-list-child">
                <img className="nav-language-icon" src="https://cdn.airpaz.com/nuxt/img/vn.6b3aef5.svg"></img>
                <span>Tiếng Việt</span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-human">
          <button type="button" onClick={toggleLogin} className="nav-login-btn">Login</button>
          <button className="nav-register-btn">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar