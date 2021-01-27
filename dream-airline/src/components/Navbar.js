import react,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar=({showLogin,setShowLogin})=>{
  const toggleLogin=()=>{
    if(showLogin === false) setShowLogin(true);
    else setShowLogin(false);
  }
  return(
    <div className="nav-frame">
      <div className="nav">
        <div className="nav-logo">
          <span className="nav-logo-brand">D</span>
          <span className="nav-logo-brand">R</span>
          <span className="nav-logo-brand">E</span>
          <span className="nav-logo-brand">A</span>
          <span className="nav-logo-brand">M</span>
          <span className="nav-logo-text">Ariline</span>
          <i class="fas fa-fighter-jet"></i>
        </div>
        <div className="nav-list">
          <Link to="/" className="nav-list-child">Flight</Link>
          <Link to="/Hotel" className="nav-list-child">Hotel</Link>
          <Link to="/Promo" className="nav-list-child">Promo</Link>
          <Link to="/Orders" className="nav-list-child">Orders</Link>
          <Link to="/Price" className="nav-list-child">Price</Link>
          <Link to="/Promo" className="nav-list-child">
            More
            <i class="fas fa-angle-down"></i>
          </Link>   
        </div>
        <div className="nav-price">
          <button className="nav-language">
            <i class="fas fa-globe-europe"></i>
            <span>EN</span>        
            <i class="fas fa-angle-down"></i>
          </button>
          <button className="nav-currency">
            <i class="fas fa-coins"></i>
            <span>VND</span>     
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
        <div className="nav-human">
          <button type="button" onClick={toggleLogin} className="nav-login-btn">Login</button>
          <button className="nav-register-btn">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar