import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import Partners from '../components/Partners';
import TopFlight from '../components/TopFlight';
import HeadPromo from '../components/HeadPromo';
import PromoList from '../components/PromoList';

const Promo =()=>{
  return(
    <div>
      <HeadPromo></HeadPromo>
      <PromoList></PromoList>
      <Partners></Partners>
    </div>
  )
}

export default Promo;