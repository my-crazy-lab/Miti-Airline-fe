import React,{useState, useContext,useEffect} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import $ from "jquery";
import {FlyContext, resetScroll} from "../context"
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
    $('.nav-currency-list-frame').hide();
    $('.nav-language-list-frame').hide();
    setSrcLanguage(src);
  }
  const chooseCurrency=(id, symbol, convert, name, flag)=>{
    context.setIdCurrency(id)
    context.setSymbol(symbol)
    context.setConvert(convert)
    context.setNameCurrency(name)
    context.setFlag(flag)
    $('.nav-currency-list-frame').hide();
    $('.nav-language-list-frame').hide();
  }
  const toggleLogin=()=>{
    if(context.showLogin === false) context.setShowLogin(true);
    else context.setShowLogin(false);
    context.setShowOverlay(true);
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
    context.setShowMore(false)
  }
  const showLanguage=()=>{
    hideCurrencyAndLanguage();
    $('.nav-language-list-frame').show();
    setCheckLanguage(true);
    context.setShowMore(false)
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
  const toRecommend=()=>{
    context.setShowMore(false)
    context.refRecommend.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
  }
  const toPartner=()=>{
    context.setShowMore(false)
    context.refAirlinePartner.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
  }
  const toTopFlight=()=>{
    context.setShowMore(false)
    context.refTopFlight.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
  }
  return(
    <div className="nav-frame">
      <div className="nav">
        <Link to="/" className="nav-logo" onClick={(e)=> {
          resetScroll()
          context.setChoosePage('')}}>
          <span className="nav-logo-brand">B</span>
          <span className="nav-logo-brand">O</span>
          <span className="nav-logo-brand">O</span>
          <span className="nav-logo-brand">K</span>
          <span className="nav-logo-text">Airline</span>
          <i class="fas fa-fighter-jet"></i>
        </Link>
        <div className="nav-list">
          <Link onClick={()=> {
            context.setShowMore(false);
            $('.nav-currency-list-frame').hide();
            $('.nav-language-list-frame').hide();
            resetScroll()
          }} to="/Flight" className="nav-list-child">
            <button className={` ${context.choosePage === `${context.thisLanguage.flight}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.flight}</button>
          </Link>
          <Link onClick={()=> {
            context.setShowMore(false);
            $('.nav-currency-list-frame').hide();
            $('.nav-language-list-frame').hide();
            resetScroll()
          }} to="/trips" className="nav-list-child">
            <button className={`${context.choosePage === `${context.thisLanguage.allTrip}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.allTrip}</button>
          </Link>
          <Link onClick={()=> {
            context.setShowMore(false);
            $('.nav-currency-list-frame').hide();
            $('.nav-language-list-frame').hide();
            resetScroll()
          }} to="/Promo" className="nav-list-child">
            <button className={` ${context.choosePage === `${context.thisLanguage.promo}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.promo}</button>
          </Link>
          <Link onClick={()=>{
            $('.nav-currency-list-frame').hide();
            $('.nav-language-list-frame').hide();
            if(context.showMore === false) context.setShowMore(true);
            else context.setShowMore(false);
            resetScroll();
          }} to="/" className="nav-list-child">
            <button className={`${context.choosePage === `${context.thisLanguage.more}` ? 'choose-page': 'bor-style-2-long-child'}`} onClick={(e)=> context.setChoosePage(e.target.innerText)}>{context.thisLanguage.more}<i class="fas fa-angle-down"></i></button>
          </Link>   
          <div className={`${context.showMore === true ? "nav-more-show border-radius-4 box-shadow-frame" : 'hide-error'}`}>
              <div className="nav-more-show-c" onClick={toRecommend}>
                <i class="fab fa-wpforms"></i>
                <div className="nav-more-c-f">
                  <span className="choose-flight-text-normal">{context.thisLanguage.recommend}</span>
                </div>
              </div>  
              <div className="nav-more-show-c" onClick={toTopFlight}> 
                <i class="far fa-paper-plane"></i>
                <div className="nav-more-c-f">
                  <span className="choose-flight-text-normal">{context.thisLanguage.popularFlight}</span>
                </div>
              </div>
              <div className="nav-more-show-c"  onClick={toPartner}>
                <i class="fab fa-amazon-pay"></i>
                <div className="nav-more-c-f">
                  <span className="choose-flight-text-normal">{context.thisLanguage.paymentPartner}</span>
                </div>
              </div>
          </div>  
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
        {context.checkLogin === false ? (
          <div className="nav-human">
            <button type="button" onClick={toggleLogin} className="margin-right-text bor-style-5-child-btn">{context.thisLanguage.login}</button>
            <button className="nav-register-btn bor-style-3-child">{context.thisLanguage.register}</button>
          </div>
        ) : (
          <div className="nav-human-acc">
            <div className={`${context.showDetailAccount === true ? 'nav-human-acc-show border-radius-4 box-shadow-frame' : 'error-login-hide'}`}>
              <div className="nav-acc-exit" onClick={()=>context.setShowDetailAccount(false)}><i class="fas fa-times"></i></div>
              <div className="nav-human-acc-show-c">
                <div className="nav-acc-name-img">
                  <i class="fas fa-user-secret"></i>
                </div>
                <div className="nav-acc-flex">
                  <span className='choose-flight-text-blur-big'>Hello {context.thisAccount.name}</span>
                  <span className='choose-flight-text-normal'>Xem thông tin cá nhân.</span>
                </div>
              </div>
              <div className="nav-human-acc-show-c">
                <div className="nav-acc-name-img">
                  <i class="far fa-envelope"></i>
                </div>
                <div className="nav-acc-flex">
                  <span className='choose-flight-text-blur-big'>Đóng góp ý kiến.</span>
                  <span className='choose-flight-text-normal'>Góp phần nâng cao tương tác.</span>
                </div>
              </div>
              <div className="nav-human-acc-show-c">
                <div className="nav-acc-name-img">
                  <i class="fab fa-angellist"></i>
                </div>
                <div className="nav-acc-flex" onClick={()=>{
                  context.setCheckLogin(false)
                  context.setCheckClickLogin(false)
                  context.setShowLogin(true)
                  context.setShowOverlay(true)
                }}>
                  <span className='choose-flight-text-blur-big'>Chuyển tài khoản.</span>
                  <span className='choose-flight-text-normal'>Đăng nhập mới ngay.</span>
                </div>
              </div>
              <div className="nav-human-acc-show-c">
                <div className="nav-acc-name-img">
                  <i class="fas fa-door-open"></i>
                </div>
                <div className="nav-acc-flex" onClick={()=> {       
                  context.setCheckLogin(false)
                  context.setCheckClickLogin(false)
                }}>
                  <span className='choose-flight-text-blur-big'>Đăng xuất.</span>
                </div>
              </div>
            </div>
            <div className="nav-acc-name">
              <div className="nav-acc-name-img">
                <i class="fas fa-user-secret"></i>
              </div>
              <span>{context.thisAccount.name}</span>
            </div>
            <div className="nav-acc-set" onClick={()=> {
              if(context.showDetailAccount === false) context.setShowDetailAccount(true)
              else context.setShowDetailAccount(false)
            }}>
              <i class="fas fa-sort-down"></i>
            </div>
          </div>
        )}
      </div>
      <div className="flight-login" style ={{'top' : `${$(window).height()* 0.2}px`}}>
        <Login></Login>
      </div>
      <div className={` ${context.showOverlay === true? 'login-overlay' :''}`}></div>
    </div>
  )
}

export default Navbar