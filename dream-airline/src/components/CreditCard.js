import React,{useContext} from 'react';
import BookProcedure from '../components/BookProcedure'
import './CreditCard.css';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import $ from 'jquery';

const CreditCard =()=>{
  const context = useContext(FlyContext);
  return(
    <div className="payment-frame margin-bottom-text">
      <div className={`${context.errorPay === true ? 'login-overlay' :''}`}></div>
      <div className={`${context.errorPay === true ? 'error-pay' : 'hide-error'}`} style ={{'top' : `${$(window).height() * 0.8}px`, 'left' : '30%'}}>
        <div className="error-pay-flex">
          <span className="choose-flight-text-bold">No payment received. <br></br>Please make the payment first.</span>
          <button onClick={()=> context.setErrorPay(false)} className="btn-ok">OK</button>
        </div>
        <img src="https://cdn.airpaz.com/nuxt/img/help.2ab29c0.svg"></img>
        <button onClick={()=> context.setErrorPay(false)} className="exit-error-pay"><i class="fas fa-times"></i></button>
      </div>
      <div className="payment">
        <div className="payment-head">
          <BookProcedure></BookProcedure>
        </div>
        <div className="payment-body">
          <div className="payment-body-1">
            <Link to="/Flight/payment" className="back-to-payment">
              <i class="fas fa-chevron-left "></i>
              <span ref={context.refErrorPay} className="text-back-payment">Select Other Method</span>
            </Link>
            <div className="credit-card box-shadow-frame border-radius-4">
              <div className="credit-card-head">
                <span className="choose-flight-text-big margin-left-text">Credit Card</span>
              </div>
              <div className="credit-flex-row credit-child">
                <img src="https://cdn2.airpaz.com/rel-0261/themes/img/payment/new-pay/GL/visa.png"></img>
                <img src="https://cdn2.airpaz.com/rel-0261/themes/img/payment/new-pay/GL/mastercard.png"></img>
              </div>
              <div className="credit-flex credit-child margin-left-text">
                <label className="traveler-infor-child-title">Card Number</label>
                <input placeholder="•••• •••• •••• ••••"></input>
              </div>
              <div className="credit-flex-row credit-child margin-left-text">
                <div className="credit-flex">
                  <label className="traveler-infor-child-title">Valid Until</label>
                  <input placeholder="MM/YYYY"></input>
                </div>
                <div className="credit-flex">
                  <label className="traveler-infor-child-title">3 digit CVV Number</label>
                  <input placeholder="3 digit CVV Number"></input>
                </div>
              </div>
              <div className="credit-flex credit-child">
                <label className="traveler-infor-child-title margin-left-text">Name on Card</label>
                <input placeholder="Card Holder Name" className="margin-left-text"></input>
              </div>
              <div className="credit-flex credit-child ">
                <label className="traveler-infor-child-title margin-left-text">Issuing Country</label>
                <input placeholder="United States" className="margin-left-text"></input>
              </div>
              <div className="credit-price-frame">
                <div className="credit-price">
                  <div className="credit-price-1">
                    <div className="credit-price-flex-row">
                      <span className="choose-flight-text-normal">Price</span>
                      <span className="choose-flight-text-blur-big">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
                    </div>
                    <div className="credit-price-flex-row">
                      <span className="choose-flight-text-normal">Processing Fee</span>
                      <span className="choose-flight-text-blur-big">{context.symbol} 0</span>
                    </div>
                  </div>
                  <div className="credit-price-2">
                    <span className="choose-flight-text-normal">Total Price</span>
                    <span className="choose-flight-text-red">{context.symbol} {(((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler)}</span>
                  </div>
                </div>
              </div>
              <div className="credit-pay">
                <div className="credit-pay-1 margin-left-text">
                  <span className="choose-flight-text-normal">By clicking the pay button, you have agreed to Terms & Conditions of Airpaz and Vietjet Air.</span>
                </div>
                <div className="credit-pay-2">
                  <img className="credit-img" src="https://cdn.airpaz.com/nuxt/img/geotrust.48a6649.svg"></img>
                  <button onClick={()=>{
                    context.setErrorPay(true);
                    context.refErrorPay.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }} className="btn-pay margin-right-text margin-left-text">Pay</button>
                </div>
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
                <input placeholder="Input Code Here" className="margin-left-text"></input>
                <button className="btn-show margin-right-text">Verify</button>
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

export default CreditCard;