import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Otp extends React.Component{
    render(){
        return(
            <div>
                <div className="wrap">
          <div className="header_top">
            <div className="logo">
              <a> <Link to="/"></Link><img src="assets/images/logo.png" alt="" /></a>
            </div>
            <div className="header_top_right">
              <div className="search_box">
                <form>
                  <input type="text" defaultValue="আপনি কি খুঁজছেন?........." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'আপনি কি খুঁজছেন?.........';}" /><input type="submit" defaultValue="সার্চ করুন" />
                </form>
              </div>
              <div className="shopping_cart">
              <div className="cart"><a> <Link to="/Update">বাজার আপডেট</Link></a>
              </div>
              </div>
              <div className="clear" />
            </div>
            <div className="clear" />
          </div>
          <div className="menu">
            <ul id="dc_mega-menu-orange" className="dc_mm-orange">
            <center><a>-</a></center>

              <div className="clear" />
            </ul>
          </div>
          <div className="main"><center>
              <div className="content">
                <div className="login_panel">
                  <h3>OTP লিখুন</h3>
                  <form action="/Home" method="get" id="member">
                    <input name="Domain" type="text" defaultValue="" className="field" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'OTP';}" />
                    <div className="buttons"><div><button className="grey">কনফার্ম করুন</button></div></div>
                  </form></div>
                <div className="clear" />
              </div>
            </center></div>
        </div>
        <div className="footer">
          <div className="wrapper">	
            <div className="section group">
              <div className="col_1_of_4 span_1_of_4">
                <h4>তথ্য</h4>
                <ul>
                  <li><a href="#">আমাদের সম্পর্কে জানুন</a></li>
                  <li><a href="#">অর্ডার এবং রিটার্ন পলিসি</a></li>
                </ul>
              </div>
              <div className="col_1_of_4 span_1_of_4">
                <h4>সেবা</h4>
                <ul>
                  <li><a href="about.html">আমাদের সেবা সম্পর্কে  জানুন</a></li>
                  <li><a href="#">কাস্টমার সার্ভিস</a></li>
                  <li><a href="#">প্রাইভেসি পলিসি</a></li>
                </ul>
              </div>
              <div className="col_1_of_4 span_1_of_4">
                <h4>একাউন্ট</h4>
                <ul>
                  <li><a href="#">লগ ইন</a></li>
                  <li><a href="#">হেল্প</a></li>
                </ul>
              </div>
              <div className="col_1_of_4 span_1_of_4">
                <h4>যোগাযোগ</h4>
                <ul>
                  <li><span>+8801780313347</span></li>
                </ul>
                <div className="social-icons">
                  <h4>আমাদের অনুসরণ করুন</h4>
                  <ul>
                    <li className="facebook"><a href="#" target="_blank"> </a></li>
                    <li className="twitter"><a href="#" target="_blank"> </a></li>
                    <li className="googleplus"><a href="#" target="_blank"> </a></li>
                    <li className="contact"><a href="#" target="_blank"> </a></li>
                    <div className="clear" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="copy_right">
              <p>চাষী ©  সর্বস্বত্ব সংরক্ষিত </p>
            </div>
          </div>
        </div>
      </div>
    );
  }



}
export default Otp