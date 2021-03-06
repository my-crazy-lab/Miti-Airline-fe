import React,{useState, useEffect, useContext} from 'react';
import "./Calendar.css"
import $ from "jquery";
import {FlyContext} from "../context"

const Calendar =() =>{
  const context = useContext(FlyContext);
  
  const [firstDay,setFirstDay] = useState(`${new Date(context.yearNow, context.monthNow, 1)}`);
  const [checkFday,setCheckFday] = useState(`${firstDay.split('' , 2).join('')}`);
  const [sumDay,setSumDay] = useState(0);

  const [resetDay, setResetDay] = useState('')
  const [resetNameDay, setResetNameDay] = useState('')

  const [arrayD, setArrayD] = useState([''])
  const [checkHoverCalendar, setCheckHoverCalendar] = useState(false)

  const [checkHiddenDate, setCheckHiddenDate] = useState(0)
  
  useEffect(() => {
    fillCalendar();
  },[context.monthNow]);

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
    console.log(arrayD)
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
        default : break;
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
        default : break;
    }
    }
  }
  const fillCalendar =()=>{
    let arrayDate =['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
    setFirstDay(`${new Date(context.yearNow, context.monthNow, 1)}`);
    setCheckFday(`${firstDay.split('' , 3).join('')}`)
    findMonth();
    checkLeapYear();
    if(checkFday === 'Sun'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i + 6] = i + 1 ; 
      }
    }
    if(checkFday === 'Mon'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i] = i + 1 ; 
      }
    }
    if(checkFday === 'Tue'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i + 1] = i + 1 ; 
      }
    }
    if(checkFday === 'Wed'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i + 2] = i + 1 ; 
      }
    }
    if(checkFday === 'Thu'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i + 3] = i + 1 ; 
      }
    }
    if(checkFday === 'Fri'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i + 4] = i + 1 ; 
      }
    }
    if(checkFday === 'Sat'){
      for(let i = 0; i< sumDay ; i++){
        arrayDate[i + 5] = i + 1 ; 
      }
    }
    setArrayD(arrayDate)
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
        context.setNameDay('Sat') ;
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
    if(text !== ''){
      context.setDay(text)
      if(parseInt(index) % 7 === 0) context.setNameDay('Sun')
      if(parseInt(index) % 7 === 1) context.setNameDay('Mon')
      if(parseInt(index) % 7 === 2) context.setNameDay('Tue')
      if(parseInt(index) % 7 === 3) context.setNameDay('Wed')
      if(parseInt(index) % 7 === 4) context.setNameDay('Thu')
      if(parseInt(index) % 7 === 5) context.setNameDay('Fri')
      if(parseInt(index) % 7 === 6) context.setNameDay('Sat')
    }
  }
  const mouseCheckHover =(text)=>{
    if(parseInt(text) > 0){
      setCheckHoverCalendar(true);
    }
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
            <span className="calendar-text-normal-big">Mon</span>
          </div>
          <div>
            <span className="calendar-text-normal-big">Tue</span>
          </div>
          <div>
            <span className="calendar-text-normal-big">Wed</span>
          </div>
          <div>
            <span className="calendar-text-normal-big">Thu</span>
          </div>
          <div>
            <span className="calendar-text-normal-big">Fri</span>
          </div>
          <div>
            <span className="calendar-text-normal-big" >Sat</span>
          </div>
        </div>
        <div className="calendar-flex">
        {arrayD.map((date,index )=> {
          return <div className={`${parseInt(date) > 0 ? `calendar-flex-c ${context.appData.holiday.filter(months => parseInt(months.month) === context.monthNow).map(data => data.date).includes(date.toString()) ? 'calendar-text-holiday' : 'calendar-text-normal'} ${parseInt(context.day) === date ? 'calendar-text-select' : 'calendar-text-normal'} ${context.day === date ? 'calendar-text-select' : ''}` : 'd-c'}`} id ={index} key={index} onMouseEnter={(e) => mouseCheckHover(e.target.innerText)} onMouseLeave={() => setCheckHoverCalendar(false)} onClick={(e) => (chooseDateInCalendar)(e.target.innerText, e.target.id)}>
            {date}
          </div>
        })}
        </div>
      </div>
      <div>
        {context.appData.holiday.filter(months => parseInt(months.month) === (context.monthNow + 1)).map(holiday => {
          return <div className="holiday-f">
                  <span className="margin-left-text holiday-date">{holiday.date}/{holiday.month}</span>
                  <span className="holiday-name">{holiday.name}</span>
                </div>
        })}
      </div>
    </div>
  )
}
export default Calendar;