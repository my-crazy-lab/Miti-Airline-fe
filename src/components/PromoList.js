import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import './PromoList.css';

const PromoList =()=>{
  const context = useContext(FlyContext);
  const clickPromo =(link)=>{
    context.setChoosePromo(context.appData.promo.find(data => data.link === link));
  }
  return(
    <div className="promo-s-frame">
      <div className="promo-s">
        <span className="promo-s-head">{context.thisLanguage.promoList}</span>
        <div className="promo-s-list">
        {
          context.appData.promo.map(data=> {
            return <div className="promo-s-c box-shadow-frame border-radius-4 margin-top-text margin-left-text">
            <div>
              <div className="promo-s-c-img" style={{backgroundImage: `url(${data.img})`}}></div>
            </div>
            <div className="promo-s-c-b-frame">
              <div className="promo-s-c-b">
                <div className="promo-s-c-b-text">
                  <Link onClick={()=>clickPromo(data.link)} to="/Promo/view" className="promo-text-bold margin-top-text">{data.link}</Link>
                  <span className="promo-text-small promo-overflow-text-small">{data.text}</span>
                </div>
                <div className="promo-s-c-time margin-top-text margin-bottom-text">
                  <div className="promo-s-c-time-c">
                    <span className="promo-text-blur-small">{context.thisLanguage.promoPeriod}</span>
                    <span className="promo-text-bold-small">{data.promoPeriod}</span>
                  </div>
                  <div className="promo-s-c-time-c">
                    <span className="promo-text-blur-small">{context.thisLanguage.travelPeriod}</span>
                    <span className="promo-text-bold-small">{data.travelerPeriod}</span>
                  </div>
                </div>
                <Link to="/Promo/view">
                  <button onClick={()=>clickPromo(data.link)} className="promo-btn-moreD border-radius-4 margin-bottom-text">{context.thisLanguage.moreDetail}</button>
                </Link>
              </div>
            </div>
          </div>
          })
        }
        </div>
      </div>    
    </div>
  )
}

export default PromoList;