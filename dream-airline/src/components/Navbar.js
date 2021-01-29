import react,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import $ from "jquery";
import {appData} from "../data";

const Navbar=({showLogin,setShowLogin})=>{
  const [checkCurrency , setCheckCurrency] = useState(false);
  const [checkLanguage, setCheckLanguage] = useState(false);
  const toggleLogin=()=>{
    if(showLogin === false) setShowLogin(true);
    else setShowLogin(false);
  }
  const hideCurrencyAndLanguage = ()=>{
    $('.nav-currency-list-frame').hide();
    $('.nav-language-list-frame').hide();
    setCheckCurrency(false);
    setCheckLanguage(false);
  }
  const clickExit=()=>{
    hideCurrencyAndLanguage();
  }
  const showCurrency=()=>{
    hideCurrencyAndLanguage();
    $('.nav-currency-list-frame').show();
    setCheckCurrency(true);
    console.log(checkCurrency)
  }
  const showLanguage=()=>{
    hideCurrencyAndLanguage();
    $('.nav-language-list-frame').show();
    setCheckLanguage(true);
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
          <button className={`nav-language  ${checkLanguage === true ? 'currency-and-language-show'  : 'currency-and-language-hide'}`} onClick={showLanguage}>
            <i class="fas fa-globe-europe"></i>
            <span className={`${checkLanguage === true ?'currency-and-language-show-text':'currency-and-language-hide-text'}`}>EN</span>        
            <i class="fas fa-angle-down"></i>
          </button>
          <button className={`nav-currency  ${checkCurrency === true ? 'currency-and-language-show'  : 'currency-and-language-hide'}`} onClick={showCurrency}>
            <i class="fas fa-coins"></i>
            <span className={`${checkCurrency === true ?'currency-and-language-show-text':'currency-and-language-hide-text'}`}>VND</span>     
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
              {appData.currencyData.map(appData =>{
                return <div className="nav-currency-list-child">
                <span>{appData.id}</span>
                <span>{appData.name}</span>
              </div>
              })}
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
              {appData.languageData.map(appData =>{
                return <div className="nav-language-list-child">
                <img className="nav-language-icon" src={appData.src}></img>
                <span>{appData.name}</span>
              </div>
              })}
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