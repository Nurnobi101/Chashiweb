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
                <div className="cart">
                  <a href="cart.html" title="View my shopping cart" rel="nofollow">
                    <span className="cart_title">কার্ট<span>
                        <span className="no_product">(শূন্য)</span>
                      </span></span></a>
                </div>
              </div>
              <div className="login"><a href="login.html"> লগ ইন</a></div>
              <div className="clear" />
            </div>
            <div className="clear" />
          </div>
          <div className="menu">
            <ul id="dc_mega-menu-orange" className="dc_mm-orange">
              <li><a href="index.html">চাষী</a></li>
              <li><a href="hatbazaar.html"> হাটবাজার</a> </li>
              <li><a id="active" href="service.html">সেবা</a></li>
              <li><a href="blog.html">ব্লগ</a> </li>
              <div className="clear" />
            </ul>
          </div>
          <div className="header_bottom">
            <div className="header_bottom_left">
              <div className="heading">
                <h3>সেবা নতুন পণ্য</h3>
              </div>
              <div className="section group">
                <div className="listview_1_of_2 images_1_of_2">
                  <div className="listimg listimg_2_of_1">
                    <a href="cart.html"> <img src="assets/images/p.jpg" alt="" /></a>
                  </div>
                  <div className="text list_2_of_1">
                    <h2>মেডিসিন</h2>
                    <p>ফ্লোরা (১০০ মিলি)</p>
                    <div className="button"><span><a href="cart.html">অর্ডার করুন</a></span></div>
                  </div>
                </div>			
                <div className="listview_1_of_2 images_1_of_2">
                  <div className="listimg listimg_2_of_1">
                    <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  </div>
                  <div className="text list_2_of_1">
                    <h2>কৃষি সার </h2>
                    <p>শক্তি জিংক</p>
                    <div className="button"><span><a href="cart.html">অর্ডার করুন</a></span></div>
                  </div>
                </div>
              </div>
              <div className="section group">
                <div className="listview_1_of_2 images_1_of_2">
                  <div className="listimg listimg_2_of_1">
                    <a href="preview.html"> <img src="assets/images/p2.jpg" alt="" /></a>
                  </div>
                  <div className="text list_2_of_1">
                    <h2>মেডিসিন</h2>
                    <p>সিপিআর (৪ সিপিএ, পিজিআর হরমোন)</p>
                    <div className="button"><span><a href="preview.html">অর্ডার করুন</a></span></div>
                  </div>
                </div>			
                <div className="listview_1_of_2 images_1_of_2">
                  <div className="listimg listimg_2_of_1">
                    <a href="preview.html"><img src="assets/images/p3.jpg" alt="" /></a>
                  </div>
                  <div className="text list_2_of_1">
                    <h2>কৃষি সার </h2>
                    <p>কেঁচো সার</p>
                    <div className="button"><span><a href="preview.html">অর্ডার করুন</a></span></div>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
            <div className="header_bottom_right_images">
              {/* FlexSlider */}
              <section className="slider">
                <div className="flexslider">
                  <ul className="slides">
                    <li><img src="assets/images/slide.jpg" alt="" /></li>
                  </ul>
                </div>
              </section>
              {/* FlexSlider */}
            </div>
            <div className="clear" />
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
                  <div className="button"><span><a href="preview.html" className="details">বিস্তারিত</a></span></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><span><a href="preview.html" className="details">বিস্তারিত</a></span></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><span><a href="preview.html" className="details">বিস্তারিত</a></span></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p.jpg" alt="" /></a>
                  <h2> ফ্লোরা (১০০ মিলি)</h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><span><a href="preview.html" className="details">বিস্তারিত</a></span></div>
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
                  <div className="button"><span><a href="preview1.html" className="details">বিস্তারিত</a></span></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><span><a href="preview1.html" className="details">বিস্তারিত</a></span></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><span><a href="preview1.html" className="details">বিস্তারিত</a></span></div>
                </div>
                <div className="grid_1_of_4 images_1_of_4">
                  <a href="preview.html"><img src="assets/images/p1.jpg" alt="" /></a>
                  <h2>শক্তি জিংক </h2>
                  <p><span className="price">৳৬০০</span></p>   
                  <div className="button"><span><a href="preview1.html" className="details">বিস্তারিত</a></span></div>
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