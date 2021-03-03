import React,{useContext} from 'react'
import './ContactInfor.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const ContactInfor =() =>{
  const context = useContext(FlyContext)

  return(
    <div className="contact box-shadow-frame margin-top-text">
      <div className="contact-head">
        <span className="choose-flight-text-big margin-left-text">Contact Information</span>
      </div>
      <div className="contact-body">
        <div  className="contact-child">
          <div className="contact-child-child margin-left-text">
            <label className="traveler-infor-child-title">Title <span className="special-pointer">*</span></label>
            <select value ={context.valueTitle} className="select-title" onInput={(e)=> {
              context.setValueTitle(e.target.value);
            }}>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>
            <div className={`${context.checkInputTitle === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'}`}>
              <i class="fas fa-exclamation-triangle"></i>
              <span>Please select !</span>
            </div>
          </div>
        </div>
        <div className="contact-child">
          <div className="contact-child-child margin-left-text">
            <label className="traveler-infor-child-title">Name <span className="special-pointer">*</span></label>
            <input value ={context.valueName} className="contact-input" placeholder="ex.Albert Thomas" onInput={(e)=>{
              context.setValueName(e.target.value)
            }}></input>
            <div className={`${context.checkInputName === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
              <i class="fas fa-exclamation-triangle"></i>
              <span>This text's length must be 2 - 20 characters</span>
            </div>
          </div>
          <div className="contact-child-child">
            <label className="traveler-infor-child-title">Surname <span className="special-pointer">*</span></label>
            <input value={context.valueSurName} className="contact-input" placeholder="ex.Miller" onInput={(e)=>{
              context.setValueSurName(e.target.value)
              }}></input>
            <div className={`${context.checkInputSurName === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
              <i class="fas fa-exclamation-triangle"></i>
              <span>This text's length must be 2 - 20 characters</span>
            </div>
          </div>
        </div>
      <div className="contact-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Country <span className="special-pointer">*</span></label>
          <select value={context.valueCountry} className="select-title-long" onInput={(e)=> context.setValueCountry(e.target.value)}>
          {context.appData.mobileCountry.map(data => {
            return <option>{data.country} ({data.number})</option>
          })}
          </select>
          <div className={`${context.checkInputCountry === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
            <i class="fas fa-exclamation-triangle"></i>
            <span>Please select !</span>
          </div>  
        </div>
        <div className="contact-child-child">
          <label className="traveler-infor-child-title">Phone<span className="special-pointer">*</span></label>
          <input value={context.valueNumber} className="contact-input" placeholder="ex. 2025550155" onInput={(e)=>{
            context.setValueNumber(e.target.value)
          }}></input>
          <div className={`${context.checkInputNumber === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
            <i class="fas fa-exclamation-triangle"></i>
            <span>This text's length must be 6 - 16 characters</span>
        </div>  
        </div>
      </div>
      <div className="contact-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Email <span className="special-pointer">*</span></label>
          <input value={context.valueEmail} className="contact-input-long" placeholder="ex. yourmail@gmail.com" onInput={(e)=> {
            context.setValueEmail(e.target.value)
          }}></input>
          <div className={`${context.checkInputEmail === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
            <i class="fas fa-exclamation-triangle"></i>
            <span>This text's length must be 6 - 36 characters</span>
          </div>  
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactInfor;