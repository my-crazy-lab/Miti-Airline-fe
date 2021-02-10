import React from 'react';
import ContactInfor from '../components/ContactInfor'
import './Book.css';

const Book =() =>{
  return(
    <div className="book-frame">
      <div className="book">
        <div>
          <ContactInfor></ContactInfor>
        </div>
      </div>
    </div>
  )
}

export default Book;