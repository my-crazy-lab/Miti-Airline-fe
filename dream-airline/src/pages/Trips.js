import react from 'react';
import React, {useContext} from 'react'
import "./Trips.css"
import {FlyContext} from '../context';
import ListFlight from '../components/ListFlight'
import {Link} from 'react-router-dom'

const Trips =() =>{
  return(
    <div className="trips-frame">
      <div className="trips-choice-frame">
        <ListFlight></ListFlight>      
      </div>
    </div>
  )
}

export default Trips;