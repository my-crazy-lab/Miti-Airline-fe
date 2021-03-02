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
            <span className="margin-left-text margin-right-text choose-flight-text-blur-big">{context.thisLanguage.filter}:</span>
            <form className="option-head-child">
              <SliderPrice setListData={context.setListData} setCurrentPrice={context.setCurrentPrice} currentPrice ={context.currentPrice}></SliderPrice>
            </form>
            <form className="option-head-child margin-left-text">
              <span className="choose-flight-text-normal">{context.thisLanguage.stop}</span>
              <select className="select-price">
                <option>{context.thisLanguage.direct}</option>
                <option>{context.thisLanguage.transit}</option>
                <option>{context.thisLanguage.oneStop}</option>
              </select>
            </form>
            <form className="option-head-child">
              <span className="choose-flight-text-normal">{context.thisLanguage.typePrice}</span>
              <select className="select-price" onChange={changeTypeTicket}>
                <option value="business">{context.thisLanguage.business}</option>
                <option value="normal">{context.thisLanguage.normal}</option>
              </select>
            </form>
            <form className="option-head-child">
              <span className="choose-flight-text-normal">{context.thisLanguage.plane}</span>
              <select className="select-price">
                <option>Airbus A900</option>
                <option>Boeing 747</option>
                <option>Airbus A800</option>
                <option>Boeing 700</option>
                <option>Boeing 600</option>
              </select>
            </form>
            <form className="option-head-child option-long">
              <span className="choose-flight-text-normal">{context.thisLanguage.departure}</span>
              <select className="select-price" onChange={changeDeparture}>
                <option value ="0:00">{context.thisLanguage.earlyFlight} 0:00 - 6:00</option>
                <option value = "6:00">{context.thisLanguage.morningFLight} 6:00 - 12:00</option>
                <option value = "12:00">{context.thisLanguage.afternoonFlight} 12:00 - 18:00</option>
                <option value = "18:00">{context.thisLanguage.nightFlight} 18:00 - 0:00</option>
              </select>
            </form>
            <form className="option-head-child">
              <button onClick={clickAllListTrip} type="button" className="btn-show-all">{context.thisLanguage.all}</button>
            </form>
          </div>
          <form className="option-footer margin-right-text">
            <span className="choose-flight-text-blur-big">{context.thisLanguage.sort}: </span>
            <select className="select-price" onChange={changeSortChoose}>
              <option value ="">{context.thisLanguage.all}</option>
              <option value ="lowest">{context.thisLanguage.lowestPrice}</option>
              <option value="highest">{context.thisLanguage.highestPrice}</option>
              <option value ="earliest">{context.thisLanguage.earliest}</option>
              <option value="latest">{context.thisLanguage.lastest}</option>
            </select>
          </form>
        </div>
  )
}

export default OptionFlight;