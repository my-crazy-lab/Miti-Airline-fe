import React, {useState , useEffect, useRef, useContext} from 'react';
import "./BookTrip.css";
import $ from 'jquery';
import Calendar from './Calendar';
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const BookTrip =()=>{
  const context = useContext(FlyContext)

  const chooseDep = useRef();
  const chooseDes =useRef();

  useEffect(() => {
    context.setTraveler(context.adult + context.child + context.infant);
  },[context.adult , context.child , context.infant]);
  const checkWay =()=>{
    if(context.typeTrip === "normal"){
      context.setTypeTrip("return");
    }
    else {
      context.setTypeTrip("normal");
    }
  } 
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
  const overflow =()=>{
    $('.booktrip-where-child-1').css('display','none');
    $('.booktrip-where-child-2').css('display','none');
    $('.booktrip-traveler-child').css('display','none');
    $('.booktrip-date-calendar-1').css('display','none');
    $('.booktrip-date-calendar-2').css('display','none');
  }
  const inputDes=(e)=>{
    context.setDes(e.target.value);
  }
  const inputDep=(e)=>{
    context.setDep(e.target.value);
  }
  const clickDeparture =()=>{
    overflow();
    $('.booktrip-where-child-1').css('display','block');
  }
  const clickTraveler =()=>{
    overflow();
    $('.booktrip-traveler-child').css('display','block');
  }
  const clickDestination=()=>{
    overflow();
    $('.booktrip-where-child-2').css('display','block');
  }
  const clickExit=()=>{
    overflow();
  }
  const showCalendarDe=()=>{
    overflow();
    $('.booktrip-date-calendar-1').css('display','block');
  }
  const showCalendarRe=()=>{
    overflow();
    $('.booktrip-date-calendar-2').css('display','block');
  }
  const swapContent=()=>{
    context.setDep(context.des) ;
    context.setDes(context.dep);
    $('#departure').val(`${context.dep}`);
    $('#destination').val(`${context.des}`);
    console.log(context.des, context.dep)
  }
  const chooseTripDep=(id,name)=>{
    chooseDep.current.value  = `${name}(${id})`;
    context.setDes(`${name}(${id})`)
    context.setIdDep(id)
    overflow();
  }
  const chooseTripDes=(id,name)=>{
    chooseDes.current.value  = `${name}(${id})`;
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
  return(
      <div className="booktrip"> 
        <div className="booktrip-type">
          <button onClick={checkWay} className={`${context.typeTrip === "normal"? 'oneway': 'twoway'}`}>{context.thisLanguage.oneWay}</button>
          <button onClick={checkWay} className={`${context.typeTrip === "normal"? 'twoway': 'oneway'}`}>{context.thisLanguage.roundTrip}</button>
        </div>
        <div className="booktrip-where">
          <form className="booktrip-where-input" onClick={clickDeparture } >
            <span>{context.thisLanguage.from}</span>
            <input disabled placeholder={context.thisLanguage.selectDepartureCity} id="departure" ref={chooseDep} onInput={inputDep}></input>
          </form>
          <div className="booktrip-where-child-1"> 
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
          <button className="booktrip-where-swap" onClick={swapContent}>
            <i class="fas fa-retweet"></i>
          </button>
          <form className="booktrip-where-input" onClick={clickDestination} >
            <span>{context.thisLanguage.to}</span>
            <input disabled placeholder={context.thisLanguage.selectDestinationCity} id="destination" ref={chooseDes} onInput={inputDes}></input>
          </form>
          <div className="booktrip-where-child-2">
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
        </div>
        <div className="booktrip-date">
          <div className="booktrip-date-departure" onClick={showCalendarDe}>
            <span className="booktrip-date-departure-span1">{context.thisLanguage.departureDate}</span>
            <span className="booktrip-date-departure-span2">{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
          </div>
          <div className="booktrip-date-calendar-1">
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
          <div className={`booktrip-date-return ${context.typeTrip === "return"? '' : 'pointer-none'}`} onClick={showCalendarRe}>
            <span className={`${context.typeTrip === "return"? 'booktrip-date-return-span1' : 'booktrip-date-return-hide'}`}>{context.thisLanguage.destinationDate}</span>
            <span className={`${context.typeTrip === "return"? 'booktrip-date-return-span2' : 'booktrip-date-return-hide'}`}>{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
          </div>
            <div className="booktrip-date-calendar-2" >
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
        </div>
        <div className="booktrip-traveler-frame">
          <div onClick={clickTraveler} className="booktrip-traveler">
            <span>{context.thisLanguage.traveler}</span>
            <span>{context.traveler} {context.thisLanguage.traveler}</span>
          </div>
            <div className="booktrip-traveler-child">
              <div className="booktrip-traveler-child-head">
                <span>{context.thisLanguage.traveler}</span>
                <button type="button" className="button-exit" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
                </button>
              </div>
              <div className="booktrip-traveler-child-list adult">
                <div className="booktrip-traveler-child-list-head">
                  <span>{context.thisLanguage.adult}</span>
                  <span>{context.thisLanguage.age} 12+</span>
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
                  <span>{context.thisLanguage.children}</span>
                  <span>{context.thisLanguage.age} 2-11</span>
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
                  <span>{context.thisLanguage.infant}</span>
                  <span>{context.thisLanguage.age} 0-2</span>
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
        </div>
        <Link to={`${context.des !== '' && context.chooseTrip === true && context.dep!== '' && context.des !== context.dep ? '/SearchPlane' : '/Flight'}`} className="booktrip-search">
          <button className="booktrip-search-btn" onClick={clickToSearch}>{context.thisLanguage.search}</button>
        </Link>
        <div className="booktrip-error">
          <div className={`${context.des === context.dep && context.des !== '' && context.dep !== '' ? 'booktrip-error-c' : 'hide-error'}`}>
            <i class="fas fa-exclamation-triangle"></i>
            <span className="booktrip-error-content">Departure and arrival city must be different</span>
          </div>
          <div className={`${context.chooseTrip === false && context.des !== '' && context.dep !== ''? 'booktrip-error-c' : 'hide-error'}`}>
            <i class="fas fa-exclamation-triangle"></i>
            <span className="booktrip-error-content">Sorry.This trip is cancel , please choose different trip.Thank you</span>
          </div>
        </div>
      </div>
  )
}

export default BookTrip;
