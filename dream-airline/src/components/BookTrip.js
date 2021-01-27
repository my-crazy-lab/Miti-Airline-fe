import react, {useState , useEffect} from 'react';
import "./BookTrip.css";
import $ from 'jquery';
import Calendar from './Calendar';

const BookTrip =()=>{
  const [des, setDes] = useState('');
  const [dep, setDep] = useState('');
  const [adult , setAdult] = useState(1);
  const [child , setChild] = useState(0);
  const [infant , setInfant] = useState(0);
  const [traveler , setTraveler] = useState(1);
  const [checkway, setCheckway] = useState(true);
  useEffect(() => {
    setTraveler(adult + child + infant);
  },[adult,child,infant]);
  const checkWay =()=>{
    if(checkway === true){
      setCheckway(false);
    }
    else {
      setCheckway(true);
    }
    console.log(checkway)
  }
  const minusAdult =()=>{
    setAdult(adult - 1);
  }
  const minusChildren =()=>{
    setChild(child - 1);
  }
  const minusInfant=()=>{
    setInfant(infant - 1);
  }
  const plusInfant=()=>{
    setInfant(infant + 1);
  }
  const plusChildren=()=>{
    setChild(child + 1);
  }
  const plusAdult=()=>{
    setAdult(adult + 1);
  }
  const overflow =()=>{
    $('.booktrip-where-child-1').css('display','none');
    $('.booktrip-where-child-2').css('display','none');
    $('.booktrip-traveler-child').css('display','none');
    $('.booktrip-date-calendar-1').css('display','none');
    $('.booktrip-date-calendar-2').css('display','none');
  }
  const inputDes=()=>{
    setDes($('#destination').val());
  }
  const inputDep=()=>{
    setDep($('#departure').val());
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
    setDep(des) ;
    setDes(dep);
    $('#departure').val(`${dep}`);
    $('#destination').val(`${des}`);
  }
  return(
      <div className="booktrip">
        <div className="booktrip-type">
          <button onClick={checkWay} className={`${checkway === true? 'oneway': 'twoway'}`}>One Way</button>
          <button onClick={checkWay} className={`${checkway === true? 'twoway': 'oneway'}`}>Round Trip</button>
        </div>
        <div className="booktrip-where">
          <form className="booktrip-where-input" onClick={clickDeparture } >
            <span>Form</span>
            <input placeholder="Select Departure City" id="departure" onInput={inputDep}></input>
          </form>
          <div className="booktrip-where-child-1">
              <div className="booktrip-where-child-head">
                <div>
                  <span >
                    Select Departure  City 
                  </span>
                  <button type="button" onClick={clickExit} className="button-exit" >
                    <i class="fas fa-times button-exit-icon"></i>
                  </button>
                </div>
                <span>VietNam</span>
              </div>
              <div className="booktrip-where-child-list">
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
              </div>
            </div>
          <button className="booktrip-where-swap" onClick={swapContent}>
            <i class="fas fa-retweet"></i>
          </button>
          <form className="booktrip-where-input" onClick={clickDestination} >
            <span>To</span>
            <input placeholder="Select Destination City" id="destination" onInput={inputDes}></input>
          </form>
          <div className="booktrip-where-child-2">
              <div className="booktrip-where-child-head">
                <div>
                  <span >
                    Select Destination City 
                  </span>
                  <button type="button" onClick={clickExit} className="button-exit" >
                    <i class="fas fa-times button-exit-icon"></i>
                  </button>
                </div>
                <span>VietNam</span>
              </div>
              <div className="booktrip-where-child-list">
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
              </div>
            </div>
        </div>
        <div className="booktrip-date">
          <div className="booktrip-date-departure" onClick={showCalendarDe}>
            <span className="booktrip-date-departure-span1">Departure Date</span>
            <span className="booktrip-date-departure-span2">Mon, 25 January 2021</span>
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
          <div className={`booktrip-date-return ${checkway === false? '' : 'pointer-none'}`} onClick={showCalendarRe}>
            <span className={`${checkway === false? 'booktrip-date-return-span1' : 'booktrip-date-return-hide'}`}>Return Date</span>
            <span className={`${checkway === false? 'booktrip-date-return-span2' : 'booktrip-date-return-hide'}`}>Mon, 25 January 2021</span>
          </div>
            <div className="booktrip-date-calendar-2" >
              <div className="booktrip-date-calendar-head">
                <span>Return Date</span>
                <button type="button" onClick={clickExit}>
                  <i class="fas fa-times button-exit-icon"></i>
                </button>
              </div>
              <div className="booktrip-date-calendar-body">
                <Calendar></Calendar>
                <div>2</div>
              </div>
            </div>
        </div>
        <div className="booktrip-traveler-frame">
          <div onClick={clickTraveler} className="booktrip-traveler">
            <span>Traveler</span>
            <span>{traveler} Traveler</span>
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
                  <button  onClick={minusAdult} type="button" className={`adult adultminus ${adult > 1? 'booktrip-minus-show': 'booktrip-minus-hide'}`}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p id="adult">{adult}</p>
                  <button onClick={plusAdult} type="button" className={`adult ${traveler > 5 ? 'booktrip-minus-hide': 'booktrip-minus-show'} `}>
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
                  <button onClick={minusChildren} type="button" className={`children ${child > 0? 'booktrip-minus-show': 'booktrip-minus-hide'}`}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p id="children">{child}</p>
                  <button onClick={plusChildren} type="button" className={`children ${traveler > 5 ? 'booktrip-minus-hide': 'booktrip-minus-show'} `}>
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
                  <button onClick={minusInfant} type="button" className={`infant ${infant > 0 ? 'booktrip-minus-show': 'booktrip-minus-hide'} `}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p id="infant">{infant}</p>
                  <button onClick={plusInfant} type="button" className={`infant ${traveler > 5 || infant > 1 ? 'booktrip-minus-hide': 'booktrip-minus-show'} `}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
        </div>
        <button className="booktrip-search">Search</button>
      </div>

  )
}

export default BookTrip;
