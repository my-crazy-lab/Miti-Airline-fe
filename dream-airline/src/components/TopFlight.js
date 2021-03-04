import React,{useContext} from 'react'
import "./TopFlight.css";
import {FlyContext} from '../context';

const TopFlight =() =>{
  const context = useContext(FlyContext);
  return(
    <div className="top-frame" ref ={context.refTopFlight}>
      <div className="top">
        <div className="top-head style-topic">{context.thisLanguage.popularFlight}</div>
        <div className="top-list">
          <div className="top-list-child">
            <a>{context.thisLanguage.flightTo} Hong Kong</a>
            <a>{context.thisLanguage.flightTo} London</a>
            <a>{context.thisLanguage.flightTo} Maldives</a>
            <a>{context.thisLanguage.flightTo} Kota Kinabalu</a>
            <a>{context.thisLanguage.flightTo} Melbourne</a>
          </div>
          <div className="top-list-child">
            <a>{context.thisLanguage.flightTo} Bangkok</a>
            <a>{context.thisLanguage.flightTo} Langkawi</a>
            <a>{context.thisLanguage.flightTo} Singapore</a>
            <a>{context.thisLanguage.flightTo} Penang</a>
            <a>{context.thisLanguage.flightTo} Bali</a>
          </div>
          <div className="top-list-child">
            <a>{context.thisLanguage.flightTo} Taipei</a>
            <a>{context.thisLanguage.flightTo} Lombok</a>
            <a>{context.thisLanguage.flightTo} Phuket</a>
            <a>{context.thisLanguage.flightTo} Tokyo</a>
            <a>{context.thisLanguage.flightTo} Dubai</a>
          </div>
        </div>
      </div>
      <div className="top">
          <div className="top-head style-topic">{context.thisLanguage.topFlight}</div>
          <div className="top-list">
            <div className="top-list-child">
              <a>Kuala Lumpur to Singapore</a>
              <a>Singapore to Kuala Lumpur</a>
              <a>Kuala Lumpur to Tokyo</a>
              <a>Kuala Lumpur to Penang</a>
              <a>Kuala Lumpur to Langkawi</a>
            </div>
            <div className="top-list-child">
              <a>Kuala Lumpur to Taipe</a>
              <a>Penang to Kuala Lumpur</a>
              <a>Penang to Singapore</a>
              <a>Kuala Lumpur to Hong Kong</a>
              <a>Kuala Lumpur to Bangkok</a>
            </div>
            <div className="top-list-child">
              <a>Kuala Lumpur to London</a>
              <a>Kuala Lumpur to Kota Kinabalu</a>
              <a>Singapore to Penang</a>
              <a>Kuala Lumpur to Melbourne</a>
              <a>Kuala Lumpur to Jakarta</a>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default TopFlight;