import React,{useContext} from 'react';
import "./DetailTrip.css";
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const DetailTrip =() =>{
  const context = useContext(FlyContext)
  return(
    <div className="frame">
      <div className="detail-trip-frame box-shadow-frame margin-right-text">
        <div className="detail-trip-head">
          <div className="detail-trip-head-topic">
            <span className="margin-left-text choose-flight-text-normal">Selected Departure Flight</span>
            <div className="margin-left-text detail-trip-time">
              <span className="choose-flight-text-bold">{context.dataChoice.name} ({context.dataChoice.id})</span>
              <i class="fas fa-arrow-right"></i>
              <span className="choose-flight-text-bold">{context.dataChoice.to} ({context.dataChoice.toId})</span>
            </div>
            <div className="choose-flight-change-head-detail">
              <span className="choose-flight-change-head-detail-date margin-left-text">{context.traveler} Pax</span>
              <span className="choose-flight-change-head-detail-traveler">Direct</span>
            </div>
          </div>
          <Link>
            <button type="button" className="margin-right-text btn-red-white">Change Flight</button>        
          </Link>
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
          <div>
            <div className="choose-flight-list-child-detail-child">
              <span className="choose-flight-text-big">{context.dataChoice.departureTime}</span>
              <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
            </div>
            <div>
              <i class="far fa-clock"></i>
              <span className="choose-flight-text-small">{Math.floor(context.dataChoice.flightTime)}h {(context.dataChoice.flightTime - Math.floor(context.dataChoice.flightTime)) * 60}m</span>
            </div>
            <div className="detail-trip-child">
              <span className="choose-flight-text-big">{context.dataChoice.destinationTime}</span>
              <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
            </div>
          </div>
          <div>
            <div className="detail-trip-child">
              <span className="choose-flight-text-normal">{context.dataChoice.name} ({context.dataChoice.id})</span>
              <span className="choose-flight-text-blur">{context.dataChoice.airport}</span>
            </div>
            <div className="detail-trip-child">
              <span className="choose-flight-text-normal">{context.dataChoice.to} ({context.dataChoice.toId})</span>
              <span className="choose-flight-text-blur">{context.dataChoice.toAirline}</span>
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
      <div className="detail-trip-price">
        <div className="detail-trip-price-head box-shadow-frame ">
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
            <span className="detail-trip-text-small-bold margin-right-text">{context.dataChoice.currency} {context.dataChoice.price * context.traveler}</span>
          </div>
        </div>
        <div className="detail-trip-total box-shadow-frame ">
          <span className="choose-flight-text-bold margin-left-text">Total Price</span>
          <span className="choose-flight-text-bold margin-right-text">{context.dataChoice.currency} {context.dataChoice.price * context.traveler}</span>
        </div>
        <Link to="/Flight/book">
          <button type="button" className="btn-red-white detail-trip-btn">Continue Booking</button>
        </Link>
      </div>
    </div>
  )
}

export default DetailTrip;