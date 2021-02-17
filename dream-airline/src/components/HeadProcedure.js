import React,{useContext} from 'react'
import './HeadProcedure.css'
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const HeadProcedure =()=>{
  const context = useContext(FlyContext);

  return (
    <div className="hotel-head-frame" >
      <span className="hotel-head-topic">Book every time</span>
    </div>
  )
}

export default HeadProcedure;