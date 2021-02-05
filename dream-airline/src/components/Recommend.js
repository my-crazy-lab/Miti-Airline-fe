import react from 'react';
import "./Recommend.css";
import {appData} from "../data";
import $ from 'jquery';

const Recommend =() =>{
  return(
    <div className="recommend-frame">
      <div className="recommend">
        <span className="recommend-head">Recommended for you</span>
        <div className="recommend-list">
          {appData.flyData.map(fly => {
            return <div className="recommend-list-row-frame" style={{ backgroundImage : `${fly.img}`,  backgroundSize :"cover"}}>
            <div className="recommend-list-row recommend-list-row-child">
              <div className="recommend-list-row-child-topic">
                <span>From {fly.from}</span>
                <div className="recommend-list-row-child-topic-icon">
                  <i class="fas fa-plane"></i>
                  <span>{fly.to} City</span>
                </div>
                <div className="recommend-list-row-child-topic-line"></div>
              </div>
              <div className="recommend-list-row-child-topic-show">
                <div className="recommend-list-row-child-topic price">
                  <span>Start from</span>
                  <span>{fly.price}</span>
                </div>
                <i class="fas fa-angle-double-right"></i>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>    
    </div>
  )
}
export default Recommend;