import React,{useState, useEffect, useRef} from 'react';
import {appData} from "./data";
import $ from "jquery";

export function resetScroll(){
  $(window).scrollTop(0)
}

const FlyContext = React.createContext()

const FlyProvider =({children})=>{

  const refRecommend = useRef(null);
  const refAirlinePartner = useRef(null);
  const refTopFlight = useRef(null);  
  const refErrorPay = useRef(null);

  const [showLogin,setShowLogin] = useState(false);
  useEffect(() => {
    $('.flight-login').toggle();
  },[showLogin]);

  const [showDetail,setShowDetail] = useState(false);
  useEffect(() => {
    $('.toggle-detail').toggle();
  },[showDetail]);

  const [step, setStep] = useState(1) 

  const [valueTitle, setValueTitle] = useState('');
  const [valueName, setValueName] = useState('');
  const [valueSurName, setValueSurName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valueCountry, setValueCountry] = useState('');
  const [valueNumber, setValueNumber] = useState('');

  const[showErrorBookStep1,setShowErrorBookStep1] =useState(false)

  const [checkInputTitle, setCheckInputTitle] = useState(false);
  const [checkInputName, setCheckInputName] = useState(false);
  const [checkInputSurName, setCheckInputSurName] = useState(false);
  const [checkInputCountry, setCheckInputCountry] = useState(false);
  const [checkInputNumber, setCheckInputNumber] = useState(false);
  const [checkInputEmail, setCheckInputEmail] = useState(false);

  const [checkInputTitle1, setCheckInputTitle1] =useState(false);
  const [checkInputSurName1, setCheckInputSurName1] =useState(false);
  const [checkInputName1, setCheckInputName1] =useState(false);
  const [checkInputDate1, setCheckInputDate1] =useState(false);

  const [checkInputTitle2, setCheckInputTitle2] =useState(false);
  const [checkInputSurName2, setCheckInputSurName2] =useState(false);
  const [checkInputName2, setCheckInputName2] =useState(false);
  const [checkInputDate2, setCheckInputDate2] =useState(false);

  const [monthNow,setMonthNow] = useState('');
  const [nameMonth,setNameMonth] = useState('');
  const [nameDay,setNameDay] = useState('');
  const [day, setDay] = useState(parseInt(new Date().getDate()));
  const [yearNow,setYearNow] = useState(parseInt(`${new Date().getFullYear()}`));
  
  const [typeTrip , setTypeTrip] = useState("normal")
  const [month, setMonth] = useState(parseInt(`${new Date().getMonth()}`));
  const [year, setYear] = useState(parseInt(`${new Date().getFullYear()}`));

  const [dataChoice, setDataChoice] = useState({})

  const [dataReturn, setDateReturn] = useState({})

  const [chooseTrip, setChooseTrip] = useState(true);
  const [idDep, setIdDep] = useState('SGN');
  const [idDes, setIdDes] = useState('HAN');
  const [trip, setTrip] = useState({});

  const [des, setDes] = useState('Ho Chi Minh City(SGN)');
  const [dep, setDep] = useState('Hanoi(HAN)');
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

  const [aniShowTrip, setAniShowTrip] = useState(false)
  const [keyAniShowTrip, setKeyAniShowTrip] =useState('')

  const [aniShowPrice, setAniShowPrice] = useState(false)

  const [checkLogin, setCheckLogin] = useState(false)
  const [thisAccount, setThisAccount] = useState({})
  const [checkClickLogin, setCheckClickLogin] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const [showDetailAccount, setShowDetailAccount] = useState(false)

  const [showOverlay, setShowOverlay] = useState(false)

  const [showMore, setShowMore] = useState(false)

  const [hide, setHide] = useState(false)
  
  const [checkSameContact, setCheckSameContact] = useState(false)

  const [errorPay, setErrorPay] = useState(false)

  const [showChangeSearch, setShowChangeSearch] = useState(false)

  const [promo, setPromo] = useState(0)

  const [clickVerify, setClickVerify] = useState(false)

  const [flag, setFlag] = useState("https://cdn.airpaz.com/nuxt/img/eu.ee7f471.svg")

  const [obPromo, setObPromo] = useState({})

  const [showErrorVerify, setShowErrorVerify] = useState();

    function hideTab(){
      setShowMore(false);
      $('.nav-currency-list-frame').hide();
      $('.nav-language-list-frame').hide();
    }

  useEffect(() => {
    hideTab()
  },[hide])

  useEffect(() => {
    setMinPrice((Math.min(...appData.listPrice) * convert).toFixed(0))
    setMaxPrice((Math.max(...appData.listPrice) * convert).toFixed(0))
  },[convert])

  return(
    <FlyContext.Provider value ={{
      dataReturn: dataReturn,
      showChangeSearch:showChangeSearch,
      refErrorPay:refErrorPay,
      errorPay:errorPay,
      checkSameContact:checkSameContact,
      refRecommend:refRecommend,
      refAirlinePartner:refAirlinePartner,
      refTopFlight:refTopFlight,

      showMore:showMore,
      clickVerify:clickVerify,
      flag : flag,
      obPromo:obPromo,
      showErrorVerify:showErrorVerify,
      promo : promo,
      showOverlay:showOverlay,
      showDetailAccount:showDetailAccount,
      thisAccount:thisAccount,
      checkClickLogin:checkClickLogin,
      user : user,
      pass : pass,
      checkLogin:checkLogin,
      aniShowPrice:aniShowPrice,
      keyAniShowTrip:keyAniShowTrip,
      aniShowTrip:aniShowTrip,
      checkInputTitle1 : checkInputTitle1,
      checkInputSurName1 : checkInputSurName1,
      checkInputName1 : checkInputName1,
      checkInputDate1 : checkInputDate1,
      checkInputTitle2 : checkInputTitle2,
      checkInputSurName2 : checkInputSurName2,
      checkInputName2 : checkInputName2,
      checkInputDate2 : checkInputDate2,
      step : step,
      showErrorBookStep1: showErrorBookStep1,
      valueTitle : valueTitle,
      valueEmail : valueEmail,
      valueCountry : valueCountry,
      valueSurName : valueSurName,
      valueName : valueName,
      valueNumber : valueNumber,      
      checkInputCountry: checkInputCountry ,
      checkInputNumber: checkInputNumber ,
      checkInputEmail: checkInputEmail ,
      checkInputSurName: checkInputSurName ,
      checkInputName: checkInputName ,
      checkInputTitle: checkInputTitle ,
      showDetail: showDetail ,
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
      hide : hide,

      setShowMore: setShowMore,
      setClickVerify:setClickVerify,
      setFlag : setFlag,
      setPromo : setPromo,
      setObPromo:setObPromo,
      setDateReturn:setDateReturn ,
      setShowChangeSearch:setShowChangeSearch,
      setErrorPay :setErrorPay,
      setCheckSameContact:setCheckSameContact,
      setHide:setHide,
      setShowOverlay: setShowOverlay,
      setShowDetailAccount: setShowDetailAccount,
      setThisAccount: setThisAccount,
      setCheckClickLogin: setCheckClickLogin,
      setUser : setUser,
      setPass : setPass,
      setCheckLogin: setCheckLogin,
      setAniShowPrice: setAniShowPrice,
      setKeyAniShowTrip: setKeyAniShowTrip,
      setAniShowTrip: setAniShowTrip,
      setShowErrorVerify:setShowErrorVerify,
      setCheckInputTitle1 : setCheckInputTitle1,
      setCheckInputSurName1 : setCheckInputSurName1,
      setCheckInputName1 : setCheckInputName1,
      setCheckInputDate1 : setCheckInputDate1,
      setCheckInputTitle2 : setCheckInputTitle2,
      setCheckInputSurName2 : setCheckInputSurName2,
      setCheckInputName2 : setCheckInputName2,
      setCheckInputDate2 : setCheckInputDate2,
      setStep : setStep,
      setShowErrorBookStep1:setShowErrorBookStep1,
      setValueNumber: setValueNumber ,
      setValueCountry: setValueCountry ,
      setValueEmail: setValueEmail ,
      setValueSurName: setValueSurName ,
      setValueName: setValueName ,
      setValueTitle: setValueTitle ,
      setCheckInputCountry: setCheckInputCountry ,
      setCheckInputNumber: setCheckInputNumber ,
      setCheckInputEmail: setCheckInputEmail ,
      setCheckInputSurName: setCheckInputSurName ,
      setCheckInputName: setCheckInputName ,
      setCheckInputTitle: setCheckInputTitle ,
      setShowDetail: setShowDetail ,
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

const FlyConsumer = FlyContext.FlyConsumer;

export {FlyProvider, FlyConsumer, FlyContext}; 
