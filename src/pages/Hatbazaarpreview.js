import React, {Component} from 'react';
import {Link} from'react-router-dom'


class Hatbazaarpreview extends React.Component{
    render(){
        return(
            <div>
                <div className="wrap">
        <div className="header_top">
          <div className="logo">
            <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
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
            <div className="login"><a> <Link to="/">লগ আউটস</Link></a></div>
            <div className="clear" />
          </div>
          <div className="clear" />
        </div>
        <div className="menu">
          <ul id="dc_mega-menu-orange" className="dc_mm-orange">
          <li><Link to="/Home">চাষী</Link></li>
          <li class ="active"><Link to="/Hatbazaar">হাটবাজার</Link> </li>
          <li><Link to="/Services">সেবা</Link></li>
          <li><Link to="/Blog">ব্লগ </Link> </li>
            <div className="clear" />
          </ul>
        </div>
        <div className="main">
          <div className="content">
            <div className="section group">
              <div className="cont-desc span_1_of_2">				
                <div className="grid images_3_of_2">
                  <img src="assets/images/post.jpg" alt="" />
                </div>
                <div className="desc span_3_of_2">
                  <h2>আলু</h2>
                  <p>ময়মনসিংহ</p>
                  <p><span className="price">৳৩৩০<br /> তারিখ:২৬ অক্টো ২০২০</span></p>
                  <p>ফোন নাম্বার দেখতে নিচে ক্লিক করুন</p>
                  <div className="popup" onclick="myFunction()"><button className="button">+8801XXXXXXXXX</button>
                    <span className="popuptext" id="myPopup"><br />01780313347</span>
                  </div>
                </div>
                <div className="product-desc">
                  <h2>পণ্যের বিবরণ</h2>
                  <p>৩৩ টাকা দরে ১০ কেজি আলু বিক্রি করা হবে</p>
                </div>
              </div>
            </div>
          </div>
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
                
            </div>

        )}
    }

export default Hatbazaarpreview 