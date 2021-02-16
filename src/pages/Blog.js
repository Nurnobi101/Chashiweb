import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Blog extends React.Component{
    render(){
        return(
            <div>
                 <div className="wrap">
        <div className="header_top">
          <div className="logo">
            <a href="index.html"><img src="images/logo.png" alt="" /></a>
          </div>
          <div className="header_top_right">
            <div className="search_box">
              <form>
                <input type="text" defaultValue="আপনি কি খুঁজছেন?........." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'আপনি কি খুঁজছেন?.........';}" /><input type="submit" defaultValue="সার্চ করুন" />
              </form>
            </div>
            <div className="shopping_cart">
              <div className="cart">
                <a href="update.html" title="View my shopping cart" rel="nofollow">
                  <span className="cart_title">বাজার আপডেট</span>
                </a>
              </div>
            </div>
            <div className="login"><a href="login.html"> লগ ইন</a></div>
            <div className="clear" />
          </div>
          <div className="clear" />
        </div>
        <div className="menu">
          <ul id="dc_mega-menu-orange" className="dc_mm-orange">
            <li><a id="active" href="index.html">চাষী</a></li>
            <li><a href="hatbazaar.html"> হাটবাজার</a> </li>
            <li><a href="service.html">সেবা</a></li>
            <li><a href="blog.html">ব্লগ</a> </li>
            <div className="clear" />
          </ul>
        </div>
        <div className="header_bottom clear">
          <div className="Catagoryblog clear"><center>
              <h1>রিসেন্ট পোস্ট</h1>
              <ul>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
              </ul>
            </center><br />
            <center>
              <h1>টপ পোস্ট</h1>
              <ul>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
                <li><a href="#">পোস্ট নাম</a></li>
              </ul>
            </center></div>
          <div className="main_contantblog clear">
            <div className="top-blog ">
              <center><h1>চাষী ব্লগ </h1><h1 /></center>
            </div>
            <div className="samepostblog clear">
              <h2><a href>কাউন চাষ </a></h2>
              <h4>১০/২৬/২০২০<a href="#">এস এম নূরনবী</a></h4>
              <a href="#"><img src="images/kaun.jpg" alt="post image" /></a>
              <p>কাউন হচ্ছে পুষ্টিকর দানা জাতীয় খাদ্য। কাউন দিয়ে বিভিন্ন সুস্বাদু খাবার যেমন-পায়েস তৈরি করা হয়। বিস্কুট তৈরিতে কাউন ব্যবহার করা হয়। তাই দানা জাতীয় ফসল হিসেবে কাউনের চাহিদা শহর গ্রাম সবখানেই আছে। কাউন চাষ করে পারিবারিক পুষ্টির চাহিদা পূরণের পাশাপাশি অতিরিক্ত উৎপাদন বাজারে বিক্রি করে বাড়তি আয় করাও সম্ভব। এছাড়া দেশের চাহিদা মেটানোর পর অতিরিক্ত উৎপাদন বিদেশে রপ্তানি করা সম্ভব। এক্ষেত্রে বিভিন্ন রপ্তানিকারক প্রতিষ্ঠান সহায়তা দিয়ে থাকে। কাউন বিদেশে রপ্তানি করার জন্য এসব প্রতিষ্ঠানের সাথে যোগাযোগ করা যেতে পারে।</p>
              <div className="readmoreblog clear">
                <a href="post.html">Read More</a>
              </div>
              <div>
                <button className="btn answer"> 
                  <a href="preview.html">মন্তব্য করুন</a>
                </button>
              </div>
              <br />
              <h2><a href>কাউন চাষ </a></h2>
              <h4>১০/২৬/২০২০<a href="#">মাহফুজা সুলতানা</a></h4>
              <a href="#"><img src="images/kaun.jpg" alt="post image" /></a>
              <p>কাউন হচ্ছে পুষ্টিকর দানা জাতীয় খাদ্য। কাউন দিয়ে বিভিন্ন সুস্বাদু খাবার যেমন-পায়েস তৈরি করা হয়। বিস্কুট তৈরিতে কাউন ব্যবহার করা হয়। তাই দানা জাতীয় ফসল হিসেবে কাউনের চাহিদা শহর গ্রাম সবখানেই আছে। কাউন চাষ করে পারিবারিক পুষ্টির চাহিদা পূরণের পাশাপাশি অতিরিক্ত উৎপাদন বাজারে বিক্রি করে বাড়তি আয় করাও সম্ভব। এছাড়া দেশের চাহিদা মেটানোর পর অতিরিক্ত উৎপাদন বিদেশে রপ্তানি করা সম্ভব। এক্ষেত্রে বিভিন্ন রপ্তানিকারক প্রতিষ্ঠান সহায়তা দিয়ে থাকে। কাউন বিদেশে রপ্তানি করার জন্য এসব প্রতিষ্ঠানের সাথে যোগাযোগ করা যেতে পারে।</p>
              <div className="readmoreblog clear">
                <a href="post.html">Read More</a>
              </div>
              <div>
                <button className="btn answer"> 
                  <a href="preview.html">মন্তব্য করুন</a>
                </button>
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
export default Blog