import React,{useContext} from 'react'
import './TravelerInfor.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const TravelerInfor =()=>{
  const context = useContext(FlyContext);
  
  var arrayTraveler = new Array(context.traveler)

  for(let i=1 ; i<=context.adult; i++){
    arrayTraveler.push(<div className="traveler-infor-child box-shadow-frame margin-top-text">
    <div className="traveler-infor-child-head">
      <div className="margin-left-text traveler-infor-child-head-1">
        <i class="far fa-user"></i>
        <span class="choose-flight-change-head-detail-date choose-flight-text-bold">{context.thisLanguage.traveler} {i}</span>
        <span class="choose-flight-change-head-detail-traveler">{context.thisLanguage.traveler}</span>
      </div>
      <div className="margin-left-text traveler-infor-child-head-2">
        <input id= "Same with Contact" type="checkbox" className="checkbox-traveler"></input>
        <label for="Same with Contact" className="margin-right-text choose-flight-text-normal" onClick={()=> {
          if(context.checkSameContact === true) context.setCheckSameContact(false);
          else context.setCheckSameContact(true);
        }}>{context.thisLanguage.sameWith}</label>
      </div>
    </div>
    <div className="traveler-infor-child-body">
      <div  className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Title <span className="special-pointer">*</span></label>
          <select className="select-title">
            <option>Mr</option>
            <option>Ms</option>
            <option>Mrs</option>
          </select>
          <div className={`${context.checkInputTitle1 === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
              <i class="fas fa-exclamation-triangle"></i>
              <span>Please choose !</span>
          </div>
        </div>
      </div>
      <div className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Name <span className="special-pointer">*</span></label>
          <input value={context.checkSameContact === true ? context.valueName : ''} className="contact-input" placeholder="ex.Albert Thomas"></input>
          <div className={`${context.checkInputName1 === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
              <i class="fas fa-exclamation-triangle"></i>
              <span>This text's length must be 2 - 20 characters</span>
          </div>
        </div>
        <div className="contact-child-child">
          <label className="traveler-infor-child-title">Surname <span className="special-pointer">*</span></label>
          <input value={context.checkSameContact === true ? context.valueSurName : ''} className="contact-input" placeholder="ex.Miller"></input>
          <div className={`${context.checkInputSurName1 === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
              <i class="fas fa-exclamation-triangle"></i>
              <span>This text's length must be 2 - 20 characters</span>
          </div>  
        </div>
      </div>
      <div className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Birthday<span className="special-pointer">*</span></label>
          <input className="contact-input" type="date"></input>
          <div className={`${context.checkInputDate1 === false && context.showErrorBookStep1 === true ? 'error-title' : 'hide-error'} `}>
            <i class="fas fa-exclamation-triangle"></i>
            <span>Please choose !</span>
          </div>
        </div>
      </div>
    </div>
  </div>)
  }
  for(let i= (context.adult + 1) ; i<=(context.child + context.adult); i++){
    arrayTraveler.push(<div className="traveler-infor-child box-shadow-frame margin-top-text">
    <div className="traveler-infor-child-head">
      <div className="margin-left-text traveler-infor-child-head-1">
        <i class="far fa-user"></i>
        <span class="choose-flight-change-head-detail-date choose-flight-text-bold">{context.thisLanguage.traveler} {i}</span>
        <span class="choose-flight-change-head-detail-traveler">Children</span>
      </div>
      <div className="margin-left-text traveler-infor-child-head-2">
        <input id= "Same with Contact" type="checkbox"></input>
        <label for="Same with Contact" className="margin-right-text choose-flight-text-normal">{context.thisLanguage.sameWith}t</label>
      </div>
    </div>
    <div className="traveler-infor-child-body">
      <div  className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Title <span className="special-pointer">*</span></label>
          <select className="select-title">
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
  for(let i= (context.traveler - context.infant + 1) ; i<=context.traveler; i++){
    arrayTraveler.push(<div className="traveler-infor-child box-shadow-frame margin-top-text">
    <div className="traveler-infor-child-head">
      <div className="margin-left-text traveler-infor-child-head-1">
        <i class="far fa-user"></i>
        <span class="choose-flight-change-head-detail-date choose-flight-text-bold">{context.thisLanguage.traveler} {i}</span>
        <span class="choose-flight-change-head-detail-traveler">Infant</span>
      </div>
      <div className="margin-left-text traveler-infor-child-head-2">
        <input id= "Same with Contact" type="checkbox"></input>
        <label for="Same with Contact" className="margin-right-text choose-flight-text-normal">{context.thisLanguage.samwWith}</label>
      </div>
    </div>
    <div className="traveler-infor-child-body">
      <div  className="traveler-infor-child-body-child">
        <div className="contact-child-child margin-left-text">
          <label className="traveler-infor-child-title">Title <span className="special-pointer">*</span></label>
          <select className="select-title">
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
        <span className="choose-flight-text-big margin-left-text">{context.thisLanguage.travelInfor}</span>
      </div>
      <div className="traveler-infor-body-frame">
        <div className="traveler-infor-body">
          {arrayTraveler}
        </div>
      </div>
    </div>
  )
}

export default TravelerInfor;