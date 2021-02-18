import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';
import Partners from '../components/Partners';
import TopFlight from '../components/TopFlight';
import Head from '../components/Head';
import './PromoList.css';

const PromoList =()=>{
  const context = useContext(FlyContext);
  return(
    <div className="promo-s-frame">
      <div className="promo-s">
        <span className="promo-s-head">Promo List</span>
        <div className="promo-s-list">
          <div className="promo-s-c">
            <div>
              <img className="promo-s-c-img" src="https://cdn.airpaz.com/banner/15102020_5f880792e513b.jpg"></img>
            </div>
            <div>
              <div>
                <Link>Carefree Travelling at Airpaz with Paylater by Indodana everyday. Enjoy special discount up to IDR 500.000</Link>
                <span>Holidays are even more memorable at AIRPAZ with Paylater by Indodana. Enjoy special discounts up to. IDR 500,000.</span>
              </div>
              <Link>
                <button>More Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default PromoList;