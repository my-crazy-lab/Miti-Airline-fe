import React, {useContext} from 'react'
import "./ChooseFlight.css"
import {FlyContext, resetScroll} from '../context';
import OptionFlight from '../components/OptionFlight'
import {Link} from 'react-router-dom'

const ChooseFlight = ()=>{
  const context = useContext(FlyContext);
  const chooseTrip=(key)=>{
    resetScroll()
    context.setDataChoice(context.appData.flyData.find(data => data.key === key))
  }
  const funcShowAni=(id,to)=>{
    if(context.aniShowTrip === true) context.setAniShowTrip(false)
    else context.setAniShowTrip(true)
    context.setKeyAniShowTrip(`${id}${to}`);
  }
  return(
    <div className="choose-flight-frame">
    <div className="choose-flight-choice-frame">
      <div className="choose-flight">
        <div className="choose-flight-choice">
          <i class="fas fa-plane-departure"></i>
          <div className="choose-flight-trip">
            <span className="choose-flight-trip-head">
              {context.thisLanguage.selectDepartureCity}
            </span>
            <div className="choose-flight-trip-detail">
              <span className="choose-flight-trip-detail-trip">HUI - SGN </span>
              <span className="choose-flight-trip-detail-date">Tue, 09 Feb</span>
            </div>
          </div>
        </div>
        <button onClick={()=>{
          if(context.showChangeSearch === true) context.setShowChangeSearch(false)
          else context.setShowChangeSearch(true)
        }} type="button" className="btn-red-white">{context.thisLanguage.changeSearch}</button>
      </div>
      <div className={`ani-hide-change-search change-search ${context.showChangeSearch === true ? 'ani-show-change-search' : ''}`}>
        <div className="change-search-retweet"><i class="fas fa-retweet"></i></div>
        <div className="c-search-f margin-top-text">
          <div className="c-search-f-c">
            <input id="1way" type="checkbox"></input>
            <label for="1way">One Way</label>
          </div>
          <div className="c-search-f-c">
            <input id="2way" type="checkbox"></input>
            <label for="2way">Round Trip</label>
          </div>
        </div>
        <div className="c-search-f b-trip border-radius-4 margin-top-text">
          <div className="c-search-f-column from">
            <span className="choose-flight-text-blur">From</span>
            <span className="margin-4 choose-flight-text-bold">HoChiMinh</span>
          </div>
          <div className="c-search-f-column to">
            <span className="choose-flight-text-blur">To</span>
            <span className="margin-4 choose-flight-text-bold">Hanoi</span>
          </div>
          <div className="c-search-f-column dep">
            <span className="choose-flight-text-blur">Departure Date</span>
            <span className="margin-4 choose-flight-text-bold">Sat, 3 April 2021</span>
          </div>
          <div className="c-search-f-column re">
            <span className="choose-flight-text-blur">Return Date</span>
            <span className="margin-4 choose-flight-text-bold">Sat, 3 April 2021</span>
          </div>
          <div className="c-search-f-column last-c-s">
            <span className="choose-flight-text-blur">Traveler</span>
            <span className="margin-4 choose-flight-text-bold">1 Traveler</span>
          </div>
          <button className="c-search-btn"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </div>
      <div className="choose-flight-this">
        <div className="choose-flight-list margin-top-text">
          { context.chooseTrip  === true ? (<div className="choose-flight-list-child">
          <div className="choose-flight-list-child-announce">
          <div className="choose-flight-list-child-announce-list">
            <span className="choose-flight-text-normal margin-left-text ">VietNam Airline</span>
            <div className="choose-flight-list-child-time">
              <span className="choose-flight-text-bold">{context.trip.departureTime}</span>
              <span className="choose-flight-text-normal">{context.trip.id}</span>
            </div>
            <i class="fas fa-arrow-right"></i>
            <div className="choose-flight-list-child-time">
              <span className="choose-flight-text-bold">{context.trip.destinationTime}</span>
              <span className="choose-flight-text-normal">{context.trip.to}</span>
            </div>
            <div className="choose-flight-list-child-time">
              <span className="choose-flight-text-bold">{Math.floor(context.trip.flightTime)}h {context.trip.flightTime - Math.floor(context.trip.flightTime)}m</span>
              <span className="choose-flight-text-blur">Direct</span>
            </div>
            <div className="choose-flight-list-child-baggage">
              <i class="fas fa-suitcase"></i>
              <span className="choose-flight-text-normal">24 kg</span>
            </div>
            <div className="choose-flight-list-child-price">
              <span  className="choose-flight-text-bold">{context.symbol} {(context.trip.price * context.convert).toFixed(2)}</span>
              <span className="choose-flight-text-blur">/{context.thisLanguage.pax}</span>
            </div>
            <span className="choose-flight-list-child-price choose-flight-text-blur">{context.trip.typePrice}</span>
          </div>
          <div className="choose-flight-list-child-announce-show">
            <Link to="/Flight/confirm">
              <button type="button" className="btn-red-white" onClick={() => chooseTrip(context.trip.key)}>{context.thisLanguage.chooseFlight}</button>
            </Link>
            <i class="fas fa-chevron-up"></i>
          </div>
        </div>
        <div className="choose-flight-list-child-detail">
          <div className="choose-flight-list-child-detail-child margin-left-text ">
            <span className="choose-flight-text-normal">VietNam Airline</span>
            <span className="choose-flight-text-small">BL6215</span>
            <span className="choose-flight-text-small">Airbus A320</span>
          </div>
          <div className="graph-go">
                  <div className="point-start"></div>
                  <div className="line-go"></div>
                  <div className="point-end"></div>
                </div>
          <div className="choose-flight-flex">
            <div className="choose-flight-list-child-detail-child">
              <span className="choose-flight-text-big margin-top-text">{context.trip.departureTime}</span>
              <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
            </div>
            <div>
              <i class="far fa-clock"></i>
              <span className="choose-flight-text-small">{Math.floor(context.trip.flightTime)}h {context.trip.flightTime - Math.floor(context.trip.flightTime)}m</span>
            </div>
            <div className="choose-flight-list-child-detail-child">
              <span className="choose-flight-text-big">{context.trip.destinationTime}</span>
              <span className="choose-flight-text-small margin-bottom-text">{context.day} {context.nameMonth} {context.yearNow}</span>
            </div>
          </div>
          <div className="choose-flight-flex">
            <div className="choose-flight-list-child-detail-child">
              <span className="choose-flight-text-normal margin-top-text">{context.trip.name} ({context.trip.id})</span>
              <span className="choose-flight-text-blur">{context.trip.airport}</span>
            </div>
            <div className="choose-flight-list-child-detail-child">
              <span className="choose-flight-text-normal">{context.trip.to} ({context.trip.toId})</span>
              <span className="choose-flight-text-blur margin-bottom-text">{context.trip.toAirline}</span>
            </div>
          </div>
          <div className="choose-flight-list-child-detail-child choose-flight-baggage">
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
      </div>):(
        <div>This Trip is cancel</div>
      )}
        </div>

        <div className="choose-flight-change">
          <div className="choose-flight-change-head">
            <div>
              <span className="choose-flight-change-head-name choose-flight-text-big ">
                {context.thisLanguage.departureTo} {context.trip.to}
              </span>
              <div className="choose-flight-change-head-detail">
                <span className="choose-flight-change-head-detail-date margin-left-text">{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
                <span className="choose-flight-change-head-detail-traveler"> {context.traveler} {context.thisLanguage.traveler}</span>
              </div>
            </div>
            <button className="btn-red-white margin-right-text">{context.thisLanguage.changeDate}</button>
          </div>
          <div className="choose-flight-change-option">
            <OptionFlight></OptionFlight>
          </div>
        </div>

        <span className="choose-flight-text-biggest">{context.thisLanguage.chooseDifferentTrip}</span>
        <div className="choose-flight-list">
          { context.listData.map(data => { 
            return <div className="choose-flight-list-child">
              <div className="choose-flight-list-child-announce">
                <div className="choose-flight-list-child-announce-list">
                  <span className="choose-flight-text-normal margin-left-text ">VietNam Airline</span>
                  <div className="choose-flight-list-child-time">
                    <span className="choose-flight-text-bold">{data.departureTime}</span>
                    <span className="choose-flight-text-normal">{data.id}</span>
                  </div>
                  <i class="fas fa-arrow-right"></i>
                  <div className="choose-flight-list-child-time">
                    <span className="choose-flight-text-bold">{data.destinationTime}</span>
                    <span className="choose-flight-text-normal">{data.to}</span>
                  </div>
                  <div className="choose-flight-list-child-time">
                    <span className="choose-flight-text-bold">{Math.floor(data.flightTime)}h {(data.flightTime - Math.floor(data.flightTime)) * 60}m</span>
                    <span className="choose-flight-text-blur">Direct</span>
                  </div>
                  <div className="choose-flight-list-child-baggage">
                    <i class="fas fa-suitcase"></i>
                    <span className="choose-flight-text-normal">24 kg</span>
                  </div>
                  <div className="choose-flight-list-child-price">
                    <span  className="choose-flight-text-bold">{context.symbol} {(data.price * context.convert).toFixed(2)}</span>
                    <span className="choose-flight-text-blur">/{context.thisLanguage.pax}</span>
                  </div>
                  <span className="choose-flight-list-child-price choose-flight-text-blur">{data.typePrice}</span>
                </div>
                <div className="choose-flight-list-child-announce-show">
                  <Link to="/Flight/confirm">
                    <button type="button" className="btn-red-white" onClick={() => chooseTrip(data.key)}>{context.thisLanguage.chooseFlight}</button>                  
                  </Link>
                  <i class={`fas fa-chevron-up ani-hide-detail-trip ${context.aniShowTrip === true && context.keyAniShowTrip === `${data.id}${data.to}`? 'ani-show-detail-trip' : ''}`} onClick={()=> funcShowAni(data.id, data.to,)}></i>
                </div>
              </div>
              <div className={`choose-flight-list-child-detail ani-hide-detail-trip-text ${context.aniShowTrip === true && context.keyAniShowTrip === `${data.id}${data.to}` ? 'ani-show-detail-trip-text' : ''}`}>
                <div className="choose-flight-list-child-detail-child margin-left-text ">
                  <span className="choose-flight-text-normal ">VietNam Airline</span>
                  <span className="choose-flight-text-small">BL6215</span>
                  <span className="choose-flight-text-small">Airbus A320</span>
                </div>
                <div className="graph-go">
                  <div className="point-start"></div>
                  <div className="line-go"></div>
                  <div className="point-end"></div>
                </div>
                <div className="choose-flight-flex">
                  <div className="choose-flight-list-child-detail-child">
                    <span className="choose-flight-text-big margin-top-text">{data.departureTime}</span>
                    <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
                  </div>
                  <div>
                    <i class="far fa-clock"></i>
                    <span className="choose-flight-text-small">{Math.floor(data.flightTime)}h {(data.flightTime - Math.floor(data.flightTime)) * 60}m</span>
                  </div>
                  <div className="choose-flight-list-child-detail-child">
                    <span className="choose-flight-text-big">{data.destinationTime}</span>
                    <span className="choose-flight-text-small margin-bottom-text">{context.day} {context.nameMonth} {context.yearNow}</span>
                  </div>
                </div>
                <div className="choose-flight-flex">
                  <div className="choose-flight-list-child-detail-child">
                    <span className="choose-flight-text-normal margin-top-text">{data.name} ({data.id})</span>
                    <span className="choose-flight-text-blur">{data.airport}</span>
                  </div>
                  <div className="choose-flight-list-child-detail-child">
                    <span className="choose-flight-text-normal">{data.to} ({data.toId})</span>
                    <span className="choose-flight-text-blur margin-bottom-text">{data.toAirline}</span>
                  </div>
                </div>
                <div className="choose-flight-baggage">
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
          })}
        </div>
      </div>
    </div>
  )
}

export default ChooseFlight