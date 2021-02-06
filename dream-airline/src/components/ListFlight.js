import react, {useState} from 'react'
import "./ListFlight.css";
import {appData} from "../data";
import SliderPrice from '../components/SliderPrice'


const ListFlight =()=>{

  const [listData, setListData] = useState(appData.flyData);
  const changeTypeTicket =(e)=>{
    if(e.target.value === "business"){
      setListData(appData.flyData.filter(data => data.typePrice === "business"))
    }
    if(e.target.value === "normal"){
      setListData(appData.flyData.filter(data => data.typePrice === "normal"))
    }
    console.log(listData)
  }
  const changeDeparture =(e)=>{
    if(e.target.value === "0:00"){
      setListData(appData.flyData.filter(data => 0 <= parseInt(data.departureTime) && parseInt(data.departureTime) < 6))
    }
    if(e.target.value === "6:00"){
      setListData(appData.flyData.filter(data => 6 <= parseInt(data.departureTime) && parseInt(data.departureTime) < 12))
    }
    if(e.target.value === "12:00"){
      setListData(appData.flyData.filter(data => 12 <= parseInt(data.departureTime) && parseInt(data.departureTime) < 18))
    }
    if(e.target.value === "18:00"){
      setListData(appData.flyData.filter(data => 18 <= parseInt(data.departureTime)&& parseInt(data.departureTime) < 24))
    }
    console.log(listData)
  }
  const changePrice=()=>{
    
  }
  return(
    <div className="list-flight-frame">
      <div className="list-flight">
        <span className="list-flight-head">See Popular Places</span>
        <div className="list-flight-choose">
          <div className="list-flight-choose-head">
            <span>Filter:</span>
            <form className="list-flight-choose-head-child">
              <SliderPrice></SliderPrice>
            </form>
            <form className="list-flight-choose-head-child">
              <span>Stops</span>
              <select>
                <option>Direct</option>
                <option>Transit</option>
                <option>One-stop</option>
              </select>
            </form>
            <form className="list-flight-choose-head-child">
              <span>Type Ticket</span>
              <select onChange={changeTypeTicket}>
                <option value="business">Business</option>
                <option value="normal">Normal</option>
              </select>
            </form>
            <form className="list-flight-choose-head-child">
              <span>Plane</span>
              <select>
                <option>Airbus A900</option>
                <option>Boeing 747</option>
                <option>Airbus A800</option>
                <option>Boeing 700</option>
                <option>Boeing 600</option>
              </select>
            </form>
            <form className="list-flight-choose-head-child">
              <span>Departure</span>
              <select onChange={changeDeparture}>
                <option value ="0:00">Early Flight 0:00 - 6:00</option>
                <option value = "6:00">Morning Flight 6:00 - 12:00</option>
                <option value = "12:00">Afternoon Flight 12:00 - 18:00</option>
                <option value = "18:00">Night Flight 18:00 - 0:00</option>
              </select>
            </form>
            <form className="list-flight-choose-head-child">
              <button>All</button>
            </form>
          </div>
          <form className="list-flight-choose-footer">
            <span>Sort: </span>
            <select>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Departure Time</option>
              <option>Arrival Time</option>
              <option>Duration</option>
            </select>
          </form>
        </div>
        <div className="list-flight-list">
          {listData.map(fly => {
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
                  <span>{fly.price}{fly.currency}</span>
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