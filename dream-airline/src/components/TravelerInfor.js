import React,{useContext} from 'react'
import './TravelerInfor.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const TravelerInfor =()=>{
  const context = useContext(FlyContext);
  
  var arrayTraveler = new Array(context.traveler)

  for(let i=1 ; i<=context.traveler; i++){
    arrayTraveler.push(<div className="traveler-infor-child box-shadow-frame margin-top-text">
    <div className="traveler-infor-child-head">
      <div className="margin-left-text traveler-infor-child-head-1">
        <i class="far fa-user"></i>
        <span class="choose-flight-change-head-detail-date choose-flight-text-bold">Traveler {i}</span>
        <span class="choose-flight-change-head-detail-traveler">Adult</span>
      </div>
      <div className="margin-left-text traveler-infor-child-head-2">
        <input id= "Same with Contact" type="checkbox"></input>
        <label for="Same with Contact" className="margin-right-text choose-flight-text-normal">Same with Contact</label>
      </div>
    </div>
    <div className="traveler-infor-child-body">
      <div  className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Title <span className="special-pointer">*</span></label>
          <select>
            <option>Mr</option>
            <option>Ms</option>
            <option>Mrs</option>
          </select>
        </div>
      </div>
      <div className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Name <span className="special-pointer">*</span></label>
          <input className="contact-input" placeholder="ex.Albert Thomas"></input>
        </div>
        <div className="contact-child-child">
          <label className="traveler-infor-child-title">Surname <span className="special-pointer">*</span></label>
          <input className="contact-input" placeholder="ex.Miller"></input>
        </div>
      </div>
      <div className="traveler-infor-child-body-child">
      <div className="contact-child-child margin-left-text">
      <label className="traveler-infor-child-title">Date of Birth <span className="special-pointer">*</span></label>
      <input className="contact-input" type="date"></input>
    </div>
      </div>
    </div>
  </div>)
  }
  return(
    <div className="traveler-infor margin-top-text box-shadow-frame ">
      <div className="traveler-infor-head">
        <span className="choose-flight-text-big margin-left-text">Traveler Information</span>
      </div>
      <div className="traveler-infor-body-frame">
        <div className="traveler-infor-body">
          {
            arrayTraveler
          }
        </div>
      </div>
    </div>
  )
}

export default TravelerInfor;