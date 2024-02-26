import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {FlyProvider} from './context'

ReactDOM.render(
  <FlyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </FlyProvider>,
  document.getElementById('root')
);




