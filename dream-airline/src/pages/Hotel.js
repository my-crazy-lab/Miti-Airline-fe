import React from 'react';
import {Link} from "react-router-dom";
import HeadHotel from '../components/HeadHotel';
import Partners from '../components/Partners';
import TopFlight from '../components/TopFlight';

const Hotel =() =>{
  return(
    <div>
      <HeadHotel></HeadHotel>
      <Partners></Partners>
      <TopFlight></TopFlight>
    </div>
  )
}

export default Hotel;