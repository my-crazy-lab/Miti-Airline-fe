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
          <button onClick={checkWay} className={`${context.typeTrip === "normal"? 'oneway': 'twoway'}`}>One Way</button>
          <button onClick={checkWay} className={`${context.typeTrip === "normal"? 'twoway': 'oneway'}`}>Round Trip</button>
        </div>
        <div className="booktrip-where">
          <form className="booktrip-where-input" onClick={clickDeparture } >
            <span>Form</span>
            <input placeholder="Select Departure City" id="departure" ref={chooseDep} onInput={inputDep}></input>
          </form>
          <div className="booktrip-where-child-1"> 
            <div className="booktrip-where-child-head">
              <span className="booktrip-where-child-topic">
                  Select Departure City 
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
            <span>To</span>
            <input placeholder="Select Destination City" id="destination" ref={chooseDes} onInput={inputDes}></input>
          </form>
          <div className="booktrip-where-child-2">
            <div className="booktrip-where-child-head">
              <span className="booktrip-where-child-topic">
                Select Destination City 
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
                    return <div className="booktrip-where-child-list-child" key={data.id} onClick={()=>chooseTripDes(data.id, data.to)}>
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
            <span className="booktrip-date-departure-span1">Departure Date</span>
            <span className="booktrip-date-departure-span2">{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
          </div>
          <div className="booktrip-date-calendar-1">
            <div className="booktrip-date-calendar-head">
              <span>Departure Date</span>
              <button type="button" onClick={clickExit}>
                <i class="fas fa-times button-exit-icon"></i>
              </button>
            </div>
            <div className="booktrip-date-calendar-body">
              <Calendar></Calendar>
              <div>1</div>
            </div>
          </div>
          <div className={`booktrip-date-return ${context.typeTrip === "return"? '' : 'pointer-none'}`} onClick={showCalendarRe}>
            <span className={`${context.typeTrip === "return"? 'booktrip-date-return-span1' : 'booktrip-date-return-hide'}`}>Return Date</span>
            <span className={`${context.typeTrip === "return"? 'booktrip-date-return-span2' : 'booktrip-date-return-hide'}`}>{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
          </div>
            <div className="booktrip-date-calendar-2" >
              <div className="booktrip-date-calendar-head">
                <span>Return Date</span>
                <button type="button" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
                </button>
              </div>
              <div className="booktrip-date-calendar-body">
                <Calendar ></Calendar>
                <div>2</div>
              </div>
            </div>
        </div>
        <div className="booktrip-traveler-frame">
          <div onClick={clickTraveler} className="booktrip-traveler">
            <span>Traveler</span>
            <span>{context.traveler} Traveler</span>
          </div>
            <div className="booktrip-traveler-child">
              <div className="booktrip-traveler-child-head">
                <span>Traveler</span>
                <button type="button" className="button-exit" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
                </button>
              </div>
              <div className="booktrip-traveler-child-list adult">
                <div className="booktrip-traveler-child-list-head">
                  <span>Adults</span>
                  <span>Age 12+</span>
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
                  <span>Childrens</span>
                  <span>Age 2-11</span>
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
                  <span>Infants</span>
                  <span>Age 0-2</span>
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
        <Link to="/SearchPlane" className="booktrip-search">
          <button className="booktrip-search-btn" onClick={clickToSearch}>Search</button>
        </Link>
      </div>
  )
}

export default BookTrip;
