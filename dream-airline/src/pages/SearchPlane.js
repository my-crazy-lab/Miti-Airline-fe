import react,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import ListFlight from '../components/ListFlight';
import Head from '../components/Head';
import {appData} from "../data";

const SearchPlane =() =>{
  const [symbol, setSymbol] = useState("€")
  const [convert, setConvert] = useState(1)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  useEffect(() => {
    setMinPrice((Math.min(...appData.listPrice) * convert).toFixed(0))
    setMaxPrice((Math.max(...appData.listPrice) * convert).toFixed(0))
  },[convert])
  return(
    <div>
      <Navbar minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} symbol={symbol} setSymbol={setSymbol} convert={convert} setConvert={setConvert}></Navbar>
      <Head></Head>
      <ListFlight minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} symbol={symbol} setSymbol={setSymbol} convert={convert} setConvert={setConvert}></ListFlight>
    </div>
  )
}

export default SearchPlane;