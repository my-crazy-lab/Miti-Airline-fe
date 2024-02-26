import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import Recommend from '../components/Recommend';
import Partners from '../components/Partners';
import TopFlight from '../components/TopFlight';
import HeadHome from '../components/HeadHome';

const Home =()=>{
  const context = useContext(FlyContext);

  return(
    <div>
      <HeadHome></HeadHome>
      <Recommend></Recommend>
      <Partners></Partners>
      <TopFlight></TopFlight>
    </div>
  )
}

export default Home;