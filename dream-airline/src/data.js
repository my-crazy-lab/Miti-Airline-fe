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
    airport : "Tan Son Nhat International Airport",
    price : "1.500.000d",
    flightTime : "",
    departureTime : "",
    typePrice : "normal",
    destinationTime : "",
    timeZone: "",
  },
  {
    key : "",
    id : "HAN",
    name : "Hanoi, Vietnam",
    airport : "Noi Bai International Airport",
    price : "8.000.000d",
    flightTime : "",
    departureTime : "",
    typePrice : "business",
    destinationTime : "",
    timeZone: "",
  },
  {
    key : "",
    id : "DAD",
    name : "Da Nang, Vietnam",
    airport : "Da Nang International Airport",
    price : "1.800.00d",
    flightTime : "",
    departureTime : "",
    typePrice : "normal",
    destinationTime : "",
    timeZone: "",
  }
]}
const tripDataUS ={
  countryTrip : "American",
  detailTrip : [
    {
      key : "",
      id : "AMR",
      name : "Denver City, American",
      airport : "Denver - Den International Airport",
      price : "100$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
    },
    {
      key : "",
      id : "DAF",
      name : "Texas City, American",
      airport : "Dallas-Forth Worth International Airport",
      price : "800$",
      flightTime : "",
      departureTime : "",
      typePrice : "business",
      destinationTime : "",
      timeZone: "",
    },
    {
      key : "",
      id : "ATL  ",
      name : "Georgia City, American",
      airport : "Atlanta  International Airport",
      price : "120$",
      flightTime : "",
      departureTime : "",
      typePrice : "normal",
      destinationTime : "",
      timeZone: "",
    }
  ]
}
const allTrip = [
  tripDataVN,
  tripDataUS
  // tripDataUK : tripDataUK,
]
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
