import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
import Hatbazarup from './pages/Hatbazarup';
import Login from './pages/Login';
import Otp from './pages/Otp';
import Preview from './pages/Preview'
import Preview1 from './pages/Preview1';
import Productbycat  from './pages/Productbycat';
import Products from './pages/Products';
import Que from './pages/Que';
import Test from './pages/Test';
import Update from './pages/Update';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/Hatbazaar" component={Hatbazaar}/>
      <Route path="/Services" component={Services}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Cart" component={Cart}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Hatbazaarpreview" component={Hatbazaarpreview}/>
      <Route path="/Hatbazaarpreview1" component={Hatbazaarpreview1}/>
      <Route path="/Hatbazaarpreview2" component={Hatbazaarpreview2}/>
      <Route path="/Hatbazaarpreview3" component={Hatbazaarpreview3}/>
      <Route path="/Hatbazarup" component={Hatbazarup}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Otp" component={Otp}/>
      <Route path="/Preview" component={Preview}/>
      <Route path="/Preview1" component={Preview1}/>
      <Route path="/Productbycat" component={Productbycat}/>
      <Route path="/Products" component={Products}/>
      <Route path="/Que" component={Que}/>
      <Route path="/Test" component={Test}/>
      <Route path="/Update" component={Update}/>
      

    </div>
  </Router>

);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
