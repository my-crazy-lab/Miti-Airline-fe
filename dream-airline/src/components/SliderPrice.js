import React,{useState, useEffect, useContext} from 'react'
import "./SliderPrice.css"
import $ from 'jquery' ;
import {FlyContext} from '../context';

const SliderPrice =({currentPrice})=>{
  const context = useContext(FlyContext)
  const [moveSlider, setMoveSlider] = useState(0)
  const valueSlider =context.maxPrice - context.minPrice ;
  useEffect(() => {
    context.setMinPrice(Math.min(...context.appData.listPrice) * context.convert)
    context.setMaxPrice(Math.max(...context.appData.listPrice) * context.convert)
  },[])
  const changePrice =(e)=>{
    context.setCurrentPrice(e.target.value)
    if(e.target.value >= (510 * context.convert)){
      setMoveSlider((e.target.value - (510 * context.convert)) / valueSlider)
    }
    if(e.target.value < (510 * context.convert)){
      setMoveSlider((e.target.value - (510 * context.convert)) / valueSlider)
    }
    context.setListData(context.appData.flyData.filter(data => data.price <= (e.target.value / context.convert)))
    console.log(currentPrice , context.minPrice, context.maxPrice)
  }
  return <div className="slider-price">
    <div className="slider-price-head"  style={{ left : `calc((var(--width-slide-price)) * ${moveSlider})`}}>
      <span>{context.currentPrice}</span>
    </div>
    <div className="slider-price-body">
      <div className="slider-price-value-left choose-flight-text-normal">{context.minPrice}</div>
      <input onChange={changePrice} type="range" min={context.minPrice} step ={valueSlider / 20} max={context.maxPrice} value={currentPrice}></input>
      <div className="slider-price-value-right choose-flight-text-normal">{context.maxPrice}</div>
    </div>
  </div>
}

export default SliderPrice