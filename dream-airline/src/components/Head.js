import React, {useContext} from 'react'
import "./Head.css"
import BookTrip from '../components/BookTrip';
import {FlyContext} from "../context"

const Head =()=>{
  const context = useContext(FlyContext);
  return <div className="flight-head-frame" >
        <div className="flight-head">
          <BookTrip></BookTrip> 
          <span className="flight-head-topic">{context.thisLanguage.textHeadFlight}</span>
        </div>
      </div>
}

export default Head;