import React from 'react';
import ContactInfor from '../components/ContactInfor'
import TravelerInfor from '../components/TravelerInfor'
import './Book.css';

const Book =() =>{
  return(
    <div className="book-frame">
      <div className="book">
        <div>
          <ContactInfor></ContactInfor>
          <TravelerInfor></TravelerInfor>
        </div>
      </div>
    </div>
  )
}

export default Book;