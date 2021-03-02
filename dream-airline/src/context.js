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
  const [day, setDay] = useState(parseInt(new Date().getDate()));
  const [yearNow,setYearNow] = useState(parseInt(`${new Date().getFullYear()}`));
  
  const [typeTrip , setTypeTrip] = useState("normal")
  const [month, setMonth] = useState(parseInt(`${new Date().getMonth()}`));
  const [year, setYear] = useState(parseInt(`${new Date().getFullYear()}`));

  const [dataChoice, setDataChoice] = useState({})

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

  const [idCurrency, setIdCurrency] = useState("EUR");
  const [nameCurrency, setNameCurrency] = useState("Euro")

  const [choosePromo, setChoosePromo] = useState({});
  const [idLanguage,setIdLanguage] = useState('EN') 

  const [choosePage, setChoosePage] =useState('')

  const [thisLanguage, setThisLanguage] = useState(appData.listLanguage.english)

  const [thisCode, setThisCode] = useState('')

  useEffect(() => {
    setMinPrice((Math.min(...appData.listPrice) * convert).toFixed(0))
    setMaxPrice((Math.max(...appData.listPrice) * convert).toFixed(0))
  },[convert])
  return(
    <FlyContext.Provider value ={{
      thisCode : thisCode,
      thisLanguage: thisLanguage ,
      choosePage: choosePage ,
      idLanguage: idLanguage ,
      typeTrip: typeTrip ,
      month : month,
      year : year,
      choosePromo: choosePromo ,
      nameCurrency: nameCurrency ,
      idCurrency: idCurrency ,
      minPrice : minPrice ,
      maxPrice : maxPrice,
      symbol: symbol ,
      convert: convert ,
      currentPrice: currentPrice ,
      listData: listData ,
      showLogin: showLogin ,
      appData : appData,
      des : des,
      dep: dep,
      adult: adult ,
      infant: infant ,
      traveler: traveler ,
      child: child ,
      idDes: idDes ,
      chooseTrip: chooseTrip ,
      idDep : idDep ,
      trip: trip ,
      nameMonth: nameMonth ,
      day: day ,
      yearNow: yearNow ,
      nameDay: nameDay ,
      monthNow: monthNow ,
      dataChoice: dataChoice ,
      setThisCode : setThisCode ,
      setThisLanguage: setThisLanguage ,
      setChoosePage: setChoosePage ,
      setIdLanguage: setIdLanguage ,
      setMonth: setMonth ,
      setYear : setYear ,
      setTypeTrip: setTypeTrip ,
      setChoosePromo: setChoosePromo ,
      setNameCurrency: setNameCurrency ,
      setIdCurrency: setIdCurrency ,
      setMinPrice: setMinPrice ,
      setMaxPrice:setMaxPrice ,
      setSymbol: setSymbol ,
      setConvert : setConvert,
      setCurrentPrice: setCurrentPrice,
      setListData: setListData,
      setShowLogin: setShowLogin,
      setDes: setDes ,
      setDep: setDep,
      setAdult: setAdult,
      setInfant: setInfant,
      setChild: setChild,
      setTraveler: setTraveler,
      setChooseTrip: setChooseTrip,
      setIdDes: setIdDes,
      setIdDep : setIdDep,
      setTrip: setTrip,
      setNameMonth: setNameMonth,
      setDay: setDay,
      setYearNow: setYearNow,
      setNameDay: setNameDay,
      setMonthNow: setMonthNow,
      setDataChoice: setDataChoice,
    }}>
      {children}
    </FlyContext.Provider>
  )
}

const FlyConsumer = FlyContext.FlyConsumer

export {FlyProvider, FlyConsumer, FlyContext}; 
