import React,{useContext} from 'react';
import "./Recommend.css";
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'

const Recommend =() =>{
  const context = useContext(FlyContext);

  const chooseRecommend=(id, toId)=>{
    context.setChooseTrip(true)
    context.setTrip(context.appData.flyData.find(data => data.id === id && data.toId === toId))
  }
  return(
    <div className="recommend-frame">
      <div className="recommend">
        <span className="recommend-head">{context.thisLanguage.recommend}</span>
        <div className="recommend-list">
          {context.appData.flyData.map(fly => {
            return <Link to="/SearchPlane" onClick={() => chooseRecommend(fly.id, fly.toId)} className="recommend-list-row-frame" style={{ backgroundImage : `${fly.img}`,  backgroundSize :"cover"}}>
              <div className="recommend-list-row recommend-list-row-child">
                <div className="recommend-list-row-child-topic">
                  <span>{context.thisLanguage.from} {fly.from}</span>
                  <div className="recommend-list-row-child-topic-icon">
                    <i class="fas fa-plane"></i>
                    <span>{fly.to} City</span>
                  </div>
                  <div className="recommend-list-row-child-topic-line"></div>
                </div>
                <div className="recommend-list-row-child-topic-show">
                  <div className="recommend-list-row-child-topic price">
                    <span>{context.thisLanguage.startFrom}</span>
                    <span>{context.symbol} {(fly.price * context.convert).toFixed(2)}</span>
                  </div>
                  <i class="fas fa-angle-double-right"></i>
                </div>
              </div>
            </Link>
          })}
        </div>
      </div>    
    </div>
  )
}
export default Recommend;