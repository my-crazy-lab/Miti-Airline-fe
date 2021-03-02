import React,{useContext,useState} from 'react';
import BookProcedure from '../components/BookProcedure'
import './Payment.css';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';

const Payment =()=>{
  const context = useContext(FlyContext);
  const [showErrorVerify, setShowErrorVerify] = useState();

  const checkCode=()=>{
    if(context.appData.codeDiscount.includes(context.thisCode) === true){
      setShowErrorVerify(true);
    }
    setShowErrorVerify(false);
  }

  return(
    <div className="payment-frame margin-bottom-text">
      <div className="payment">
        <div className="payment-head">
          <BookProcedure></BookProcedure>
        </div>
        <div className="payment-body">
          <div className="payment-body-1">
            <div className="payment-currency box-shadow-frame border-radius-4">
              <div className="payment-currency-id">
                <span className="choose-flight-text-bold margin-left-text">Payment Currency</span>
                <div>
                  <img className="nav-language-icon margin-left-text payment-flag" src="https://cdn.airpaz.com/nuxt/img/eu.ee7f471.svg"></img>
                  <span className="choose-flight-text-blur-big">{context.idCurrency} - {context.nameCurrency}</span>
                </div>
              </div>
              <i class="fas fa-chevron-down margin-right-text"></i>                  
            </div>
            <div className="payment-method margin-top-text border-radius-4 box-shadow-frame">
              <div className="payment-method-head">
                <span className="margin-left-text choose-flight-text-biggest">Payment Methods</span>
              </div>
              <div className="payment-method-body">
                <span className="choose-flight-text-blur-big margin-left-text margin-top-text">Credit Card</span>
                <Link to="/FLight/payment/creditCard" className=" box-shadow-frame payment-method-img margin-left-text margin-bottom-text">
                  <img src="https://cdn.airpaz.com/nuxt/img/master-visa.82b1593.png"></img>
                </Link>  
              </div>
              <div className="payment-method-body">
                <span className="choose-flight-text-blur-big margin-left-text margin-top-text">Debit Card</span>
                <Link to="/Flight/payment/debitCard" className=" box-shadow-frame payment-method-img margin-left-text margin-bottom-text">
                  <img src="https://cdn.airpaz.com/nuxt/img/master-visa.82b1593.png"></img>
                </Link> 
              </div>
            </div>
          </div>
          <div className="payment-body-2">
            <div className="payment-code box-shadow-frame margin-bottom-text border-radius-4 ">
              <div className="payment-code-1">
                <span className="margin-left-text choose-flight-text-bold">Airline's Code</span>
                <span className="margin-right-text choose-flight-text-normal">1012240391</span>
              </div>
              <div className="payment-code-2">
                <span className="margin-left-text choose-flight-text-bold">Booking Status</span>
                <span className="margin-right-text payment-text-need">Need Payment</span>
              </div>
            </div>
            <div className="book-flight-detail box-shadow-frame margin-bottom-text">
              <div className="book-flight-head">
                <span className="choose-flight-text-big margin-left-text">Flight</span>
                <Link className="book-text-detail margin-right-text" to="/">Detail</Link>
              </div>
              <div className="book-flight-depart">
                <div className="book-flight-depart-flex margin-left-text">
                  <span className="choose-flight-text-normal">Depart Flight</span>
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
              <div className="book-price-head box-shadow-frame ">
                <div className="detail-trip-price-topic">
                  <span className="choose-flight-text-bold margin-left-text">Price detail</span>          
                </div>
                <div className="detail-trip-depart">
                  <div>
                    <span className="detail-trip-text-small-bold margin-left-text">Depart </span>
                    <span className="detail-trip-text-small-bold">({context.dataChoice.id}</span>
                    <i class="fas fa-arrow-right"></i>
                    <span className="detail-trip-text-small-bold">{context.dataChoice.toId})</span>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                  <span className="detail-trip-text-small-bold margin-right-text">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
                </div>
              </div>
              <div className="book-total box-shadow-frame ">
                <span className="choose-flight-text-bold margin-left-text">Total Price</span>
                <span className="choose-flight-text-bold margin-right-text">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
              </div>
            </div>
            <div className="payment-promo box-shadow-frame border-radius-4 margin-top-text">
              <div className="payment-promo-1">
                <span className="margin-left-text choose-flight-text-bold">Promo Code</span>
                <div className="payment-flex-row">
                  <span className="payment-text-need">Apply Code</span>
                  <div className="margin-right-text">
                    <i class="fas fa-chevron-up"></i>                  
                  </div>
                </div>
              </div>
              <div className="payment-promo-2">
                <input placeholder="Input Code Here" className="margin-left-text" onInput ={(e)=> context.setThisCode(e.target.value)}></input>
                <div className="verify-flex">
                  <button type ='button' className="btn-show margin-right-text" onClick={checkCode}>Verify</button>                
                  <span className="error-verify">SUCCESS</span>
                </div>
              </div>
            </div>
            <div className="payment-traveler box-shadow-frame margin-top-text border-radius-4 ">
              <div className="payment-traveler-1">
                <span className="margin-left-text choose-flight-text-bold">Traveler</span>
                <Link className="margin-right-text choose-flight-text-normal">Detail</Link>
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