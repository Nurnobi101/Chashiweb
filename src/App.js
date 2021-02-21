import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Hatbazaar from './pages/Hatbazaar';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Hatbazaarpreview from './pages/Hatbazaarpreview';
import Hatbazaarpreview1 from './pages/Hatbazaarpreview1';
import Hatbazaarpreview2 from './pages/Hatbazaarpreview2';
import Hatbazaarpreview3 from './pages/Hatbazaarpreview3';
import Hatbazaarup from './pages/Hatbazaarup';
import Login from './pages/Login';
import Otp from './pages/Otp';
import Preview from './pages/Preview'
import Preview1 from './pages/Preview1';
import Productbycat  from './pages/Productbycat';
import Products from './pages/Products';
import Que from './pages/Que';
import Test from './pages/Test';
import Update from './pages/Update';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Home/>
        <Hatbazaar/>
        <Services/>
        <Blog/>
        <Cart/>
        <Contact/>
        <Hatbazaarpreview/>
        <Hatbazaarpreview1/>
        <Hatbazaarpreview2/>
        <Hatbazaarpreview3/>
        <Hatbazaarup/>
        <Login/>
        <Otp/>
        <Preview/>
        <Preview1/>
        <Productbycat/>
        <Products/>
        <Que/>
        <Test/>
        <Update/>


      </Router>
    </div>
   
  );

}
 
export default App;
