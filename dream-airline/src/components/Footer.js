import react,{useState,useEffect} from 'react'
import "./Footer.css";
import $ from 'jquery';

const Footer =()=>{
  const [showErrorMessage, setShowErrorMessage] =useState(false);
  const hideErrorMessage =()=>{
    $('.fill-none').hide();
    $('.wrong-format').hide();
  }
  const SubEmail=()=>{
    if($('.footer-body-sub-input').val() === ''){
      hideErrorMessage();
      $('.fill-none').show();
    }
    if($('.footer-body-sub-input').val() !== ''){
      hideErrorMessage();
      $('.wrong-format').show();
    }
  }
  const fillEmail =()=>{
    hideErrorMessage();
  }
  return(
    <div className="">
      <div className="footer-head-frame">
        <div className="footer-head">
          <div className="footer-head-child">
            <i class="fas fa-hotel"></i>
            <div>
              <span>Over 1.3 M hotels!</span>
              <span>... and we're counting :D</span>
            </div>
          </div>
          <div className="footer-head-child">
            <i class="fas fa-check"></i>
            <div>
              <span>The best locations</span>
              <span>Recommended by travellers</span>
            </div>
          </div>
          <div className="footer-head-child">
            <i class="fas fa-phone-volume"></i>
            <div>
              <span>Phone support</span>
              <span>We're waiting for your call</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-body-frame">
        <div className="footer-body">
          <div className="footer-body-head">
            <img src="https://cdn.airpaz.com/nuxt/img/en.f5276dd.png" className="footer-body-bigimg"></img>
            <div className="footer-body-head-app">
              <h2>Download DreamAirline App Now,
              <br></br>Book hotel and flight ticket without a hassle!</h2>
              <div className="footer-body-app">
                <a href="">
                  <img src="https://cdn.airpaz.com/nuxt/img/playstore.c68e1c2.svg"></img>
                </a>
                <a href="">
                  <img src="https://cdn.airpaz.com/nuxt/img/appstore.e374ae7.svg"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-body-sub">
            <div className="footer-body-sub-topic">
              <span>Sign Up for Newsletter</span>
              <span>Subscribe to get deals & update in your email</span>
            </div>
            <input placeholder="Enter Email Address" onInput={fillEmail} className="footer-body-sub-input"></input>
            <button className="footer-body-sub-btn" onClick={SubEmail}>SUBSCRIBE</button>
            <div className="footer-body-sub-error  fill-none">
              <i class="fas fa-exclamation-triangle"></i>
              <span className="footer-body-sub-error-content">Please fill email</span>
            </div>
            <div className="footer-body-sub-error wrong-format">
              <i class="fas fa-exclamation-triangle"></i>
              <span className="footer-body-sub-error-content">Wrong "Email" format</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer-frame">
        <div className="footer-footer">
          <div className="footer-footer-child">
            <span className="footer-footer-topic">DREAM</span>
            <div className="footer-footer-topic-text">
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Promo</a>
              <a href="">Airline information</a>
              <a href="">All Flights</a>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Account</span>
            <div div className="footer-footer-topic-text">
              <a href="">Sign Up</a>
              <a href="" >Forgot Password</a>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Support</span>
            <div div className="footer-footer-topic-text">
              <a href="" >FAQ</a>
              <a href="" >Help Center</a>
              <a href="" >Terms Of Use</a>
              <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Follow Us</span>
              <div className="footer-footer-topic-follow">
                <a href="" className="footer-footer-topic-follow-fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" className="footer-footer-topic-follow-insta">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div className="footer-footer-topic-follow">
                <a href="" className="footer-footer-topic-follow-yt">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="" className="footer-footer-topic-follow-tw">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
          </div>
          <div className="footer-footer-child footer-footer-child-app">
            <span className="footer-footer-topic">Our app</span>
            <div className="footer-body-app footer-footer-topic-app">
                <a>
                  <img src="https://cdn.airpaz.com/nuxt/img/playstore.c68e1c2.svg"></img>
                </a>
                <a>
                  <img src="https://cdn.airpaz.com/nuxt/img/appstore.e374ae7.svg"></img>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last-frame">
        <div className="footer-last">
          <span>Copyright 2021 ©DREAM-Airline.eu. All rights reserved.</span>
          <span>All logos, patents, and trademarks belong to their respective owners</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;