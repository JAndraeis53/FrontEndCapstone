import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Buster } from './components/Buster'
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Buster />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);
