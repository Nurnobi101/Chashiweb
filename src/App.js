import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Hatbazaar from './pages/Hatbazaar';
import Service from './pages/Service'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Home/>
        <Hatbazaar/>
        <Service/>
      </Router>
    </div>
   
  );

}
 
export default App;
