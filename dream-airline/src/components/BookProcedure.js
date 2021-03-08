import React,{useContext} from 'react'
import './BookProcedure.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const BookProcedure =()=>{
  const context = useContext(FlyContext);

  return (
    <div className="procedure-frame margin-top-text">
      <div className="procedure box-shadow-frame margin-left-text">
        <div className="procedure-step">
          <div className={`procedure-flex ${context.step >= 2 ?'procedure-before-step-success' : 'procedure-before-step-none'}`}>
            <div className="procedure-sbs-success">1</div>
            <span className="choose-flight-text-normal">{context.thisLanguage.book}</span>
          </div>
          <div className={`procedure-flex ${context.step >= 3 ?'procedure-before-step-success' : 'procedure-before-step-none'}`}>
            <div className={`${context.step >= 2 ? "procedure-sbs-success" : 'procedure-sbs-none'}`}>2</div>
            <span className="choose-flight-text-normal">{context.thisLanguage.payment}</span>
          </div>
          <div className={`procedure-flex ${context.step >= 4 ?'procedure-before-step-success' : 'procedure-before-step-none'}`}>
            <div className={`${context.step >= 3 ? "procedure-sbs-success" : 'procedure-sbs-none'}`}>3</div>
            <span className="choose-flight-text-normal">{context.thisLanguage.paymentConfirm}</span>
          </div>
          <div className="procedure-flex">
            <div className={`${context.step >= 4 ? "procedure-sbs-success" : 'procedure-sbs-none'}`}>4</div>
            <span className="choose-flight-text-normal">{context.thisLanguage.done}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookProcedure;