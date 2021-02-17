import React,{useContext} from 'react'
import './ContactInfor.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const ContactInfor =() =>{
  const context = useContext(FlyContext)
  return(
    <div className="contact box-shadow-frame ">
      <div className="contact-head">
        <span className="choose-flight-text-big margin-left-text">Contact Information</span>
      </div>
      <div className="contact-body">
        <div  className="contact-child">
          <div className="contact-child-child margin-left-text">
            <label className="traveler-infor-child-title">Title <span className="special-pointer">*</span></label>
            <select>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>
          </div>
        </div>
        <div className="contact-child">
          <div className="contact-child-child margin-left-text">
            <label className="traveler-infor-child-title">Name <span className="special-pointer">*</span></label>
            <input className="contact-input" placeholder="ex.Albert Thomas"></input>
          </div>
          <div className="contact-child-child">
            <label className="traveler-infor-child-title">Surname <span className="special-pointer">*</span></label>
            <input className="contact-input" placeholder="ex.Miller"></input>
          </div>
        </div>
      <div className="contact-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Country <span className="special-pointer">*</span></label>
          <select>
          {context.appData.mobileCountry.map(data => {
            return <option>{data.country} ({data.number})</option>
          })}
          </select>
        </div>
        <div className="contact-child-child">
          <label className="traveler-infor-child-title">Mobile Number <span className="special-pointer">*</span></label>
          <input className="contact-input" placeholder="ex. 2025550155"></input>
        </div>
      </div>
      <div className="contact-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Email <span className="special-pointer">*</span></label>
          <input className="contact-input" placeholder="ex. yourmail@gmail.com"></input>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactInfor;