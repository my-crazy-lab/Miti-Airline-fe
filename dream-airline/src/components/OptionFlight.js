import React,{useContext} from 'react';
import "./OptionFlight.css"
import {FlyContext} from "../context"
import SliderPrice from '../components/SliderPrice'

const OptionFlight =()=>{
  const context = useContext(FlyContext)
  const changeTypeTicket =(e)=>{
    if(e.target.value === "business"){
      context.setListData(context.appData.flyData.filter(data => data.typePrice === "business"))
    }
    if(e.target.value === "normal"){
      context.setListData(context.appData.flyData.filter(data => data.typePrice === "normal"))
    }
    console.log(context.listData)
  }
  const changeDeparture =(e)=>{
    if(e.target.value === "0:00"){
      context.setListData(context.appData.flyData.filter(data => 0 <= parseInt(data.departureTime) && parseInt(data.departureTime) < 6))
    }
    if(e.target.value === "6:00"){
      context.setListData(context.appData.flyData.filter(data => 6 <= parseInt(data.departureTime) && parseInt(data.departureTime) < 12))
    }
    if(e.target.value === "12:00"){
      context.setListData(context.appData.flyData.filter(data => 12 <= parseInt(data.departureTime) && parseInt(data.departureTime) < 18))
    }
    if(e.target.value === "18:00"){
      context.setListData(context.appData.flyData.filter(data => 18 <= parseInt(data.departureTime)&& parseInt(data.departureTime) < 24))
    }
  }
  const clickAllListTrip =()=>{
    context.setListData(context.appData.flyData)
    console.log(context.currentPrice)
  }
  function comPareSort(property, order){
    var sort_order = 1;
    if(order === "decrease"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
          return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
          return 1 * sort_order;
        // a and b are the same
        }else{
          return 0 * sort_order;
        }
    }
  }
  const changeSortChoose =(e)=>{
    if(e.target.value === "lowest"){
      context.setListData(context.appData.flyData.sort(comPareSort("price", "increase")))
    }
    if(e.target.value === "highest"){
      context.setListData(context.appData.flyData.sort(comPareSort("price", "decrease")))
    }
    if(e.target.value === "earliest"){
      context.setListData(context.appData.flyDataT.sort(comPareSort("departureF", "increase")))
    }
    if(e.target.value === "latest"){
      context.setListData(context.appData.flyDataT.sort(comPareSort("departureF", "decrease")))
    }
    else context.setListData(context.appData.flyData)
    console.log(context.listData)
  }
  return(
    <div className="option">
          <div className="option-head">
            <span>Filter:</span>
            <form className="option-head-child">
              <SliderPrice setListData={context.setListData} setCurrentPrice={context.setCurrentPrice} currentPrice ={context.currentPrice}></SliderPrice>
            </form>
            <form className="option-head-child">
              <span>Stops</span>
              <select>
                <option>Direct</option>
                <option>Transit</option>
                <option>One-stop</option>
              </select>
            </form>
            <form className="option-head-child">
              <span>Type Ticket</span>
              <select onChange={changeTypeTicket}>
                <option value="business">Business</option>
                <option value="normal">Normal</option>
              </select>
            </form>
            <form className="option-head-child">
              <span>Plane</span>
              <select>
                <option>Airbus A900</option>
                <option>Boeing 747</option>
                <option>Airbus A800</option>
                <option>Boeing 700</option>
                <option>Boeing 600</option>
              </select>
            </form>
            <form className="option-head-child">
              <span>Departure</span>
              <select onChange={changeDeparture}>
                <option value ="0:00">Early Flight 0:00 - 6:00</option>
                <option value = "6:00">Morning Flight 6:00 - 12:00</option>
                <option value = "12:00">Afternoon Flight 12:00 - 18:00</option>
                <option value = "18:00">Night Flight 18:00 - 0:00</option>
              </select>
            </form>
            <form className="option-head-child">
              <button onClick={clickAllListTrip} type="button">All</button>
            </form>
          </div>
          <form className="option-footer">
            <span>Sort: </span>
            <select onChange={changeSortChoose}>
              <option value ="">All</option>
              <option value ="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
              <option value ="earliest">Earliest Trip</option>
              <option value="latest">Latest Trip</option>
            </select>
          </form>
        </div>
  )
}

export default OptionFlight;