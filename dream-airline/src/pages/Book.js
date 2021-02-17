import React,{useContext} from 'react';
import ContactInfor from '../components/ContactInfor'
import TravelerInfor from '../components/TravelerInfor'
import BookProcedure from '../components/BookProcedure'
import HeadProcedure from '../components/HeadProcedure'
import './Book.css';
import {Link} from 'react-router-dom'
import {FlyContext} from '../context';

const Book =() =>{
  const context = useContext(FlyContext);
  return(
    <div className="book-frame margin-bottom-text">
      <div className="book">
        <div className="book-head">
          <BookProcedure></BookProcedure>
        </div>
        <div className="book-body">
          <div className="book-body-1">
            <ContactInfor></ContactInfor>
            <TravelerInfor></TravelerInfor>
          </div>
          <div className="book-body-2">
            <div className="book-flight-detail box-shadow-frame margin-bottom-text">
              <div className="book-flight-head">
                <span className="choose-flight-text-big margin-left-text">Flight</span>
                <Link className="book-text-detail margin-right-text" to="/">Detail</Link>
              </div>
              <div className="book-flight-depart">
                <div className="book-flight-depart-flex margin-left-text">
                  <span className="choose-flight-text-normal">Depart Flight</span>
                  <span className="choose-flight-text-blur">{context.nameDay}, {context.day} {context.nameMonth} {context.yearNow}</span>
                </div>
                <div className="book-flight-depart-flex margin-left-text">
                  <span className="choose-flight-text-normal">Vietnam Airline</span>
                  <span className="choose-flight-text-blur">Boeing 747</span>
                </div>
              </div>
              <div className="book-flight-time">
                <div className="book-time">
                  <div className="graph-go">
                    <div className="point-start"></div>
                    <div className="line-go"></div>
                    <div className="point-end"></div>
                  </div>
                  <div className="detail-trip-flex">
                    <div className="choose-flight-list-child-detail-child">
                      <span className="choose-flight-text-big margin-top-text">{context.dataChoice.departureTime}</span>
                      <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
                    </div>
                    <div>
                      <i class="far fa-clock"></i>
                      <span className="choose-flight-text-small">{Math.floor(context.dataChoice.flightTime)}h {(context.dataChoice.flightTime - Math.floor(context.dataChoice.flightTime)) * 60}m</span>
                    </div>
                    <div className="detail-trip-child">
                      <span className="choose-flight-text-big">{context.dataChoice.destinationTime}</span>
                      <span className="choose-flight-text-small margin-bottom-text">{context.day} {context.nameMonth} {context.yearNow}</span>
                    </div>
                  </div>
                  <div className="detail-trip-flex">
                    <div className="detail-trip-child">
                      <span className="choose-flight-text-normal margin-top-text">{context.dataChoice.name} ({context.dataChoice.id})</span>
                      <span className="choose-flight-text-blur">{context.dataChoice.airport}</span>
                    </div>
                    <div className="detail-trip-child">
                      <span className="choose-flight-text-normal">{context.dataChoice.to} ({context.dataChoice.toId})</span>
                      <span className="choose-flight-text-blur margin-bottom-text">{context.dataChoice.toAirline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-price">
              <div className="book-price-head box-shadow-frame ">
                <div className="detail-trip-price-topic">
                  <span className="choose-flight-text-bold margin-left-text">Price detail</span>          
                </div>
                <div className="detail-trip-depart">
                  <div>
                    <span className="detail-trip-text-small-bold margin-left-text">Depart </span>
                    <span className="detail-trip-text-small-bold">({context.dataChoice.id}</span>
                    <i class="fas fa-arrow-right"></i>
                    <span className="detail-trip-text-small-bold">{context.dataChoice.toId})</span>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                  <span className="detail-trip-text-small-bold margin-right-text">{context.dataChoice.currency} {context.dataChoice.price * context.traveler}</span>
                </div>
              </div>
              <div className="book-total box-shadow-frame ">
                <span className="choose-flight-text-bold margin-left-text">Total Price</span>
                <span className="choose-flight-text-bold margin-right-text">{context.dataChoice.currency} {context.dataChoice.price * context.traveler}</span>
              </div>
            </div>
            <Link className="book-continue">
                <button className="detail-trip-btn btn-red-white margin-top-text">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book;