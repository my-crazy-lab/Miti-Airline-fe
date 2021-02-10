import React from 'react';
import DetailTrip from '../components/DetailTrip'
import './ConfirmTrip.css'

const ConfirmTrip =() =>{
  return(
    <div className="confirm-frame">
      <div className="confirm-trip">
        <DetailTrip></DetailTrip>      
      </div>
    </div>
  )
}

export default ConfirmTrip;