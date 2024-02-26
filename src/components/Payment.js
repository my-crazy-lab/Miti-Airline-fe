import React,{useContext,useState} from 'react';
import BookProcedure from '../components/BookProcedure'
import './Payment.css';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';

const Payment =()=>{
  const context = useContext(FlyContext);
  const checkCode=()=>{
    context.setClickVerify(true)
    if(context.appData.codeDiscount.includes(context.thisCode) === true){
      context.setShowErrorVerify(true);
    }
    if(context.appData.codeDiscount.includes(context.thisCode) === false) context.setShowErrorVerify(false);
    if(context.appData.pricePromo.filter(promo => promo.code === context.thisCode ).length > 0 )
      {
        context.setObPromo(context.appData.pricePromo.filter(promo => {
          if(promo.code === context.thisCode){
            return context.setPromo(promo.priceDiscount);
          }
        }))
      }
    if(context.appData.pricePromo.filter(promo => promo.code === context.thisCode ).length <= 0) {
      context.setObPromo({})
      context.setPromo(0)
    }
  }

  return(
    <div className="payment-frame margin-bottom-text">
      <div className="payment">
        <div className="payment-head">
          <BookProcedure></BookProcedure>
        </div>
        <div className="payment-body">
          <div className="payment-body-1">
            <div className="payment-currency box-shadow-frame border-radius-4 margin-top-text">
              <div className="payment-currency-id">
                <span className="choose-flight-text-bold margin-left-text">{context.thisLanguage.paymentCurrency}</span>
                <div className="payment-currency-w">
                  <img className="nav-language-icon margin-left-text payment-flag" src={context.flag}></img>
                  <span className="choose-flight-text-blur-big">{context.idCurrency} - {context.nameCurrency}</span>
                </div>
              </div>
              <i class="fas fa-chevron-down margin-right-text"></i>                  
            </div>
            <div className="payment-method margin-top-text border-radius-4 box-shadow-frame">
              <div className="payment-method-head">
                <span className="margin-left-text choose-flight-text-biggest">{context.thisLanguage.paymentMethod}</span>
              </div>
              <div className="payment-method-body">
                <span className="choose-flight-text-blur-big margin-left-text margin-top-text">{context.thisLanguage.credit}</span>
                <Link to="/FLight/payment/creditCard" className=" box-shadow-frame payment-method-img margin-left-text margin-bottom-text">
                  <img src="https://cdn.airpaz.com/nuxt/img/master-visa.82b1593.png"></img>
                </Link>  
              </div>
              <div className="payment-method-body">
                <span className="choose-flight-text-blur-big margin-left-text margin-top-text">{context.thisLanguage.debit}</span>
                <Link to="/Flight/payment/debitCard" className=" box-shadow-frame payment-method-img margin-left-text margin-bottom-text">
                  <img src="https://cdn.airpaz.com/nuxt/img/master-visa.82b1593.png"></img>
                </Link> 
              </div>
            </div>
          </div>
          <div className="payment-body-2">
            <div className="payment-code box-shadow-frame margin-bottom-text border-radius-4 ">
              <div className="payment-code-1 margin-top-text">
                <span className="margin-left-text choose-flight-text-bold">Airline's Code</span>
                <span className="margin-right-text choose-flight-text-normal">1012240391</span>
              </div>
              <div className="payment-code-2">
                <span className="margin-left-text choose-flight-text-bold">{context.thisLanguage.status}</span>
                <span className="margin-right-text payment-text-need">{context.thisLanguage.needPayment}</span>
              </div>
            </div>
            <div className="book-flight-detail box-shadow-frame margin-bottom-text">
              <div className="book-flight-head">
                <span className="choose-flight-text-big margin-left-text">{context.thisLanguage.flight}</span>
                <Link className="book-text-detail margin-right-text" to="/">{context.thisLanguage.detail}</Link>
              </div>
              <div className="book-flight-depart">
                <div className="book-flight-depart-flex margin-left-text">
                  <span className="choose-flight-text-normal">{context.thisLanguage.depart}</span>
                  <span className="choose-flight-text-blur">{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
                </div>
                <div className="book-flight-depart-flex margin-left-text">
                  <span className="choose-flight-text-normal">Vietnam Airline</span>
                  <span className="choose-flight-text-blur">Boeing 747</span>
                </div>
              </div>
              <div className="book-flight-time">
                <div className="book-time">
                  <div className="graph-go">
                    <div className="point-start"></div>
                    <div className="line-go"></div>
                    <div className="point-end"></div>
                  </div>
                  <div className="detail-trip-flex">
                    <div className="choose-flight-list-child-detail-child">
                      <span className="choose-flight-text-big margin-top-text">{context.dataChoice.departureTime}</span>
                      <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
                    </div>
                    <div>
                      <i class="far fa-clock"></i>
                      <span className="choose-flight-text-small">{Math.floor(context.dataChoice.flightTime)}h {(context.dataChoice.flightTime - Math.floor(context.dataChoice.flightTime)) * 60}m</span>
                    </div>
                    <div className="detail-trip-child">
                      <span className="choose-flight-text-big">{context.dataChoice.destinationTime}</span>
                      <span className="choose-flight-text-small margin-bottom-text">{context.day} {context.nameMonth} {context.yearNow}</span>
                    </div>
                  </div>
                  <div className="detail-trip-flex">
                    <div className="detail-trip-child">
                      <span className="choose-flight-text-normal margin-top-text">{context.dataChoice.name} ({context.dataChoice.id})</span>
                      <span className="choose-flight-text-blur">{context.dataChoice.airport}</span>
                    </div>
                    <div className="detail-trip-child">
                      <span className="choose-flight-text-normal">{context.dataChoice.to} ({context.dataChoice.toId})</span>
                      <span className="choose-flight-text-blur margin-bottom-text">{context.dataChoice.toAirline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-price">
            <div className="detail-trip-price-head  margin-bottom-10">
            <div className="detail-trip-price-topic">
              <span className="choose-flight-text-bold margin-left-text">{context.thisLanguage.priceDetail}</span>          
            </div>
            <div className="detail-trip-depart ">
              <div className="detail-trip-depart-1">
                <div className="detail-trip-depart-1-c" onClick={()=>{
                  if(context.aniShowPrice === true) context.setAniShowPrice(false);
                  else context.setAniShowPrice(true);
                }}>
                  <span className="detail-trip-text-small-bold margin-left-text">{context.thisLanguage.depart} </span>
                  <span className="detail-trip-text-small-bold">({context.dataChoice.id}</span>
                  <i class="fas fa-arrow-right"></i>
                  <span className="detail-trip-text-small-bold">{context.dataChoice.toId})</span>
                  <i class={`fas fa-chevron-up ani-hide-price-icon ${context.aniShowPrice === true ? 'ani-show-price-icon' : ''}`}></i>
                </div>
                <span className="detail-trip-text-small-bold margin-right-text">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
              </div>
              <div className={`detail-trip-depart-2 ani-show-price-text ${context.aniShowPrice === true ? 'ani-hide-price-text' : ''}`}>
                <div className="detail-trip-depart-2-c">
                  <span className="margin-left-text choose-flight-text-blur">{context.thisLanguage.traveler} x {context.traveler}</span>
                  <span className="margin-right-text choose-flight-text-normal">{context.dataChoice.price * context.traveler}</span>
                </div>
                <div className="detail-trip-depart-2-c">
                  <span className="margin-left-text choose-flight-text-blur">{context.thisLanguage.tax}</span>
                  <span className="margin-right-text choose-flight-text-normal">{context.dataChoice.price}</span>
                </div>
              </div>
            </div>
          </div>
              <div className="book-total box-shadow-frame ">
                <span className="choose-flight-text-bold margin-left-text">{context.thisLanguage.total}</span>
                <span className="choose-flight-text-bold margin-right-text">{context.symbol} {(((context.dataChoice.price - context.promo) * context.convert).toFixed(2)) * context.traveler}</span>
              </div>
            </div>
            <div className="payment-promo box-shadow-frame border-radius-4 margin-top-text">
              <div className="payment-promo-1">
                <span className="margin-left-text choose-flight-text-bold">{context.thisLanguage.promoCode}</span>
                <div className="payment-flex-row">
                  <span className="payment-text-need margin-right-text">{context.thisLanguage.apply}</span>
                </div>
              </div>
              <div className="payment-promo-2">
                <input placeholder={context.thisLanguage.inputCode} className="margin-left-text" onInput ={(e)=> {
                  context.setThisCode(e.target.value)
                }}></input>
                <div className="verify-flex">
                  <button type ='button' className="btn-show margin-right-text" onClick={checkCode}>{context.thisLanguage.verify}</button>                
                  <span className={`${context.showErrorVerify === true && context.clickVerify === true ? "error-verify-success" : 'hide-error'}`}>Success</span>
                  <span className={`${context.showErrorVerify === false && context.clickVerify === true ? "error-verify-wrong" : 'hide-error'}`}>This code is wrong. Please check!</span>
                </div>
              </div>
            </div>
            <div className="payment-traveler box-shadow-frame margin-top-text border-radius-4 ">
              <div className="payment-traveler-1">
                <span className="margin-left-text choose-flight-text-bold">{context.thisLanguage.traveler}</span>
                <Link className="margin-right-text choose-flight-text-normal">{context.thisLanguage.detail}</Link>
              </div>
              <div className="payment-traveler-2">
                <span className="margin-left-text choose-flight-text-bold">1. Mr.Zinaa, Leminh</span>
                <span className="margin-right-text payment-text-need">Adult</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;