import React from 'react'
import './HeadHome.css'
import BookHotel from './BookHotel';

const HeadHome =()=>{
  return(
    <div className="home-head-frame" >
      <div className="home-head">
        <div className="home-h-flex">
          <div className="home-h-img-1 home-img-left box-shadow-frame"></div>
          <div className="home-h-img-2 home-img-center box-shadow-frame"></div>
          <div className="home-h-img-3 home-img-right box-shadow-frame"></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HeadHome;