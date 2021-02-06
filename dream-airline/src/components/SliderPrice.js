import react,{useState, useEffect} from 'react'
import "./SliderPrice.css"
import {appData} from "../data";
import $ from 'jquery' ;

const SliderPrice =()=>{
  const [currentPrice, setCurrentPrice] = useState(510)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [moveSlider, setMoveSlider] = useState(0)
  useEffect(() => {
    setMinPrice(Math.min(...appData.listPrice))
    setMaxPrice(Math.max(...appData.listPrice))
  },[])
  const changePrice =(e)=>{
    const valueSlider = maxPrice - minPrice ;
    setCurrentPrice(e.target.value)
    if(e.target.value >= 510){
      setMoveSlider((e.target.value - 510) / valueSlider)

    }
    if(e.target.value < 510){
      setMoveSlider((e.target.value - 510) / valueSlider)
    }
    console.log(currentPrice , minPrice, maxPrice)
  }
  return <div className="slider-price">
    <div className="slider-price-head"  style={{ left : `calc((var(--width-slide-price) - 14px) * ${moveSlider})`}}>
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