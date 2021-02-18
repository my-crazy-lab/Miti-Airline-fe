import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import Partners from '../components/Partners';
import TopFlight from '../components/TopFlight';
import Head from '../components/Head';
import PromoList from '../components/PromoList';

const Promo =()=>{
  return(
    <div>
      <Head></Head>
      <PromoList></PromoList>
      <Partners></Partners>
      <TopFlight></TopFlight>
    </div>
  )
}

export default Promo;