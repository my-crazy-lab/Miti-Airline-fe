import react from 'react';
import Navbar from '../components/Navbar';
import ListFlight from '../components/ListFlight';
import Head from '../components/Head';


const SearchPlane =() =>{
  return(
    <div>
      <Navbar></Navbar>
      <Head></Head>
      <ListFlight></ListFlight>
    </div>
  )
}

export default SearchPlane;