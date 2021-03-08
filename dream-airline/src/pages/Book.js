import React,{useContext,useEffect} from 'react';
import ContactInfor from '../components/ContactInfor'
import TravelerInfor from '../components/TravelerInfor'
import BookProcedure from '../components/BookProcedure'
import './Book.css';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import $ from 'jquery';

const Book =() =>{
  const context = useContext(FlyContext);

  useEffect(() => {
    if(context.valueTitle.length >= 1) context.setCheckInputTitle(true);                  
    if(context.valueEmail !== '') context.setCheckInputEmail(true);
    if(context.valueNumber.length >= 6) context.setCheckInputNumber(true);
    if(context.valueName.length >= 3) context.setCheckInputName(true);
    if(context.valueSurName.length >= 2) context.setCheckInputSurName(true);
    if(context.valueCountry.length >= 1) context.setCheckInputCountry(true);
    if(context.valueEmail.length >= 6) context.setCheckInputCountry(true);
    if(context.valueTitle.length < 1 ) context.setCheckInputTitle(false);
    if(context.valueEmail.length < 6) context.setCheckInputEmail(false);
    if(context.valueNumber.length < 3) context.setCheckInputNumber(false);
    if(context.valueName.length < 2) context.setCheckInputName(false);
    if(context.valueSurName.length < 1) context.setCheckInputSurName(false);
    if(context.valueCountry.length < 6) context.setCheckInputCountry(false);
  }, [context.valueTitle,context.valueName,context.valueSurName, context.valueNumber,context.valueEmail, context.valueCountry]);
  
  const toggleDetail=()=>{
    if(context.showDetail === false) context.setShowDetail(true);
    else context.setShowDetail(false);
  }
  
  return(
    <div className="book-frame margin-bottom-text">
      <div className={` ${context.showDetail === true ? 'login-overlay' :''}`}></div>
      <div className="toggle-detail" style ={{'top' : `${$(window).height() * 0.4}px`, 'left' : '20%'}}>
        <div className="tab-detail border-radius-4 box-shadow-frame">
          <div className='detail-show-head'>
            <span className="margin-left-text choose-flight-text-bold">{context.thisLanguage.detail}</span> 
            <button type="button" className="button-exit-big margin-right-text" onClick={toggleDetail}>
              <i class="fas fa-times button-exit-icon"></i>
            </button>
          </div>
          <div className="margin-top-text">
            <div className="frame">
              <div className="detail-trip-frame box-shadow-frame">
                <div className="detail-trip-head">
                  <div className="detail-trip-head-topic">
                    <span className="margin-left-text choose-flight-text-normal">{context.thisLanguage.depart}ht</span>
                    <div className="margin-left-text detail-trip-time">
                      <span className="choose-flight-text-bold">{context.dataChoice.name} ({context.dataChoice.id})</span>
                      <i class="fas fa-arrow-right"></i>
                      <span className="choose-flight-text-bold">{context.dataChoice.to} ({context.dataChoice.toId})</span>
                    </div>
                    <div className="choose-flight-change-head-detail">
                      <span className="choose-flight-change-head-detail-date margin-left-text">{context.traveler} Pax</span>
                      <span className="choose-flight-change-head-detail-traveler">{context.thisLanguage.direct}</span>
                    </div>
                  </div>
                </div>
                <div className="detail-trip">
                  <div className="detail-trip-child margin-left-text">
                    <span className="choose-flight-text-normal">VietNam Airline</span>
                    <span className="choose-flight-text-small">BL6215</span>
                    <span className="choose-flight-text-small">Airbus A320</span>
                  </div>
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
                  <div className="detail-trip-baggage">
                    <div>
                      <i class="fas fa-suitcase-rolling"></i>
                      <span className="choose-flight-text-normal">Cabin Baggage 7 kg</span>
                    </div>
                    <div>
                      <i class="fas fa-suitcase"></i>
                      <span className="choose-flight-text-normal">Baggage 23 kg</span>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book">
        <div className="book-head">
          <BookProcedure></BookProcedure>
        </div>
        <div className="book-body">
          <div className="book-body-1">
            <ContactInfor></ContactInfor>
            <TravelerInfor></TravelerInfor>
          </div>
          <div className="book-body-2">
            <div className="book-flight-detail margin-top-text box-shadow-frame margin-bottom-text">
              <div className="book-flight-head">
                <span className="choose-flight-text-big margin-left-text">{context.thisLanguage.flight}</span>
                <button onClick={toggleDetail} className="book-text-detail margin-right-text">{context.thisLanguage.detail}</button>
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
            <div className="detail-trip-price">
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
                  <span className="margin-right-text choose-flight-text-normal">0</span>
                </div>
              </div>
            </div>
          </div>
        <div className="detail-trip-total box-shadow-frame margin-bottom-10">
          <span className="choose-flight-text-bold margin-left-text">{context.thisLanguage.total}</span>
          <span className="choose-flight-text-bold margin-right-text">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
        </div>
      </div>
            <Link onClick={()=>$(window).scrollTop(0)} className="book-continue" to={()=> {
              if(context.checkInputTitle === true && context.checkInputCountry === true && context.checkInputNumber === true && context.checkInputEmail === true && context.checkInputSurName === true && context.checkInputName === true) {
                context.setStep(context.step ++);
                return '/Flight/payment';
              };
            }}>
                <button className="detail-trip-btn btn-red-white margin-top-text" onClick={()=>{
                  context.setShowErrorBookStep1(true);
                }}>{context.thisLanguage.continue}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book;