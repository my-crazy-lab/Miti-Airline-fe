import react from 'react'
import "./Footer.css";

const Footer =()=>{
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
              <h2>Download Airpaz App Now,
              <br></br>Book hotel and flight ticket without a hassle!</h2>
              <div className="footer-body-app">
                <a>
                  <img src="https://cdn.airpaz.com/nuxt/img/playstore.c68e1c2.svg"></img>
                </a>
                <a>
                  <img src="https://cdn.airpaz.com/nuxt/img/appstore.e374ae7.svg"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-body-sub">
            <div>
              <span>Sign Up for Newsletter</span>
              <span>Subscribe to get deals & update in your email</span>
            </div>
            <input placeholder="Enter Email Address"></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-footer-frame">
        <div className="footer-footer">
          <div className="footer-footer-child">
            <span className="footer-footer-topic">DREAM</span>
            <div className="footer-footer-topic-text">
              <span>Home</span>
              <span>About Us</span>
              <span>Promo</span>
              <span>Airline information</span>
              <span>All Flights</span>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Account</span>
            <div div className="footer-footer-topic-text">
              <span>Sign Up</span>
              <span>Forgot Password</span>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Support</span>
            <div div className="footer-footer-topic-text">
              <span>FAQ</span>
              <span>Help Center</span>
              <span>Terms Of Use</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Follow Us</span>
              <div className="footer-footer-topic-follow">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
              </div>
              <div className="footer-footer-topic-follow">
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>
              </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Partners us</span>
            <div>
            </div>
          </div>
          <div className="footer-footer-child">
            <span className="footer-footer-topic">Popular Flight</span>
            <div>
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