import react from 'react'
import "./ListFlight.css";
import {appData, typeTicket} from "../data";

const ListFlight =()=>{
  return(
    <div className="list-flight-frame">
      <div className="list-flight">
        <span className="list-flight-head">See Popular Places</span>
        <div className="list-flight-choose">
          <div className="list-flight-choose-head">
            <span>Filter:</span>
            <div className="list-flight-choose-head-child">
              <span>Price</span>
              <input type="range"></input>
            </div>
            <div className="list-flight-choose-head-child">
              <span>Stops</span>
              <select>
                <option>Direct</option>
                <option>Transit</option>
                <option>One-stop</option>
              </select>
            </div>
            <div className="list-flight-choose-head-child">
              <span>Type Ticket</span>
              <select>
                <option value="business">Business</option>
                <option value="normal">Normal</option>
              </select>
            </div>
            <div className="list-flight-choose-head-child">
              <span>Plane</span>
              <select>
                <option>Airbus A900</option>
                <option>Boeing 747</option>
                <option>Airbus A800</option>
                <option>Boeing 700</option>
                <option>Boeing 600</option>
              </select>
            </div>
            <div className="list-flight-choose-head-child">
              <span>Departure</span>
              <select>
                <option>Early Flight</option>
                <option>Morning Flight</option>
                <option>Afternoon Flight</option>
                <option>Night Flight</option>
              </select>
            </div>
          </div>
          <div className="list-flight-choose-footer">
            <span>Sort: </span>
            <select>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Departure Time</option>
              <option>Arrival Time</option>
              <option>Duration</option>
            </select>
          </div>
        </div>
        <div className="list-flight-list">
          {typeTicket.map(fly => {
            return <div className="list-flight-list-row-frame" style={{ backgroundImage : `${fly.img}`,  backgroundSize :"cover"}}>
            <div className="list-flight-list-row list-flight-list-row-child">
              <div className="list-flight-list-row-child-topic">
                <span>From {fly.from}</span>
                <div className="list-flight-list-row-child-topic-icon">
                  <i class="fas fa-plane"></i>
                  <span>{fly.to} City</span>
                </div>
                <div className="list-flight-list-row-child-topic-line"></div>
              </div>
              <div className="list-flight-list-row-child-topic-show">
                <div className="list-flight-list-row-child-topic price">
                  <span>Start from</span>
                  <span>{fly.price}</span>
                </div>
                <i class="fas fa-angle-double-right"></i>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>    
    </div>
  )
}

export default ListFlight;