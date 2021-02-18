import React,{useState, useContext} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import $ from "jquery";
import {FlyContext} from "../context"
import Login  from '../components/Login';


const Navbar=()=>{
  const context = useContext(FlyContext)
  const [idLanguage, setIdLanguage] = useState("EN");
  const [srcLanguage, setSrcLanguage] = useState(context.appData.languageData[0].src);
  const [checkCurrency , setCheckCurrency] = useState(false);
  const [checkLanguage, setCheckLanguage] = useState(false);

  const chooseLanguage=(src, id)=>{
    setIdLanguage(id);
    setSrcLanguage(src);
  }
  const chooseCurrency=(id, symbol, convert, name, flag)=>{
    context.setIdCurrency(id)
    context.setSymbol(symbol)
    context.setConvert(convert)
    context.setNameCurrency(name)
  }
  const toggleLogin=()=>{
    if(context.showLogin === false) context.setShowLogin(true);
    else context.setShowLogin(false);
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
  }
  const showLanguage=()=>{
    hideCurrencyAndLanguage();
    $('.nav-language-list-frame').show();
    setCheckLanguage(true);
  }
  return(
    <div className="nav-frame">
      <div className="nav">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-brand">D</span>
          <span className="nav-logo-brand">R</span>
          <span className="nav-logo-brand">E</span>
          <span className="nav-logo-brand">A</span>
          <span className="nav-logo-brand">M</span>
          <span className="nav-logo-text">Airline</span>
          <i class="fas fa-fighter-jet"></i>
        </Link>
        <div className="nav-list">
          <Link to="/Flight" className="nav-list-child">Flight</Link>
          <Link to="/Hotel" className="nav-list-child">Hotel</Link>
          <Link to="/SearchPlane" className="nav-list-child">Search</Link>
          <Link to="/Promo" className="nav-list-child">Promo</Link>
          <Link to="/Price" className="nav-list-child">Price</Link>
          <Link to="/SearchPlane" className="nav-list-child">
            More
            <i class="fas fa-angle-down"></i>
          </Link>   
        </div>
        <div className="nav-price">
          <button className={`nav-language  ${checkLanguage === true ? 'currency-and-language-show'  : 'currency-and-language-hide'}`} onClick={showLanguage}>
            <img className="nav-language-icon" src={srcLanguage}></img>
            <span className={`${checkLanguage === true ?'currency-and-language-show-text':'currency-and-language-hide-text'}`}>{idLanguage}</span>        
            <i class="fas fa-angle-down"></i>
          </button>
          <button className={`nav-currency  ${checkCurrency === true ? 'currency-and-language-show'  : 'currency-and-language-hide'}`} onClick={showCurrency}>
            <i class="fas fa-coins"></i>
            <span className={`${checkCurrency === true ?'currency-and-language-show-text':'currency-and-language-hide-text'}`}>{context.idCurrency}</span>     
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
              {context.appData.currencyData.map(data =>{
                return <div className="nav-currency-list-child" onClick={()=>chooseCurrency(data.id, data.symbol, data.conversion, data.name, data.flag)}>
                <span>{data.id}</span>
                <span>{data.name}</span>
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
              {context.appData.languageData.map(appData =>{
                return <div className="nav-language-list-child" onClick={()=> chooseLanguage(appData.src,appData.id)}>
                <img className="nav-language-icon" src={appData.src}></img>
                <span >{ appData.name}</span>
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
      <div className="flight-login" style ={{'top' : `${$(window).scrollTop() + $(window).height()/4}px`}}>
        <Login></Login>
      </div>
    </div>
  )
}

export default Navbar