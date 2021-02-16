import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Hatbazaar from './pages/Hatbazaar';
import Service from './pages/Service';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/hatbazaar" component={Hatbazaar}/>
      <Route path="/service" component={Service}/>
    </div>
  </Router>

);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
