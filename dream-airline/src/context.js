import React,{useState, useEffect} from 'react';
import {appData} from "./data";
import $ from "jquery";

const FlyContext = React.createContext()

const FlyProvider =({children})=>{
  const [showLogin,setShowLogin] = useState(false);
  useEffect(() => {
    $('.flight-login').toggle();
  },[showLogin]);

  const [des, setDes] = useState('');
  const [dep, setDep] = useState('');
  const [adult , setAdult] = useState(1);
  const [child , setChild] = useState(0);
  const [infant , setInfant] = useState(0);
  const [traveler , setTraveler] = useState(1);

  const [symbol, setSymbol] = useState("€")
  const [convert, setConvert] = useState(1)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(510)
  const [listData, setListData] = useState(appData.flyData);

  useEffect(() => {
    setMinPrice((Math.min(...appData.listPrice) * convert).toFixed(0))
    setMaxPrice((Math.max(...appData.listPrice) * convert).toFixed(0))
  },[convert])
  return(
    <FlyContext.Provider value ={{
      minPrice : minPrice ,
      maxPrice : maxPrice,
      setMinPrice: setMinPrice ,
      setMaxPrice:setMaxPrice ,
      symbol: symbol ,
      setSymbol: setSymbol ,
      convert: convert ,
      setConvert : setConvert,
      currentPrice: currentPrice ,
      setCurrentPrice: setCurrentPrice,
      listData: listData ,
      setListData: setListData,
      showLogin: showLogin ,
      setShowLogin: setShowLogin,
      appData : appData,
      des : des,
      dep: dep,
      setDes: setDes ,
      setDep: setDep,
      adult: adult ,
      setAdult: setAdult,
      infant: infant ,
      setInfant: setInfant,
      child: child ,
      setChild: setChild,
      traveler: traveler ,
      setTraveler: setTraveler,
    }}>
      {children}
    </FlyContext.Provider>
  )
}

const FlyConsumer = FlyContext.FlyConsumer

export {FlyProvider, FlyConsumer, FlyContext}; 
