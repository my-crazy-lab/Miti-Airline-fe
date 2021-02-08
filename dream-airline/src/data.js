const currencyData =[
  {
    id : "AED",
    name :"Arab Emirates Dirham",
    symbol :"د.إ",
    conversion : 4.42,
  },
  {
    id : "AUD",
    name :"Australia Dollar",
    symbol :"A$",
    conversion :1.57,
  },
  {
    id : "BDT",
    name :"Bangladeshi Taka",
    symbol :"Tk",
    conversion : 102.20,
  },
  {
    id : "BND",
    symbol :"B$",
    name :"Brunei dollar",
    conversion :1.61,
  },
  {
    id : "CAD",
    name :"Canadian Dollar",
    conversion : 1.54 ,
    symbol :"C$",
  },
  {
    id : "CNY",
    name :"Chinese Yuan",
    conversion :7.79,
    symbol :"CN¥",
  },
  {
    id : "EUR",
    name :"Euro",
    conversion : 1,
    symbol :"€",
  },
  {
    id : "GBP",
    name :"British Pound",
    conversion : 0.88,
    symbol :"£",
  },
  {
    id : "HKD",
    symbol :"HK$",
    conversion :9.34,
    name :"Hongkong Dollar",
  },
  {
    id : "IDR",
    symbol :"Rp",
    conversion :16930.45,
    name :"Indonesia Rupiah",
  },
  {
    id : "INR",
    symbol :"₹",
    conversion :87.74,
    name :"Indian Rupee",
  },
  {
    id : "JPY",
    conversion :87.74,
    name :"Japanese Yen",
    symbol :"¥",
  },
  {
    id : "KHR",
    symbol :"៛",
    conversion :4898.29,
    name :"Cambodian Riel",
  },
  {
    id : "KRW",
    name :"Korean Won",
    symbol :"₩",
    conversion :1346,
  },
  {
    id : "LAK",
    name :"Lao Kip",
    conversion :11253,
    symbol :"₭",
  },
  {
    id : "LKR",
    name :"Sri Lankan Rupee",
    conversion :233.15,
    symbol :"Rs",
  },
  {
    id : "MMK",
    name :"Burmese Kyat",
    conversion :1601 ,
    symbol :"K",
  },
  {
    id : "MOP",
    name :"Macau Pataca",
    conversion :9.62,
    symbol :"MOP$",
  },
  {
    id : "MYR",
    name :"Malaysian Ringgit",
    conversion :4.90,
    symbol :"RM",
  },
  {
    id : "NPR",
    name :"Nepalese Rupee",
    conversion :141.04 ,
    symbol :"Rs",
  },
  {
    id : "NZD",
    name :"New Zealand Dollar",
    conversion :1.67,
    symbol :"NZ$",
  },
  {
    id : "PHP",
    name :"Philippine Peso",
    conversion :57.90,
    symbol :"₱",
  },
  {
    id : "RUB",
    name :"Russian Ruble",
    conversion :89.89,
    symbol :"₽",
  },
  {
    id : "SAR",
    symbol :"ر.س",
    name :"Saudi Arabian Riyal",
    conversion :4.52,
  },
  {
    id : "SGD",
    symbol :"S$",
    name :"Singapore Dollar",
    conversion :1.61,
  },
  {
    id : "THB",
    name :"Thailand Baht",
    conversion :36.20,
    symbol :"฿",
  },
  {
    id : "TWD",
    name :"Taiwan Dollar",
    conversion :33.75,
    symbol :"NT$",
  },
  {
    id : "USU",
    name :"United states Dollar",
    conversion :66.40,
    symbol :"US$",
  },
  {
    id : "VND",
    name :"Vietnam Dong",
    conversion :27978,
    symbol :"₫",
  }
]
const languageData =[
  {
    src : "https://cdn.airpaz.com/nuxt/img/gb.d3ddd60.svg",
    name : "English",
    id :"EN",
  },
  {
    src :"https://cdn.airpaz.com/nuxt/img/id.17b9967.svg",
    name : "Indonesia",
    id :"ID",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/ph.12f36ee.svg",
    name : "Tagalog",
    id :"TL",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/cn.02c229d.svg",
    name : "简体中文",
    id :"ZH",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/tw.8a19468.svg",
    name : "繁體中文",
    id :"ZH-TW",
  },
  {
    src :"https://cdn.airpaz.com/nuxt/img/th.76fca72.svg",
    name : "ภาษาไทย",
    id :"TH",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/jp.3e72015.svg",
    name : "日本語",
    id :"JA",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/kr.60fde7f.svg",
    name : "한국어",
    id :"KO",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/my.e6739f4.svg",
    name : "Malay",
    id :"MS",
  },
  {
    src : "https://cdn.airpaz.com/nuxt/img/vn.6b3aef5.svg",
    name : "Tiếng Việt",
    id :"VI",
  }
]
const tripDataVN ={
  countryTrip : "VietNam",
  detailTrip : [
  {
    id : "SGN",
    name : "Ho Chi Minh City, Vietnam",
    from : "Ho Chi Minh",
    airport : "Tan Son Nhat International Airport",
    fly : [
      {
        to : "Hanoi",
        toId : "HAN",
        toAirline : "NoiBai International Airport",
        img : "url(/img/city-1.jpeg)" ,
        id: "",
          price : 120,
          currency : "€",
          typePrice : "normal",
          flightTime : 2.0,
          departureTime : "7:00",
          destinationTime : "9:00",
          direct :"",
          baggage : "",
          typePlane: "",
      },
      {
        to : "DaNang",
        toAirline : "Da Nang International Airport",
        toId :"DAD",
        img : "url(/img/city-2.jpeg)" ,
        id: "",
          price : 160,
          currency : "€",
          typePrice : "normal",
          flightTime : 2.0,
          departureTime : "10:00",
          destinationTime : "12:00",
          direct :"",
          baggage : "",
          typePlane: "",
      },
    ],
  },
  {
    id : "HAN",
    name : "Hanoi, Vietnam",
    from : "Hanoi",
    airport : "Noi Bai International Airport",
    fly : [
      {
        to : "NhaTrang",
        toAirline : "Nha Trang International Airport",
        img : "url(/img/city-3.jpeg)" ,
        toId: "NTT",
          price : 140,
          currency : "€",
          typePrice : "normal",
          flightTime : 2.5,
          departureTime : "11:15",
          destinationTime : "13:45",
          direct :"",
          baggage : "",
          typePlane: "",
      },
      {
        to : "PhuQuoc",
        toAirline : "Phu Quoc International Airport",
        toId:"PQV",
        img : "url(/img/city-4.webp)" ,
          price : 600,
          currency : "€",
          typePrice : "business",
          flightTime : 4.0,
          departureTime : "2:00",
          destinationTime : "6:00",
          direct :"",
          baggage : "", 
          typePlane: "",
      },
    ],
  },
  {
    id : "DAD",
    name : "Da Nang, Vietnam",
    from : "DaNang",
    airport : "Da Nang International Airport",
    fly : [
      {
        to : "CaMau",
        toAirline : "Ca Mau International Airport",
        img : "url(/img/city-5.jpeg)" ,
        toId: "MAC",
          price : 200,
          currency : "€",
          typePrice : "normal",
          flightTime : 4.0,
          departureTime : "17:00",
          destinationTime : "21:00",
          direct :"",
          baggage : "",
          typePlane: "",
      },
      {
        to : "Lao",
        toAirline : "LaoKi International Airport",
        img : "url(/img/city-6.jpeg)" ,
        toId: "LAO",
          price : 210,
          currency : "€",
          typePrice : "normal",
          flightTime : 4.0,
          departureTime : "20:00",
          destinationTime : "0:00",
          direct :"",
          baggage : "",
          typePlane: "",
      },
    ],
  }
]}
const tripDataUS ={
  countryTrip : "American",
  detailTrip : [
    {
      id : "AMR",
      name : "Denver City, American",
      from : "Denver",
      airport : "Denver - Den International Airport",
      fly : [
        {
          to : "NewYork",
          toAirline : "NewYork International Airport",
          img : "url(/img/city-7.jpeg)" ,
          toId: "NYC",
          price : 230,
          currency : "€",
          typePrice : "normal",
          flightTime : 5.0,
          departureTime : "0:00",
          destinationTime : "5:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "Paris",
          toAirline : "Paris International Airport",
          img : "url(/img/city-8.jpeg)" ,
          toId: "PAR",
          price : 670,
          currency : "€",
          typePrice : "business",
          flightTime : 3.0,
          departureTime : "13:00",
          destinationTime : "16:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    },
    {
      id : "DAF",
      name : "Texas City, American",
      from : "Texas",
      airport : "Dallas-Forth Worth International Airport",
      fly : [
        {
          to : "Dubai",
          toAirline : "Dubai International Airport",
          img : "url(/img/city-9.jpeg)" ,
          toId: "DUB",
          price : 240,
          currency : "€",
          typePrice : "normal",
          flightTime : 3.0,
          departureTime : "12:00",
          destinationTime : "15:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "California",
          toAirline : "California International Airport",
          img : "url(/img/city-10.jpeg)" ,
          toId: "CAL",
          price : 310,
          currency : "€",
          typePrice : "normal",
          flightTime : 6.0,
          departureTime : "3:00",
          destinationTime : "9:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    },
    {
      id : "ATL  ",
      name : "Georgia City, American",
      from :"Georgia",
      airport : "Atlanta  International Airport",
      fly : [
        {
          to : "Tokio",
          toAirline : "Tokio International Airport",
          img : "url(/img/city-11.jpeg)" ,
          toId: "TOK",
          price : 190,
          currency : "€",
          typePrice : "normal",
          flightTime : 2.0,
          departureTime : "17:00",
          destinationTime : "19:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "HongKong",
          toAirline : "HongKong International Airport",
          img : "url(/img/city-12.jpeg)" ,
          toId: "HOK",
          price : 890,
          currency : "€",
          typePrice : "business",
          flightTime : 5.0,
          departureTime : "11:00",
          destinationTime : "16:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    }
  ]
}
const tripDataUK ={
  countryTrip : "United Kingdom",
  detailTrip : [
    {
      id : "BA",
      name : "British City, United Kingdom",
      from : "British",
      airport : "British Airways International Airport",
      fly : [
        {
          to : "Singapore",
          toAirline : "Singapore International Airport",
          img : "url(/img/city-13.jpeg)" ,
          toId: "SIN",
          price : 220,
          currency : "€",
          typePrice : "normal",
          flightTime : 4.0,
          departureTime : "5:00",
          destinationTime : "9:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "ThaiLand",
          toAirline : "Thailand International Airport",
          img : "url(/img/city-14.jpeg)" ,
          toId: "THL",
          price : 180,
          currency : "€",
          typePrice : "normal",
          flightTime : 1.5,
          departureTime : "1:00",
          destinationTime : "2:30",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    },
    {
      id : "ABB",
      name : "Abingdon City, United Kingdom",
      from : "Abingdon",
      airport : "RAF Abingdon International Airport",
      fly : [
        {
          to : "Cuba",
          toAirline : "Cuba International Airport",
          img : "url(/img/city-15.jpeg)" ,
          toId: "CUB",
          price : 320,
          currency : "€",
          typePrice : "normal",
          flightTime : 5.0,
          departureTime : "10:15",
          destinationTime : "16:15",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "China",
          toAirline : "China International Airport",
          img : "url(/img/city-16.webp)" ,
          toId: "CHN",
          price : 234,
          currency : "€",
          typePrice : "normal",
          flightTime : 3.0,
          departureTime : "16:00",
          destinationTime : "19:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    },
    {
      id : "EGDM",
      name : "Amesbury City, United Kingdom",
      from :"Amesbury",
      airport : "MoD Boscombe Down  International Airport",
      fly : [
        {
          to : "HoChiMinh-Vietnam",
          toAirline : "Tan Son Nhat International Airport",
          img : "url(/img/city-17.webp)" ,
          id: "SGN",
          price : 720,
          currency : "€",
          typePrice : "business",
          flightTime : 4.0,
          departureTime : "8:00",
          destinationTime : "12:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "Texas",
          toAirline : "Texas International Airport",
          img : "url(/img/city-18.webp)" ,
          toId: "TEX",
          price : 220,
          currency : "€",
          typePrice : "normal",
          flightTime : 3.0,
          departureTime : "11:00",
          destinationTime : "14:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    }
  ]
}
const tripDataJa ={
  countryTrip : "Japan",
  detailTrip : [
    {
      id : "KIX",
      name : "Osaka City, Japan",
      from : "Osaka",
      airport : "Izumisano International Airport",
      fly : [
        {
          to : "Indonesia",
          img : "url(/img/city-19.webp)" ,
          toId: "IND",
          toAirline : "Indonesia International Airport",
          price : 190,
          currency : "€",
          typePrice : "normal",
          flightTime : 2.0,
          departureTime : "11:30",
          destinationTime : "13:30",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "Australia",
          img : "url(/img/city-20.jpg)" ,
          toId: "AUS",
          price : 260,
          currency : "€",
          toAirline : "Australia International Airport",
          typePrice : "normal",
          flightTime : 4.0,
          departureTime : "14:00",
          destinationTime : "18:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    },
    {
      id : "HND",
      name : "Tokyo City, Japan",
      from : "Tokyo",
      airport : "Ota ward, Tokyo International Airport",
      fly : [
        {
          to : "Osaka",
          toAirline : "Osaka International Airport",
          img : "url(/img/city-21.webp)" ,
          toId: "OSK",
          price : 180,
          currency : "€",
          typePrice : "normal",
          flightTime : 1.25,
          departureTime : "14:00",
          destinationTime : "15:15",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "BangKok",
          toAirline : "BangKok International Airport",
          img : "url(/img/city-22.jpg)" ,
          toId: "BAK",
          price : 220,
          currency : "€",
          typePrice : "normal",
          flightTime : 2.0,
          departureTime : "7:00",
          destinationTime : "9:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    },
    {
      id : "FUK ",
      name : "Fukuoka City, Japan",
      from :"Fukuoka",
      airport : "Fukuoka International Airport",
      fly : [
        {
          to : "Lao Kai-Vietnam",
          toAirline : "Lao Kai International Airport",
          img : "url(/img/city-23.webp)" ,
          toId: "CMA",
          price : 670,
          currency : "€",
          typePrice : "business",
          flightTime : 4.0,
          departureTime : "15:00",
          destinationTime : "19:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
        {
          to : "Dong Thap-Vietnam",
          img : "url(/img/city-24.jpg)" ,
          toId: "DCL",
          price : 170,
          toAirline : "Dong Thap International Airport",
          currency : "€",
          typePrice : "normal",
          flightTime : 2.0,
          departureTime : "5:00",
          destinationTime : "7:00",
          direct :"",
          baggage : "",
          typePlane: "",
        },
      ],
    }
  ]
}
const allTrip = [
  tripDataVN,
  tripDataUS,
  tripDataUK,
  tripDataJa,
]
const flyData =[]
const flyDataT =[]
const  airline =[]
const listPrice =[]
const toCountry =[]

export const appData={
  currencyData : currencyData,
  languageData : languageData,
  allTrip : allTrip,
  airline : airline,
  flyData : flyData,
  flyDataT : flyDataT,
  listPrice : listPrice,
  toCountry : toCountry,
}

function setData (){
  allTrip.map( dataAll => {
    return dataAll.detailTrip.map(data => {
      return data.fly.map(fly => toCountry.push({to :fly.to, id : fly.toId, toAirline : fly.toAirline})) // con cho mat day khon nan tuoi lol.
    })
});
  allTrip.map( dataAll => {
      return dataAll.detailTrip.map(data => {
        return data.fly.map(fly => flyData.push(({...fly, from : data.from, id : data.id, name : data.name, airport : data.airport}))) // con cho mat day khon nan tuoi lol.
      })
  });
  flyData.map( data => {
    return flyDataT.push(({...data, departureF : parseFloat(data.departureTime)})) // con cho mat day khon nan tuoi lol.
});
  allTrip.map(dataAll =>{
    return dataAll.detailTrip.map(data =>{
      return airline.push(data.from)
    })
  });
  allTrip.map( dataAll => {
    return dataAll.detailTrip.map(data => {
      return data.fly.map(fly => {
        return listPrice.push(fly.price)
      })
    })
});
}
function LoadData(){
  setData();
}
LoadData()
