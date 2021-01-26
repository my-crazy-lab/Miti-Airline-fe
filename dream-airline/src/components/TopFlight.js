import react from 'react'
import "./TopFlight.css";

const TopFlight =() =>{
  return(
    <div className="top-frame">
      <div className="top">
        <div className="top-head style-topic">Popular Flight Destinations</div>
        <div className="top-list">
          <div className="top-list-child">
            <a>Flights to Hong Kong</a>
            <a>Flights to London</a>
            <a>Flights to Maldives</a>
            <a>Flights to Kota Kinabalu</a>
            <a>Flights to Melbourne</a>
          </div>
          <div className="top-list-child">
            <a>Flights to Bangkok</a>
            <a>Flights to Langkawi</a>
            <a>Flights to Singapore</a>
            <a>Flights to Penang</a>
            <a>Flights to Bali</a>
          </div>
          <div className="top-list-child">
            <a>Flights to Taipei</a>
            <a>Flights to Lombok</a>
            <a>Flights to Phuket</a>
            <a>Flights to Tokyo</a>
            <a>Flights to Dubai</a>
          </div>
        </div>
      </div>
      <div className="top">
          <div className="top-head style-topic">Top Flight Routes</div>
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