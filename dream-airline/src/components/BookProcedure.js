import React,{useContext} from 'react'
import './BookProcedure.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const BookProcedure =()=>{
  const context = useContext(FlyContext);

  return (
    <div className="procedure-frame box-shadow-frame">
      <div className="procedure">
        <div className="procedure-step">
          <div className="procedure-flex procedure-before-step">
            <div className="procedure-sbs">1</div>
            <span className="choose-flight-text-normal">Book</span>
          </div>
          <div className="procedure-flex procedure-before-step">
            <div className="procedure-sbs">2</div>
            <span className="choose-flight-text-normal">Payment</span>
          </div>
          <div className="procedure-flex procedure-before-step">
            <div className="procedure-sbs">3</div>
            <span className="choose-flight-text-normal">Payment Confirmation</span>
          </div>
          <div className="procedure-flex">
            <div className="procedure-sbs">4</div>
            <span className="choose-flight-text-normal">Done</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookProcedure;