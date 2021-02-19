import './App.css';
import { Route, Switch} from "react-router-dom";
import Flight from './pages/Flight';
import Hotel from './pages/Hotel';
import SearchPlane from './pages/SearchPlane';
import Orders from './pages/Orders';
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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component ={Home}></Route>
        <Route exact path="/Flight" component ={Flight}></Route>
        <Route exact path="/Flight/confirm" component ={ConfirmTrip}></Route>
        <Route exact path="/Flight/book" component ={Book}></Route>
        <Route exact path="/Flight/payment" component ={Payment}></Route>
        <Route exact path="/Flight/payment/creditCard" component ={CreditCard}></Route>
        <Route exact path="/Flight/payment/debitCard" component ={DebitCard}></Route>
        <Route exact path="/Hotel/" component ={Hotel}></Route>
        <Route exact path="/SearchPlane/" component ={SearchPlane}></Route>
        <Route exact path="/Promo/" component ={Promo}></Route>
        <Route exact path="/Promo/view" component ={PromoView}></Route>
        <Route exact path="/Price/" component ={Price}></Route>
        <Route component ={Error}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
