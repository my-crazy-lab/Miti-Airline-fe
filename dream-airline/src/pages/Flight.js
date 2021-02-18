import react,{useState, useEffect} from 'react';
import "./Flight.css";
import BookTrip from '../components/BookTrip';
import Recommend from '../components/Recommend';
import Partners from '../components/Partners';
import TopFlight from '../components/TopFlight';
import ListFlight from '../components/ListFlight';
import $ from 'jquery'; 
import plane9 from "../images/plane-9.jpeg";
import plane16 from "../images/plane-16.jpeg";
import plane14 from "../images/plane-14.jpeg";
import plane13 from "../images/plane-13.jpeg";
import plane5 from "../images/plane-5.jpeg";
import plane6 from "../images/plane-6.jpeg";
import Head from '../components/Head';

const Flight =() =>{
  // let countBackground = 1; 
  // setInterval(function(){
  //   if(countBackground === 0) $('.flight-head-frame').css({'background-image':`url(${plane6})`})
  //   if(countBackground === 1) $('.flight-head-frame').css({'background-image':`url(${plane9})`})
  //   if(countBackground === 2) $('.flight-head-frame').css({'background-image':`url(${plane5})`})
  //   if(countBackground === 3) $('.flight-head-frame').css({'background-image':`url(${plane13})`})
  //   if(countBackground === 4) $('.flight-head-frame').css({'background-image':`url(${plane14})`})
  //   if(countBackground === 5) $('.flight-head-frame').css({'background-image':`url(${plane16})`})
  //   countBackground ++;
  //   if(countBackground > 5) countBackground = 0;
  // },8000)
  return(
    <div>
      <Head></Head>
      <ListFlight></ListFlight>
      <Partners></Partners>
      <TopFlight></TopFlight>
    </div>
  )
} 
export default Flight;