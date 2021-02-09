import React,{useState, useEffect} from 'react';
import {appData} from "./data";
import $ from "jquery";

const FlyContext = React.createContext()

const FlyProvider =({children})=>{
  const [showLogin,setShowLogin] = useState(false);
  useEffect(() => {
    $('.flight-login').toggle();
  },[showLogin]);

  const [monthNow,setMonthNow] = useState(parseInt(`${new Date().getMonth()}`));
  const [nameMonth,setNameMonth] = useState('');
  const [nameDay,setNameDay] = useState('');
  const [day, setDay] = useState(new Date().getDate());
  const [yearNow,setYearNow] = useState(parseInt(`${new Date().getFullYear()}`));

  const [chooseTrip, setChooseTrip] = useState(false);
  const [idDep, setIdDep] = useState('');
  const [idDes, setIdDes] = useState('');
  const [trip, setTrip] = useState({});

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
  useEffect(() => {
    
  },[chooseTrip])
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
      chooseTrip: chooseTrip ,
      setChooseTrip: setChooseTrip,
      idDes: idDes ,
      setIdDes: setIdDes,
      idDep : idDep ,
      setIdDep : setIdDep,
      trip: trip ,
      setTrip: setTrip,
      nameMonth: nameMonth ,
      setNameMonth: setNameMonth,
      day: day ,
      setDay: setDay,
      yearNow: yearNow ,
      setYearNow: setYearNow,
      nameDay: nameDay ,
      setNameDay: setNameDay,
      monthNow: monthNow ,
      setMonthNow: setMonthNow,
    }}>
      {children}
    </FlyContext.Provider>
  )
}

const FlyConsumer = FlyContext.FlyConsumer

export {FlyProvider, FlyConsumer, FlyContext}; 
