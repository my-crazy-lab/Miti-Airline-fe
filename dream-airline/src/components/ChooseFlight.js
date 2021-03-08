import React, {useContext, useEffect} from 'react'
import "./ChooseFlight.css"
import {FlyContext, resetScroll} from '../context';
import OptionFlight from '../components/OptionFlight'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import Calendar from '../components/Calendar';

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
  const overflow =()=>{
    $('.choose-flight-where-child-1').css('display','none');
    $('.choose-flight-where-child-2').css('display','none');
    $('.choose-flight-traveler-child').css('display','none');
    $('.choose-flight-date-calendar-1').css('display','none');
    $('.choose-flight-date-calendar-2').css('display','none');
  }
  const clickDeparture =()=>{
    overflow();
    $('.choose-flight-where-child-1').css('display','block');
  }
  const clickDestination=()=>{
    overflow();
    $('.choose-flight-where-child-2').css('display','block');
  }
  const clickExit=()=>{
    overflow();
  }
  useEffect(() => {
    context.setTraveler(context.adult + context.child + context.infant);
  },[context.adult , context.child , context.infant]);
  const minusAdult =()=>{
    context.setAdult(context.adult - 1);
  }
  const minusChildren =()=>{
    context.setChild(context.child - 1);
  }
  const minusInfant=()=>{
    context.setInfant(context.infant - 1);
  }
  const plusInfant=()=>{
    context.setInfant(context.infant + 1);
  }
  const plusChildren=()=>{
    context.setChild(context.child + 1);
  }
  const plusAdult=()=>{
    context.setAdult(context.adult + 1);
  }
  const clickTraveler =()=>{
    overflow();
    $('.choose-flight-traveler-child').css('display','block');
  }
  const showCalendarDe=()=>{
    overflow();
    $('.choose-flight-date-calendar-1').css('display','block');
  }
  const showCalendarRe=()=>{
    if(context.typeTrip === 'return'){
      overflow();
      $('.choose-flight-date-calendar-2').css('display','block');
    }
  }
  const chooseTripDep=(id,name)=>{
    context.setDes(`${name}(${id})`)
    context.setIdDep(id)
    overflow();
  }
  const chooseTripDes=(id,name)=>{
    context.setDep(`${name}(${id})`);
    context.setIdDes(id)
    overflow();
  }
  const clickToSearch=()=>{
    if(context.appData.flyData.filter(data => data.id === context.idDep && data.toId ===context.idDes).length > 0 ) {
      context.setChooseTrip(true)
      context.setTrip(context.appData.flyData.find(data => data.id === context.idDep && data.toId ===context.idDes))
    }
    else context.setChooseTrip(false)
    }
    console.log(context.chooseTrip)
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
      <div className="choose-flight-where-child-1"> 
            <div className="booktrip-where-child-head">
              <span className="booktrip-where-child-topic">
                {context.thisLanguage.selectDepartureCity}
              </span>
              <button type="button" onClick={clickExit} className="button-exit" >
                  <i class="fas fa-times button-exit-icon"></i>
              </button>
            </div> 
            <div className="booktrip-where-child-body">
              {context.appData.allTrip.map(dataAll => {
              return <div className="booktrip-where-child">
              <div className="booktrip-where-child-country">
              <span className="booktrip-where-child-country-text">{dataAll.countryTrip}</span>
            </div>
              <div className="booktrip-where-child-list">
                {dataAll.detailTrip.map(data => {
                  return <div className="booktrip-where-child-list-child" key={data.id} onClick={()=>chooseTripDep(data.id, data.name)}>
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>{data.name}</span>
                    <span>{data.airport}</span>
                  </div>
                  <span className="booktrip-where-child-list-child-id">{data.id}</span>
                </div>
                })}
              </div>
            </div>
              })} 
            </div>
            </div>
        <div className="choose-flight-where-child-2">
            <div className="booktrip-where-child-head">
              <span className="booktrip-where-child-topic">
                {context.thisLanguage.selectDestinationCity}
              </span>
              <button type="button" onClick={clickExit} className="button-exit" >
                  <i class="fas fa-times button-exit-icon"></i>
              </button>
            </div>
            <div className="booktrip-where-child-body">
              {context.appData.toCountry.map(data => {
                return <div className="booktrip-where-child" >
                <div className="booktrip-where-child-country">
                  <span className="booktrip-where-child-country-text">{data.to}</span>
                </div>
                <div className="booktrip-where-child-list">
                    <div className="booktrip-where-child-list-child" key={data.id} onClick={()=>chooseTripDes(data.id, data.to)}>
                    <i class="fas fa-plane-departure"></i>
                    <div>
                      <span>{data.to}</span>
                      <span>{data.toAirline}</span>
                    </div>
                    <span className="booktrip-where-child-list-child-id">{data.id}</span>
                  </div>
                </div>
              </div>
              })}
            </div>
      </div>
      <div className="choose-flight-traveler-child">
              <div className="booktrip-traveler-child-head">
                <span className="margin-left-text">{context.thisLanguage.traveler}</span>
                <button type="button" className="button-exit" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
                </button>
              </div>
              <div className="booktrip-traveler-child-list adult">
                <div className="booktrip-traveler-child-list-head">
                  <span className="margin-left-text">{context.thisLanguage.adult}</span>
                  <span className="margin-left-text">{context.thisLanguage.age} 12+</span>
                </div>
                <div className="booktrip-traveler-child-list-count">
                  <button  onClick={minusAdult} type="button" className={`adult adultminus ${context.adult > 1? 'booktrip-minus-show': 'booktrip-minus-hide'}`}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p id="adult">{context.adult}</p>
                  <button onClick={plusAdult} type="button" className={`adult ${context.traveler > 5 ? 'booktrip-minus-hide': 'booktrip-minus-show'} `}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="booktrip-traveler-child-list children">
                <div className="booktrip-traveler-child-list-head">
                  <span className="margin-left-text">{context.thisLanguage.children}</span>
                  <span className="margin-left-text">{context.thisLanguage.age} 2-11</span>
                </div>
                <div className="booktrip-traveler-child-list-count">
                  <button onClick={minusChildren} type="button" className={`children ${context.child > 0? 'booktrip-minus-show': 'booktrip-minus-hide'}`}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p id="children">{context.child}</p>
                  <button onClick={plusChildren} type="button" className={`children ${context.traveler > 5 ? 'booktrip-minus-hide': 'booktrip-minus-show'} `}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="booktrip-traveler-child-list infant">
                <div className="booktrip-traveler-child-list-head">
                  <span className="margin-left-text">{context.thisLanguage.infant}</span>
                  <span className="margin-left-text">{context.thisLanguage.age} 0-2</span>
                </div>
                <div className="booktrip-traveler-child-list-count">
                  <button onClick={minusInfant} type="button" className={`infant ${context.infant > 0 ? 'booktrip-minus-show': 'booktrip-minus-hide'} `}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p id="infant">{context.infant}</p>
                  <button onClick={plusInfant} type="button" className={`infant ${context.traveler > 5 || context.infant > 1 ? 'booktrip-minus-hide': 'booktrip-minus-show'} `}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
      </div>
      <div className="choose-flight-date-calendar-1">
            <div className="booktrip-date-calendar-head">
              <span>{context.thisLanguage.departureDate}</span>
              <button type="button" onClick={clickExit}>
                <i class="fas fa-times button-exit-icon"></i>
              </button>
            </div>
            <div className="booktrip-date-calendar-body">
              <Calendar></Calendar>
            </div>
      </div>
      <div className="choose-flight-date-calendar-2" >
              <div className="booktrip-date-calendar-head">
                <span>{context.thisLanguage.destinationDate}</span>
                <button type="button" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
                </button>
              </div>
              <div className="booktrip-date-calendar-body">
                <Calendar ></Calendar>
              </div>
      </div>
      <div className={`ani-hide-change-search change-search ${context.showChangeSearch === true ? 'ani-show-change-search' : ''}`}>
        <div className="change-search-retweet" onClick={()=>{
          context.setDes(context.dep)
          context.setDep(context.des)
          context.setIdDes(context.idDep)
          context.setIdDep(context.idDes)
        }}><i class="fas fa-retweet"></i></div>
        <div className="c-search-f margin-top-text">
          <div className="c-search-f-c">
            <input id="1way" type="radio" name ='radio' onInput={(e)=> {
              if(e.target.value === 'on') context.setTypeTrip('normal')
              console.log(e.target.value)
            }}></input>
            <label for="1way">One Way</label>
          </div>
          <div className="c-search-f-c">
            <input id="2way" type="radio" name = "radio" onInput={(e)=> {
              if(e.target.value === 'on') context.setTypeTrip('return')
              console.log(context.typeTrip)
              console.log(typeof e.target.value)
            }}></input>
            <label for="2way">Round Trip</label>
          </div>
        </div>
        <div className="c-search-f b-trip border-radius-4 margin-top-text">
          <div className="c-search-f-column from" onClick={clickDeparture }>
            <span className="choose-flight-text-blur">From</span>
            <span className="margin-4 choose-flight-text-bold">{context.des}</span>
          </div>
          <div className="c-search-f-column to" onClick={clickDestination}>
            <span className="choose-flight-text-blur">To</span>
            <span className="margin-4 choose-flight-text-bold">{context.dep}</span>
          </div>
          <div className="c-search-f-column dep" onClick={showCalendarDe}>
            <span className="choose-flight-text-blur">Departure Date</span>
            <span className="margin-4 choose-flight-text-bold">{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
          </div>
          <div className={`c-search-f-column re`} onClick={showCalendarRe}>
            <span className={`choose-flight-text-blur ${context.typeTrip === 'normal' ? 'hide' : ''}`}>Return Date</span>
            <span className={`margin-4 choose-flight-text-bold ${context.typeTrip === 'normal' ? 'hide' : ''}`}>{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
          </div>
          <div className="c-search-f-column last-c-s" onClick={clickTraveler}>
            <span className="choose-flight-text-blur">Traveler</span>
            <span className="margin-4 choose-flight-text-bold">{context.traveler} traveler</span>
          </div>
          <button type="button" className="c-search-btn" onClick={(clickToSearch)}><i class="fas fa-search"></i></button>
          <div className="choose-flight-s-error">
          <div className={`${context.des === context.dep && context.des !== '' && context.dep !== '' ? 'choose-flight-error-c' : 'hide-error'}`}>
            <i class="fas fa-exclamation-triangle"></i>
            <span className="choose-flight-error-content">Departure and arrival city must be different</span>
          </div>
        </div>
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
              <span className="choose-flight-text-normal">{context.trip.toId}</span>
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
            <i class={`fas fa-chevron-down ani-hide-detail-trip ${context.aniShowTrip === true && context.keyAniShowTrip === `${context.trip.id}${context.trip.to}`? 'ani-show-detail-trip' : ''}`} onClick={()=> funcShowAni(context.trip.id, context.trip.to,)}></i>
          </div>
        </div>
        <div className={`choose-flight-list-child-detail ani-hide-detail-trip ${context.aniShowTrip === true && context.keyAniShowTrip === `${context.trip.id}${context.trip.to}` ? 'ani-show-detail-trip-text' : ''}`}>
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
        <div className='error-cancel border-radius-4 box-shadow-frame'>This Trip is cancel!</div>
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
                    <span className="choose-flight-text-normal">{data.toId}</span>
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
                  <i class={`fas fa-chevron-down ani-hide-detail-trip ${context.aniShowTrip === true && context.keyAniShowTrip === `${data.id}${data.to}`? 'ani-show-detail-trip' : ''}`} onClick={()=> funcShowAni(data.id, data.to,)}></i>
                </div>
              </div>
              <div className={`choose-flight-list-child-detail ani-hide-detail-trip ${context.aniShowTrip === true && context.keyAniShowTrip === `${data.id}${data.to}` ? 'ani-show-detail-trip-text' : ''}`}>
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