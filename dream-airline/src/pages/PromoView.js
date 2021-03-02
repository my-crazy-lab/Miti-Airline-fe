import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import './PromoView.css';
import $ from 'jquery';

const PromoView =()=>{
  const context = useContext(FlyContext);
  const copyCode =(code)=>{
    var value = document.getElementById(`${code}`)
    const range = document.createRange();
    const selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNodeContents(value);
    selection.addRange(range);
    document.execCommand("copy");
  }
  return(
    <div className="promo-view-frame">
      <div className="promo-view-img margin-top-text" style ={{backgroundImage : `url(${context.choosePromo.img})`}}></div>      
      <div className="promo-view-h">
        <span className="margin-top-text choose-flight-text-big">{context.choosePromo.link}</span>
        <span className="margin-top-text margin-bottom-text choose-flight-text-blur">{context.choosePromo.text}</span>  
        {
          context.choosePromo.topic.map(data=> {
            return <span className="margin-bottom-text choose-flight-text-normal">{data}</span> 
          })
        }   
      </div>
      <div className="promo-view-code-frame">
        <div className="promo-view-code margin-top-text">
        { context.choosePromo.discount.length > 0 ? 
          (context.choosePromo.discount.map(data =>{
            return <div className="promo-view-code-c box-shadow-frame border-radius-4 margin-bottom-text margin-right-text">
            <div className="promo-view-code-c-flex margin-top-text">
              <span className="choose-flight-text-bold">{context.thisLanguage.discount} {context.symbol} {data.priceDiscount}</span>
            </div>
            <div className="promo-view-code-c-flex margin-top-text">Min amount {context.symbol}</div>
            <div className="promo-view-code-c-flex margin-top-text margin-bottom-text">
              <div className="promo-code-d">
                <span className="choose-flight-text-blur promo-code-t" id={data.code}>{data.code}</span>
              </div>
              <button onClick={()=> copyCode(data.code)} className='btn-copy'><i class="far fa-copy"></i>{context.thisLanguage.copy}</button>
            </div>
          </div>
          })):(
            <div>No code</div>
          )
        }
        </div>
      </div>
      <div className="promo-view">
        <div className="promo-view-b margin-top-text">
          <span className="choose-flight-text-big ">{context.thisLanguage.term}</span>
          <ol className="promo-view-ol">
            {
              context.choosePromo.content.map(data =>{
                return <li className="choose-flight-text-normal">{data}</li>
              })
            }
          </ol>
        </div>
        <div className="promo-view-share margin-top-text">
          <span className="promo-text-bold">{context.thisLanguage.share} :</span>
          <di className="promo-view-flex margin-top-text margin-bottom-text ">
            <div className="promo-view-share-c fb"><i class="fab fa-facebook-f"></i></div>
            <div className="promo-view-share-c letter"><i class="fas fa-envelope"></i></div>
            <div className="promo-view-share-c tw"><i class="fab fa-twitter"></i></div>
            <div className="promo-view-share-c phone"><i class="fas fa-phone-volume"></i></div>
          </di>
        </div>
      </div>
    </div>
  )
}

export default PromoView;