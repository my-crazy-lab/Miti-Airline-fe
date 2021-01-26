import react from 'react';
import "./BookTrip.css";
import $ from 'jquery';

const BookTrip =()=>{
  const clickFormBooktrip=()=>{
    $('.booktrip-where-child-1').css('display','block');
  }
  hideOnClickOutside();
  const clickExit = () =>{
    $('.booktrip-where-child-1').css('display','none');
  }
  return(
      <div className="booktrip">
        <div className="booktrip-type">
          <button>One Way</button>
          <button>Round Trip</button>
        </div>
        <div className="booktrip-where">
          <form onClick={clickFormBooktrip}>
            <span>Form</span>
            <input placeholder="Select Departure City"></input>
            <div className="booktrip-where-child-1">
              <div className="booktrip-where-child-head">
                <div>
                  <span >
                    Select Departure City 
                  </span>
                  <button onClick={clickExit} >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <span>VietNam</span>
              </div>
              <div className="booktrip-where-child-list">
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
                <div className="booktrip-where-child-list-child">
                  <i class="fas fa-plane-departure"></i>
                  <div>
                    <span>Ho Chi Minh City, Vietnam</span>
                    <span>Tan Son Nhat International Airport</span>
                  </div>
                  <span>SGN</span>
                </div>
              </div>
            </div>
          </form>
          <button className="booktrip-where-swap">
            <i class="fas fa-retweet"></i>
          </button>
          <form>
            <span>To</span>
            <input placeholder="Select Destination City"></input>
          </form>
        </div>
        <div className="booktrip-day">
          <div>
            <span>Departure Date</span>
            <span>Mon, 25 January 2021</span>
          </div>
          <div>
            <span>Return Date</span>
            <span>Mon, 25 January 2021</span>
          </div>
        </div>
        <div className="booktrip-traveler">
          <span>Traveler</span>
          <span>1 Traveler</span>
        </div>
        <button className="booktrip-search">Search</button>
      </div>

  )
}

export default BookTrip;
export function hideOnClickOutside(selector) {
  const outsideClickListener = (event) => {
    const $target = $(event.target);
    if (!$target.closest(selector).length && $(selector).is(':visible')) {
        $(selector).hide();
        removeClickListener();
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}