import react,{useState, useEffect} from 'react'
import "./SliderPrice.css"
import {appData} from "../data";
import $ from 'jquery' ;

const SliderPrice =({setMinPrice,setMaxPrice,maxPrice,minPrice,convert, setListData ,currentPrice , setCurrentPrice})=>{
  const [moveSlider, setMoveSlider] = useState(0)
  const valueSlider =maxPrice - minPrice ;
  useEffect(() => {
    setMinPrice(Math.min(...appData.listPrice) * convert)
    setMaxPrice(Math.max(...appData.listPrice) * convert)
  },[])
  const changePrice =(e)=>{
    setCurrentPrice(e.target.value)
    if(e.target.value >= (510 * convert)){
      setMoveSlider((e.target.value - (510 * convert)) / valueSlider)
    }
    if(e.target.value < (510 * convert)){
      setMoveSlider((e.target.value - (510 * convert)) / valueSlider)
    }
    setListData(appData.flyData.filter(data => data.price <= (e.target.value / convert)))
    console.log(currentPrice , minPrice, maxPrice)
  }
  return <div className="slider-price">
    <div className="slider-price-head"  style={{ left : `calc((var(--width-slide-price)) * ${moveSlider})`}}>
      <span>{currentPrice}</span>
    </div>
    <div className="slider-price-body">
      <div className="slider-price-value-left">{minPrice}</div>
      <input onChange={changePrice} type="range" min={minPrice} step ={valueSlider / 20} max={maxPrice} value={currentPrice}></input>
      <div className="slider-price-value-right">{maxPrice}</div>
    </div>
  </div>
}

export default SliderPrice