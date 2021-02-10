import React from 'react'
import './ContactInfor.css'

const ContactInfor =() =>{
  return(
    <div>
      <div className="contact-head">
        <span>Contact Information</span>
      </div>
      <div className="contact-body">
        <div className="contact-title">
          <label>Title <span className="special-pointer">*</span></label>
          <select>
            <option>Mr</option>
            <option>Ms</option>
            <option>Mrs</option>
          </select>
        </div>
        <div className="contact-name">
          <div>
            <label>Name <span className="special-pointer">*</span></label>
            <input placeholder="ex.Albert Thomas"></input>
          </div>
          <div>
          <label>Surname <span className="special-pointer">*</span></label>
          <input placeholder="ex.Miller"></input>
        </div>
        <div>
          <div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfor;