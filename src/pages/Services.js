import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Services extends React.Component{
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
              <div className="cart"><a> <Link to="/Cart">কার্ট(শূন্য</Link></a>
              </div>
            </div>
            <div className="login"><a> <Link to="/">লগ আউটস</Link></a></div>
              <div className="clear" />
            </div>

            <div className="clear" />
          </div>
          <div className="menu">
            <ul id="dc_mega-menu-orange" className="dc_mm-orange">
            <li><Link to="/">চাষী</Link></li>
            <li> <Link to="/Hatbazaar">হাটবাজার</Link> </li>
            <li><Link to="/Services">সেবা</Link></li>
            <li><Link to="/Blog">ব্লগ </Link> </li>
              <div className="clear" />
            </ul>
          </div>
          <div className="main">
            <div className="content">
              <div className="content_top">
                <div className="heading">
                  <h3>মেডিসিন</h3>
                </div>
                <div className="clear" />
              </div>
              <div className="section group">
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p> 
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>  
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
                </div>
              </div>
              <div className="content_bottom">
                <div className="heading">
                  <h3>কৃষি সার</h3>
                </div>
                <div className="clear" />
              </div>
              <div className="section group">
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><a><Link to="/Preview">বিস্তারিত</Link></a></div>
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
              <p>চাষা ©  সর্বস্বত্ব সংরক্ষিত </p>
              </div>
          </div>
        </div>
      </div>
    );

	}
}
 

export default Services