import React,{useState, useEffect, useContext} from 'react';
import "./Calendar.css"
import $ from "jquery";
import {FlyContext} from "../context"

const Calendar =() =>{
  const context = useContext(FlyContext);
  
  const [firstDay,setFirstDay] = useState(`${new Date(context.yearNow, context.monthNow, 1)}`);
  const [checkFday,setCheckFday] = useState(`${firstDay.split('' , 2).join('')}`);
  const [sumDay,setSumDay] = useState(0);

  const [checkHiddenDate, setCheckHiddenDate] = useState(0)
  
  useEffect(() => {
    fillCalendar();
  });

  useEffect(() => {
    findDay()
  },[]);
  const fixMonthNow=()=>{
    if( context.monthNow === 12) {
      context.setMonthNow(0);
      context.setYearNow(context.yearNow + 1);
    }
    if(context.monthNow < 0) {
      context.setMonthNow(11);
      context.setYearNow(context.yearNow - 1);
    }
  }
  const nextMonth=()=>{
    context.setMonthNow(context.monthNow + 1);
    fixMonthNow();
    setCheckHiddenDate(checkHiddenDate + 1)
  }
  const backMonth=()=>{
    context.setMonthNow(context.monthNow - 1);
    fixMonthNow();
    setCheckHiddenDate(checkHiddenDate - 1)
  }
  
  const checkLeapYear=()=>{
    if(context.yearNow %4=== 0 && context.yearNow %100!== 0){
      switch(context.monthNow){
        case 0 :{
          setSumDay(31);
          break;
        }
        case 1 :{
          setSumDay(29);
          break;
        }
        case 2 :{
          setSumDay(31);
          break;
        }
        case 3 :{
          setSumDay(30);
          break;
        }
        case 4 :{
          setSumDay(31);
          break;
        }
        case 5 :{
          setSumDay(30);
          break;
        }
        case 6 :{
          setSumDay(31);
          break;
        }
        case 7 :{
          setSumDay(31);
          break;
        }
        case 8 :{
          setSumDay(30);
          break;
        }
        case 9 :{
          setSumDay(31);
          break;
        }
        case 10 :{
          setSumDay(30);
          break;
        }
        case 11 :{
          setSumDay(31);
          break;
        }
      }
    }
    else {
      switch(context.monthNow){
        case 0 :{
          setSumDay(31);
          break;
        }
        case 1 :{
          setSumDay(28);
          break;
        }
        case 2 :{
          setSumDay(31);
          break;
        }
        case 3 :{
          setSumDay(30);
          break;
        }
        case 4 :{
          setSumDay(31);
          break;
        }
        case 5 :{
          setSumDay(30);
          break;
        }
        case 6 :{
          setSumDay(31);
          break;
        }
        case 7 :{
          setSumDay(31);
          break;
        }
        case 8 :{
          setSumDay(30);
          break;
        }
        case 9 :{
          setSumDay(31);
          break;
        }
        case 10 :{
          setSumDay(30);
          break;
        }
        case 11 :{
          setSumDay(31);
          break;
        }
    }
    }
  }
  const fillCalendar =()=>{
    setFirstDay(`${new Date(context.yearNow, context.monthNow, 1)}`);
    setCheckFday(`${firstDay.split('' , 3).join('')}`)
    findMonth();
    checkLeapYear();
    if(checkFday === 'Sun'){
      $('.0').text('1');
      $('.0').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay ; i++){
        $(`.${i - 1}`).text(`${i}`);
        $(`.${i - 1}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
    if(checkFday === 'Mon'){
      $('.0').text('');
      $('.1').text('1');
      $('.1').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay; i++){
        $(`.${i}`).text(`${i}`);
        $(`.${i}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay + 1 ; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
    if(checkFday === 'Tue'){
      $('.0').text('');
      $('.1').text('');
      $('.2').text('1');
      $('.2').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay; i++){
        $(`.${i + 1}`).text(`${i}`);
        $(`.${i + 1}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay + 2 ; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
    if(checkFday === 'Wed'){
      $('.0').text('');
      $('.1').text('');
      $('.2').text('');
      $('.3').text('1');
      $('.3').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay; i++){
        $(`.${i + 2}`).text(`${i}`);
        $(`.${i + 2}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay + 3 ; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
    if(checkFday === 'Thu'){
      $('.0').text('');
      $('.1').text('');
      $('.2').text('');
      $('.3').text('');
      $('.4').text('1');
      $('.4').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay; i++){
        $(`.${i + 3}`).text(`${i}`);
        $(`.${i + 3}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay + 4 ; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
    if(checkFday === 'Fri'){
      $('.0').text('');
      $('.1').text('');
      $('.2').text('');
      $('.3').text('');
      $('.4').text('');
      $('.5').text('1');
      $('.5').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay; i++){
        $(`.${i + 4}`).text(`${i}`);
        $(`.${i + 4}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay + 5 ; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
    if(checkFday === 'Sat'){
      $('.0').text('');
      $('.1').text('');
      $('.2').text('');
      $('.3').text('');
      $('.4').text('');
      $('.5').text('');
      $('.6').text('1');
      $('.6').css({'width': '40px', 'height': '40px'});
      for(let i = 2 ; i <= sumDay; i++){
        $(`.${i + 5}`).text(`${i}`);
        $(`.${i + 5}`).css({'width': '40px', 'height': '40px'});
      }
      for(let j = sumDay + 6 ; j <= 41; j++){
        $(`.${j}`).text('');
      }
    }
  }
  const findDay =()=>{
    switch(new Date().getDay()){
      case 0: {
        context.setNameDay('Sun') ;
        break;
      }
      case 1: {
        context.setNameDay('Mon') ;
        break;
      }
      case 2: {
        context.setNameDay('Tue') ;
        break;
      }
      case 3: {
        context.setNameDay('Wed') ;
        break;
      }
      case 4: {
        context.setNameDay('Thu') ;
        break;
      }
      case 5: {
        context.setNameDay('Fri') ;
        break;
      }
      case 6: {
        context.etNameDay('Sat') ;
        break;
      }
      default: break;
    }
  }
  const findMonth =()=>{
    switch(context.monthNow){
      case 0 : {  
        context.setNameMonth('January');
        break;
      }
      case 1 : {  
        context.setNameMonth('February');
        break;
      }
      case 2 : {  
        context.setNameMonth('Match');
        break;
      }
      case 3 : {  
        context.setNameMonth('April');
        break;
      }
      case 4 : {  
        context.setNameMonth('May');
        break;
      }
      case 5 : {  
        context.setNameMonth('June');
        break;
      }
      case 6 : {  
        context.setNameMonth('July');
        break;
      }
      case 7 : {  
        context.setNameMonth('August');
        break;
      }
      case 8 : {  
        context.setNameMonth('September');
        break;
      }
      case 9 : {  
        context.setNameMonth('October');
        break;
      }
      case 10 : {  
        context.setNameMonth('November');
        break;
      }
      case 11 : {  
        context.setNameMonth('December');
        break;
      }
      default : break;
    }
  }
  const chooseDateInCalendar=(text , index) =>{
    context.setDay(text)
    if(parseInt(index) % 7 === 0) context.setNameDay('Sun')
    if(parseInt(index) % 7 === 1) context.setNameDay('Mon')
    if(parseInt(index) % 7 === 2) context.setNameDay('Tue')
    if(parseInt(index) % 7 === 3) context.setNameDay('Wed')
    if(parseInt(index) % 7 === 4) context.setNameDay('Thu')
    if(parseInt(index) % 7 === 5) context.setNameDay('Fri')
    if(parseInt(index) % 7 === 6) context.setNameDay('Sat')
  }
  return(
    <div className="calendar">
      <div className="calendar-head">
        <button onClick={backMonth} className={`${checkHiddenDate > 0 ? '' : "calendar-hidden"}`}>
          <i class={`fas fa-chevron-left ${checkHiddenDate > 0 ? '' : "calendar-hidden"}`}></i>
        </button>
        <span>{context.nameMonth} {context.yearNow}</span>
        <button onClick={nextMonth}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="calendar-body">
        <div className="calendar-name-month">
          <div>
            <span className="calendar-note">Sun</span>
          </div>
          <div>
            <span>Mon</span>
          </div>
          <div>
            <span>Tue</span>
          </div>
          <div>
            <span>Wed</span>
          </div>
          <div>
            <span>Thu</span>
          </div>
          <div>
            <span>Fri</span>
          </div>
          <div>
            <span >Sat</span>
          </div>
        </div>
        <div className="calendar-name-day">
          <div>
            <span className="0" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
          <div>
            <span className="1" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
          <div>
            <span className="2" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
          <div>
            <span className="3" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
          <div>
            <span className="4" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
          <div>
            <span className="5" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
          <div>
            <span className="6" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
          </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span className="7" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="8" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="9" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="10" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="11" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="12" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="13" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span className="14" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="15" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="16" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="17" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="18" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="19" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="20" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span className="21" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="22" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="23" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="24" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="25" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="26" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="27" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span className="28" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="29" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="30" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="31" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="32" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="33" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="34" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span className="35" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="36" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="37" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="38" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="39" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="40" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
      <div>
        <span className="41" onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.className)}></span>
      </div>
        </div>
      </div>
    </div>
  )
}
export default Calendar;