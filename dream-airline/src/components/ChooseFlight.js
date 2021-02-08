import React, {useContext} from 'react'
import "./ChooseFlight.css"
import {FlyContext} from '../context';
import OptionFlight from '../components/OptionFlight'

const ChooseFlight = ()=>{
  const context = useContext(FlyContext);
  return(
    <div className="choose-flight-frame">
    <div className="choose-flight-choice-frame">
      <div className="choose-flight">
        <div className="choose-flight-choice">
          <i class="fas fa-plane-departure"></i>
          <div className="choose-flight-trip">
            <span className="choose-flight-trip-head">
              Select Departure Flight
            </span>
            <div className="choose-flight-trip-detail">
              <span className="choose-flight-trip-detail-trip">HUI - SGN </span>
              <span className="choose-flight-trip-detail-date">Tue, 09 Feb</span>
            </div>
          </div>
        </div>
        <button type="button" className="choose-flight-btn">Change Search</button>
      </div>
    </div>
      <div className="choose-flight-this">
        <div className="choose-flight-change">
          <div className="choose-flight-change-head">
            <div>
              <span className="choose-flight-change-head-name">
                Departure flight to Ho Chi Minh City
              </span>
              <div className="choose-flight-change-head-detail">
                <span className="choose-flight-change-head-detail-date">Tue, 9 February 2021</span>
                <span className="choose-flight-change-head-detail-traveler"> 3 Traveler</span>
              </div>
            </div>
            <button className="choose-flight-change-head-btn">Change Date</button>
          </div>
          <div className="choose-flight-change-option">
            <OptionFlight></OptionFlight>
          </div>
        </div>
        <div className="choose-flight-list">
          <div className="choose-flight-list-child">
            <div className="choose-flight-list-child-announce">
              <div className="choose-flight-list-child-announce-list">
                <span>VietNam Airline</span>
                <div className="choose-flight-list-child-time">
                  <span className="choose-flight-list-child-time-direct">08:00</span>
                  <span className="choose-flight-list-child-time-id">HUI</span>
                </div>
                <i class="fas fa-arrow-right"></i>
                <div className="choose-flight-list-child-time">
                  <span className="choose-flight-list-child-time-direct">010:00</span>
                  <span className="choose-flight-list-child-time-id">SGN</span>
                </div>
                <div className="choose-flight-list-child-time">
                  <span className="choose-flight-list-child-time-direct">1h 25m</span>
                  <span className="choose-flight-list-child-time-text-direct">Direct</span>
                </div>
                <div className="choose-flight-list-child-baggage">
                  <i class="fas fa-suitcase-rolling"></i>
                  <i class="fas fa-suitcase"></i>
                  <span className="choose-flight-list-child-time-id"> 24 kg</span>
                </div>
                <div className="choose-flight-list-child-price">
                  <span  className="choose-flight-list-child-time-direct">€ 19.08</span>
                  <span className="choose-flight-list-child-time-text-direct">/pax</span>
                </div>
              </div>
              <div className="choose-flight-list-child-announce-show">
                <button type="button" className="choose-flight-list-child-announce-btn">Choose Flight</button>
                <i class="fas fa-chevron-up"></i>
              </div>
            </div>
            <div className="choose-flight-list-child-detail">
              <div className="choose-flight-list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseFlight