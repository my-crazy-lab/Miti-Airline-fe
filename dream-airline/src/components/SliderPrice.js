import react,{useState, useEffect} from 'react'
import "./SliderPrice.css"
import {appData} from "../data";

const SliderPrice =()=>{
  const [currentPrice, setCurrentPrice] = useState(500)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  
  useEffect(() => {
    setMinPrice(Math.min(...appData.listPrice))
    setMaxPrice(Math.max(...appData.listPrice))
  },[])
  const changePrice =(e)=>{
    setCurrentPrice(e.target.value)
    console.log(currentPrice , minPrice, maxPrice)
  }
  return <div className="slider-price">
    <div className="slider-price-head">
      <span>{currentPrice}</span>
    </div>
    <div className="slider-price-body">
      <div className="slider-price-value-left">{minPrice}</div>
      <input onChange={changePrice} type="range" min={minPrice} step ="10" max={maxPrice} value={currentPrice}></input>
      <div className="slider-price-value-right">{maxPrice}</div>
    </div>
  </div>
}

export default SliderPrice