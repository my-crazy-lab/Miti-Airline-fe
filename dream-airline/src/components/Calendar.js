import react,{useState, useEffect} from 'react';
import "./Calendar.css"
import $ from "jquery";

const Calendar =() =>{
  const dateNow = new Date();
  const [dayNow,setDayNow] = useState('');
  const [nameMonth,setNameMonth] = useState('');
  const [monthNow,setMonthNow] = useState(parseInt(`${dateNow.getMonth()}`));
  const [yearNow,setYearNow] = useState(parseInt(`${dateNow.getFullYear()}`));
  const [firstDay,setFirstDay] = useState(`${new Date(yearNow, monthNow, 1)}`);
  const [checkFday,setCheckFday] = useState(`${firstDay.split('' , 2).join('')}`);
  const [sumDay,setSumDay] = useState(0);

  useEffect(() => {
    fillCalendar();
  });
  const fixMonthNow=()=>{
    if( monthNow === 12) {
      setMonthNow(0);
      setYearNow(yearNow + 1);
    }
    if(monthNow < 0) {
      setMonthNow(11);
      setYearNow(yearNow - 1);
    }
  }
  const nextMonth=()=>{
    setMonthNow(monthNow + 1);
    fixMonthNow();
    console.log(nameMonth, monthNow)
  }
  const backMonth=()=>{
    setMonthNow(monthNow - 1);
    fixMonthNow();
    console.log(nameMonth, monthNow)
  }
  const checkLeapYear=()=>{
    if(yearNow %4=== 0 && yearNow %100!== 0){
      switch(monthNow){
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
      switch(monthNow){
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
    setFirstDay(`${new Date(yearNow, monthNow, 1)}`);
    setCheckFday(`${firstDay.split('' , 2).join('')}`)
    findDay();
    findMonth();
    checkLeapYear();
    if(checkFday === 'Su'){
      $('#0').text('1');
      for(let i = 2 ; i <= sumDay ; i++){
        $(`#${i - 1}`).text(`${i}`);
      }
      for(let j = sumDay; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
    if(checkFday === 'Mo'){
      $('#0').text('');
      $('#1').text('1');
      for(let i = 2 ; i <= sumDay; i++){
        $(`#${i}`).text(`${i}`);
      }
      for(let j = sumDay + 1 ; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
    if(checkFday === 'Tu'){
      $('#0').text('');
      $('#1').text('');
      $('#2').text('1');
      for(let i = 2 ; i <= sumDay; i++){
        $(`#${i + 1}`).text(`${i}`);
      }
      for(let j = sumDay + 2 ; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
    if(checkFday === 'We'){
      $('#0').text('');
      $('#1').text('');
      $('#2').text('');
      $('#3').text('1');
      for(let i = 2 ; i <= sumDay; i++){
        $(`#${i + 2}`).text(`${i}`);
      }
      for(let j = sumDay + 3 ; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
    if(checkFday === 'Th'){
      $('#0').text('');
      $('#1').text('');
      $('#2').text('');
      $('#3').text('');
      $('#4').text('1');
      for(let i = 2 ; i <= sumDay; i++){
        $(`#${i + 3}`).text(`${i}`);
      }
      for(let j = sumDay + 4 ; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
    if(checkFday === 'Fr'){
      $('#0').text('');
      $('#1').text('');
      $('#2').text('');
      $('#3').text('');
      $('#4').text('');
      $('#5').text('1');
      for(let i = 2 ; i <= sumDay; i++){
        $(`#${i + 4}`).text(`${i}`);
      }
      for(let j = sumDay + 5 ; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
    if(checkFday === 'Sa'){
      $('#0').text('');
      $('#1').text('');
      $('#2').text('');
      $('#3').text('');
      $('#4').text('');
      $('#5').text('');
      $('#6').text('1');
      for(let i = 2 ; i <= sumDay; i++){
        $(`#${i + 5}`).text(`${i}`);
      }
      for(let j = sumDay + 6 ; j <= 41; j++){
        $(`#${j}`).text('');
      }
    }
  }
  const findDay =()=>{
    switch(dateNow.getDay()){
      case 0: {
        setDayNow('Sunday') ;
        break;
      }
      case 1: {
        setDayNow('Monday') ;
        break;
      }
      case 2: {
        setDayNow('Tuesday') ;
        break;
      }
      case 3: {
        setDayNow('Wednesday') ;
        break;
      }
      case 4: {
        setDayNow('Thursday') ;
        break;
      }
      case 5: {
        setDayNow('Friday') ;
        break;
      }
      case 6: {
        setDayNow('Saturday') ;
        break;
      }
      default: break;
    }
  }
  const findMonth =()=>{
    switch(monthNow){
      case 0 : {  
        setNameMonth('January');
        break;
      }
      case 1 : {  
        setNameMonth('February');
        break;
      }
      case 2 : {  
        setNameMonth('Match');
        break;
      }
      case 3 : {  
        setNameMonth('April');
        break;
      }
      case 4 : {  
        setNameMonth('May');
        break;
      }
      case 5 : {  
        setNameMonth('June');
        break;
      }
      case 6 : {  
        setNameMonth('July');
        break;
      }
      case 7 : {  
        setNameMonth('August');
        break;
      }
      case 8 : {  
        setNameMonth('September');
        break;
      }
      case 9 : {  
        setNameMonth('October');
        break;
      }
      case 10 : {  
        setNameMonth('November');
        break;
      }
      case 11 : {  
        setNameMonth('December');
        break;
      }
      default : break;
    }
  }
  return(
    <div className="calendar">
      <div className="calendar-head">
        <button onClick={backMonth}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <span>{nameMonth} {yearNow}</span>
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
            <span>Sat</span>
          </div>
        </div>
        <div className="calendar-name-day">
          <div>
            <span id="0"></span>
          </div>
          <div>
            <span id="1"></span>
          </div>
          <div>
            <span id="2"></span>
          </div>
          <div>
            <span id="3"></span>
          </div>
          <div>
            <span id="4"></span>
          </div>
          <div>
            <span id="5"></span>
          </div>
          <div>
            <span id="6"></span>
          </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span id="7"></span>
      </div>
      <div>
        <span id="8"></span>
      </div>
      <div>
        <span id="9"></span>
      </div>
      <div>
        <span id="10"></span>
      </div>
      <div>
        <span id="11"></span>
      </div>
      <div>
        <span id="12"></span>
      </div>
      <div>
        <span id="13"></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span id="14"></span>
      </div>
      <div>
        <span id="15"></span>
      </div>
      <div>
        <span id="16"></span>
      </div>
      <div>
        <span id="17"></span>
      </div>
      <div>
        <span id="18"></span>
      </div>
      <div>
        <span id="19"></span>
      </div>
      <div>
        <span id="20"></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span id="21"></span>
      </div>
      <div>
        <span id="22"></span>
      </div>
      <div>
        <span id="23"></span>
      </div>
      <div>
        <span id="24"></span>
      </div>
      <div>
        <span id="25"></span>
      </div>
      <div>
        <span id="26"></span>
      </div>
      <div>
        <span id="27"></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span id="28"></span>
      </div>
      <div>
        <span id="29"></span>
      </div>
      <div>
        <span id="30"></span>
      </div>
      <div>
        <span id="31"></span>
      </div>
      <div>
        <span id="32"></span>
      </div>
      <div>
        <span id="33"></span>
      </div>
      <div>
        <span id="34"></span>
      </div>
        </div>
        <div className="calendar-name-day">
        <div>
        <span id="35"></span>
      </div>
      <div>
        <span id="36"></span>
      </div>
      <div>
        <span id="37"></span>
      </div>
      <div>
        <span id="38"></span>
      </div>
      <div>
        <span id="39"></span>
      </div>
      <div>
        <span id="40"></span>
      </div>
      <div>
        <span id="41"></span>
      </div>
        </div>
      </div>
    </div>
  )
}
export default Calendar;