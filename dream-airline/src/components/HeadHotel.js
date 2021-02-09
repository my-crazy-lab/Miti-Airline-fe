import React from 'react'
import './HeadHotel.css'
import BookHotel from '../components/BookHotel';
import BookTrip from '../components/BookTrip';

const HeadHotel =()=>{
  return(
    <div className="hotel-head-frame" >
      <BookHotel></BookHotel> 
      <span className="hotel-head-topic">Book Direct for your comfortable stays</span>
    </div>
  )
}

export default HeadHotel;