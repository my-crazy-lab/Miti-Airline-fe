import './App.css';
import { Route, Routes} from "react-router-dom";
import Flight from './pages/Flight';
import SearchPlane from './pages/SearchPlane';
import Price from './pages/Price';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ConfirmTrip from './pages/ConfirmTrip';
import Book from './pages/Book';
import Payment from './components/Payment';
import CreditCard from './components/CreditCard';
import DebitCard from './components/DebitCard';
import Home from './pages/Home';
import Promo from './pages/Promo';
import PromoView from './pages/PromoView';
import Trips from './pages/Trips';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element ={Home}></Route>
        <Route exact path="/Flight" element ={Flight}></Route>
        <Route exact path="/Flight/confirm" element ={ConfirmTrip}></Route>
        <Route exact path="/Flight/book" element ={Book}></Route>
        <Route exact path="/Flight/payment" element ={Payment}></Route>
        <Route exact path="/Flight/payment/creditCard" element ={CreditCard}></Route>
        <Route exact path="/Flight/payment/debitCard" element ={DebitCard}></Route>
        <Route exact path="/SearchPlane/" element ={SearchPlane}></Route>
        <Route exact path="/trips/" element ={<Trips/>}></Route>
        <Route exact path="/Promo/" element ={Promo}></Route>
        <Route exact path="/Promo/view" element ={PromoView}></Route>
        <Route exact path="/Price/" element ={Price}></Route>
        <Route element ={Error}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
