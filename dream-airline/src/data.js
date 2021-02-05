const currencyData =[
  {
    id : "AED",
    name :"Arab Emirates Dirham",
  },
  {
    id : "AUD",
    name :"Australia Dollar",
  },
  {
    id : "BDT",
    name :"Bangladeshi Taka",
  },
  {
    id : "BND",
    name :"Brunei dollar",
  },
  {
    id : "CAD",
    name :"Canadian Dollar",
  },
  {
    id : "CNY",
    name :"Chinese Yuan",
  },
  {
    id : "EUR",
    name :"Euro",
  },
  {
    id : "GBP",
    name :"British Pound",
  },
  {
    id : "HKD",
    name :"Hongkong Dollar",
  },
  {
    id : "IDR",
    name :"Indonesia Rupiah",
  },
  {
    id : "INR",
    name :"Indian Rupee",
  },
  {
    id : "JPY",
    name :"Japanese Yen",
  },
  {
    id : "KHR",
    name :"Cambodian Riel",
  },
  {
    id : "KRW",
    name :"Korean Won",
  },
  {
    id : "LAK",
    name :"Laostian Kip",
  },
  {
    id : "LKR",
    name :"Sri Lankan Rupee",
  },
  {
    id : "MMK",
    name :"Burmese Kyat",
  },
  {
    id : "MOP",
    name :"Macau Pataca",
  },
  {
    id : "MYR",
    name :"Malaysian Ringgit",
  },
  {
    id : "NPR",
    name :"Nepalese Rupee",
  },
  {
    id : "NZD",
    name :"New Zealand Dollar",
  },
  {
    id : "PHP",
    name :"Philippine Peso",
  },
  {
    id : "RUB",
    name :"Russian Ruble",
  },
  {
    id : "SAR",
    name :"Saudi Arabian Riyal",
  },
  {
    id : "SGD",
    name :"Singapore Dollar",
  },
  {
    id : "THB",
    name :"Thailand Baht",
  },
  {
    id : "TWD",
    name :"Taiwan Dollar",
  },
  {
    id : "USU",
    name :"United states Dollar",
  },
  {
    id : "VND",
    name :"Vietnam Dong",
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
    key : "",
    id : "SGN",
    name : "Ho Chi Minh City, Vietnam",
    from : "Ho Chi Minh",
    airport : "Tan Son Nhat International Airport",
    price : "1.500.000d",
    flightTime : "",
    departureTime : "",
    typePrice : "normal",
    destinationTime : "",
    timeZone: "",
    fly : [
      {
        to : "DaLat",
        img : "url(/img/city-1.jpeg)" ,
      },
      {
        to : "DaNang",
        img : "url(/img/city-2.jpeg)" ,
      },
    ],
  },
  {
    key : "",
    id : "HAN",
    name : "Hanoi, Vietnam",
    from : "Hanoi",
    airport : "Noi Bai International Airport",
    price : "8.000.000d",
    flightTime : "",
    departureTime : "",
    typePrice : "business",
    destinationTime : "",
    timeZone: "",
    fly : [
      {
        to : "NhaTrang",
        img : "url(/img/city-3.jpeg)" ,
      },
      {
        to : "PhuQuoc",
        img : "url(/img/city-4.webp)" ,
      },
    ],
  },
  {
    key : "",
    id : "DAD",
    name : "Da Nang, Vietnam",
    from : "DaNang",
    airport : "Da Nang International Airport",
    price : "1.800.00d",
    flightTime : "",
    departureTime : "",
    typePrice : "normal",
    destinationTime : "",
    timeZone: "",
    fly : [
      {
        to : "CaMau",
        img : "url(/img/city-5.jpeg)" ,
      },
      {
        to : "Hanoi",
        img : "url(/img/city-6.jpeg)" ,
      },
    ],
  }
]}
const tripDataUS ={
  countryTrip : "American",
  detailTrip : [
    {
      key : "",
      id : "AMR",
      name : "Denver City, American",
      from : "Denver",
      airport : "Denver - Den International Airport",
      price : "100$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "NewYork",
          img : "url(/img/city-7.jpeg)" ,
        },
        {
          to : "Paris",
          img : "url(/img/city-8.jpeg)" ,
        },
      ],
    },
    {
      key : "",
      id : "DAF",
      name : "Texas City, American",
      from : "Texas",
      airport : "Dallas-Forth Worth International Airport",
      price : "800$",
      flightTime : "",
      departureTime : "",
      typePrice : "business",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "Dubai",
          img : "url(/img/city-9.jpeg)" ,
        },
        {
          to : "California",
          img : "url(/img/city-10.jpeg)" ,
        },
      ],
    },
    {
      key : "",
      id : "ATL  ",
      name : "Georgia City, American",
      from :"Georgia",
      airport : "Atlanta  International Airport",
      price : "120$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "Tokio",
          img : "url(/img/city-11.jpeg)" ,
        },
        {
          to : "HongKong",
          img : "url(/img/city-12.jpeg)" ,
        },
      ],
    }
  ]
}
const tripDataUK ={
  countryTrip : "United Kingdom",
  detailTrip : [
    {
      key : "",
      id : "BA",
      name : "British City, United Kingdom",
      from : "British",
      airport : "British Airways International Airport",
      price : "100$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "Singapore",
          img : "url(/img/city-13.jpeg)" ,
        },
        {
          to : "ThaiLand",
          img : "url(/img/city-14.jpeg)" ,
        },
      ],
    },
    {
      key : "",
      id : "ABB",
      name : "Abingdon City, United Kingdom",
      from : "Abingdon",
      airport : "RAF Abingdon International Airport",
      price : "800$",
      flightTime : "",
      departureTime : "",
      typePrice : "business",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "Cuba",
          img : "url(/img/city-15.jpeg)" ,
        },
        {
          to : "China",
          img : "url(/img/city-16.webp)" ,
        },
      ],
    },
    {
      key : "",
      id : "EGDM",
      name : "Amesbury City, United Kingdom",
      from :"Amesbury",
      airport : "MoD Boscombe Down  International Airport",
      price : "120$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "HoChiMinh-Vietnam",
          img : "url(/img/city-17.webp)" ,
        },
        {
          to : "Texas",
          img : "url(/img/city-18.webp)" ,
        },
      ],
    }
  ]
}
const tripDataJa ={
  countryTrip : "Japan",
  detailTrip : [
    {
      key : "",
      id : "KIX",
      name : "Osaka City, Japan",
      from : "Osaka",
      airport : "Izumisano International Airport",
      price : "100$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "ThaiLand",
          img : "url(/img/city-19.webp)" ,
        },
        {
          to : "Paris",
          img : "url(/img/city-20.jpg)" ,
        },
      ],
    },
    {
      key : "",
      id : "HND",
      name : "Tokyo City, Japan",
      from : "Tokyo",
      airport : "Ota ward, Tokyo International Airport",
      price : "800$",
      flightTime : "",
      departureTime : "",
      typePrice : "business",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "Osaka",
          img : "url(/img/city-21.webp)" ,
        },
        {
          to : "BangKok",
          img : "url(/img/city-22.jpg)" ,
        },
      ],
    },
    {
      key : "",
      id : "FUK  ",
      name : "Fukuoka City, Japan",
      from :"Fukuoka",
      airport : "Fukuoka International Airport",
      price : "120$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
      fly : [
        {
          to : "NhaTrang-Vietnam",
          img : "url(/img/city-23.webp)" ,
        },
        {
          to : "PhuQuoc-Vietnam",
          img : "url(/img/city-24.jpg)" ,
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
export const flyData = []
function setFlyData (){
  allTrip.map( dataAll => {
      return dataAll.detailTrip.map(data => {
        return data.fly.map(fly => {
          return flyData.push(fly)
        })
      })
  });
}
export const as =[]
function addDataToFlyData(){
  allTrip.map( dataAll => {
    return dataAll.detailTrip.map(data => {
      return data.fly.map(fly =>{
        return as.push(data.price)
      })
    })
  });
  for(let i = 0; i <= as.length; i++){
    flyData[i]={
      ...flyData,
      price : `${as[i]}`
    }
  }
}
function SourceFlyData(){
  setFlyData();
  addDataToFlyData();
}
SourceFlyData()
export const appData={
  currencyData : currencyData,
  languageData : languageData,
  allTrip : allTrip,
  typeprice : allTrip.map(dataAll => {
    return dataAll.detailTrip.map(data => {
      return data.typePrice
    });
  }),

}

