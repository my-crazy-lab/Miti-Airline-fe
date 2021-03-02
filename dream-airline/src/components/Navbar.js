import React,{useState, useContext,useEffect} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import $ from "jquery";
import {FlyContext} from "../context"
import Login  from '../components/Login';


const Navbar=()=>{
  const context = useContext(FlyContext)
  const [srcLanguage, setSrcLanguage] = useState(context.appData.languageData[0].src);
  const [checkCurrency , setCheckCurrency] = useState(false);
  const [checkLanguage, setCheckLanguage] = useState(false);

  useEffect(() => {
    if(context.idLanguage === 'EN'){
      context.setThisLanguage(context.appData.listLanguage.english);
    }
    if(context.idLanguage === 'VI'){
      context.setThisLanguage(context.appData.listLanguage.vietnamese)
    }
  },[context.idLanguage])

  const chooseLanguage=(src, id)=>{
    context.setIdLanguage(id);
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
  const classCurrency =(id)=>{
    let classN = `nav-currency-list-flex `;
    if(context.idCurrency === id){
      classN+='change-color-currency';
    }
    else classN+='nav-currency-list-child'
    return classN;
  }
  const classLanguage =(id)=>{
    let classN = `nav-language-list-flex `;
    if(context.idLanguage === id){
      classN+='change-color-language';
    }
    else classN+='nav-language-list-child'
    return classN;
  }
  return(
    <div className="nav-frame">
      <div className="nav">
        <Link to="/" className="nav-logo" onClick={(e)=> context.setChoosePage('')}>
          <span className="nav-logo-brand">B</span>
          <span className="nav-logo-brand">O</span>
          <span className="nav-logo-brand">O</span>
          <span className="nav-logo-brand">K</span>
          <span className="nav-logo-text">Airline</span>
          <i class="fas fa-fighter-jet"></i>
        </Link>
        <div className="nav-list">
          <Link to="/Flight" className="nav-list-child">
            <button className={` ${context.choosePage === `${context.thisLanguage.flight}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.flight}</button>
          </Link>
          <Link to="/trips" className="nav-list-child">
            <button className={`${context.choosePage === `${context.thisLanguage.allTrip}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.allTrip}</button>
          </Link>
          <Link to="/Promo" className="nav-list-child">
            <button className={` ${context.choosePage === `${context.thisLanguage.promo}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.promo}</button>
          </Link>
          <Link to="/" className="nav-list-child">
            <button className={`${context.choosePage === `${context.thisLanguage.more}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.more}<i class="fas fa-angle-down"></i></button>
          </Link>   
        </div>
        <div className="nav-price">
          <button className={`nav-language  ${checkLanguage === true ? 'currency-and-language-show'  : 'currency-and-language-hide'}`} onClick={showLanguage}>
            <img className="nav-language-icon box-shadow-frame" src={srcLanguage}></img>
            <span className={`${checkLanguage === true ?'currency-and-language-show-text':'currency-and-language-hide-text'}`}>{context.idLanguage}</span>        
            <i class={`fas fa-angle-down ${checkLanguage === true ? 'currency-and-language-show-text': 'currency-and-language-hide-text'}`}></i>
          </button>
          <button className={`nav-currency ${checkLanguage === true ? 'currency-and-language-show'  : 'currency-and-language-hide'}`} onClick={showCurrency}>
            <i class={`fas fa-coins ${checkCurrency === true ? 'currency-and-language-show-text': 'currency-and-language-hide-text'}`}></i>
            <span className={`${checkCurrency === true ?'currency-and-language-show-text':'currency-and-language-hide-text'}`}>{context.idCurrency}</span>     
            <i class={`fas fa-angle-down ${checkCurrency === true ? 'currency-and-language-show-text': 'currency-and-language-hide-text'}`}></i>
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
                return <div key={data.id} className={classCurrency(data.id)} onClick={(e)=>chooseCurrency(data.id, data.symbol, data.conversion, data.name, data.flag)}>
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
                return <div className={classLanguage(appData.id)} key={appData.id} onClick={()=> chooseLanguage(appData.src,appData.id)}>
                <img className="nav-language-icon" src={appData.src}></img>
                <span >{ appData.name}</span>
              </div>
              })}
            </div>
          </div>
        </div>
        <div className="nav-human">
          <button type="button" onClick={toggleLogin} className="margin-right-text bor-style-5-child-btn">{context.thisLanguage.login}</button>
          <button className="nav-register-btn bor-style-3-child">{context.thisLanguage.register}</button>
        </div>
      </div>
      <div className="flight-login" style ={{'top' : `${$(window).height()* 0.2}px`}}>
        <Login toggleLogin={toggleLogin}></Login>
      </div>
      <div className={` ${context.showLogin === true ? 'login-overlay' :''}`}></div>
    </div>
  )
}

export default Navbar