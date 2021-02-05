import react from 'react'
import "./Head.css"
import BookTrip from '../components/BookTrip';

const Head =()=>{
  return <div className="flight-head-frame" >
        <div className="flight-head">
          <BookTrip></BookTrip> 
          <span className="flight-head-topic">Find, Compare and Book Your Flight Easily</span>
        </div>
      </div>
}

export default Head;