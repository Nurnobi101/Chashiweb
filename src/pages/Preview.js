import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Preview extends React.Component{
    render(){
        return(
            <div>
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
            <li class ="active"><Link to="/Home">চাষী</Link></li>
            <li> <Link to="/Hatbazaar">হাটবাজার</Link> </li>
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
                    <img src="assets/images/p.jpg" alt="" />
                  </div>
                  <div className="desc span_3_of_2">
                    <h2> ফ্লোরা (১০০ মিলি)</h2>
                    <p><span className="price">৳৬০০</span></p>   
                  </div>
                  <div className="add-cart">
                    <form action="/cart" method="post">
                      <input type="number" className="buyfield" name defaultValue={1} />
                      <input type="অর্ডার করুন" className="buysubmit" name="অর্ডার করুন" defaultValue="অর্ডার করুন" />
                    </form>				
                  </div>
                </div>
                <div className="product-desc">
                  <h2>পণ্যের বিবরণ</h2>
                  <p>ফ্লোরা﻿
                    ধান, সবজি, ফুল আর ফলে; বাড়বে ফলন ফ্লোরা দিলে।
                    ফ্লোরা একটি তরল জাতীয় বহুগুণ সম্পন্ন পণ্য যা ব্যবহারে একদিকে গাছের শিকড়, পাতা ও কান্ডের খাদ্যসঞ্চয়ের ক্ষমতা বাড়ে অপরদিকে, উদ্ভিদের ফুল ও ফলের ফলন বৃদ্ধি হয়।ফ্লোরা কোনোভাবেই সরাসরি কীটপতঙ্গ ধ্বংস করেনা তবে এটি ব্যবহারে গাছ শক্তিশালী হয়ে উঠে যার ফলে গাছের রোগ প্রতিরোধ ক্ষমতা বেড়ে যায়।
                    পানিতে সহজে মিশে যাওয়ার উপযোগী এ পণ্যটি ব্যবহারে বিভিন্ন ফসলে বিভিন্ন রকম সুবিধা বা উপকারীতা পাওয়া গেলেও ফ্লোরার মূল কাজ হলো ফলন বর্ধক হিসেবে কাজ করা। ফসল ভেদে ফ্লোরা ব্যবহারে ২০-৪০% পর্যন্ত নিশ্চিত ফলন বৃদ্ধি হয় যা কৃষক পর্যায়ে প্রমানিত এবং সর্বজন স্বীকৃত। ফ্লোরা এ সি আই ক্রপ কেয়ার এর সবচেয়ে জনপ্রিয় ব্র্যান্ড গুলোর মধ্যে একটি যেটি কৃষক পর্যায়ে এক নামে চেনে।
                    ফ্লোরা অত্যন্ত নিরাপদ একটি পণ্য যার কোন রকম পার্শ্বপ্রতিক্রিয়া নেই। এ পণ্যটি ফসলের জমিতে, আবাদী যেকোনো জলাশয় সহ সকল ধরনের কৃষি জমিতে ব্যবহার করা যায়। এছাড়াও, বারান্দা এবং ছাদ বাগানেও ফ্লোরা নিশ্চিন্তে ব্যবহার উপযোগী।</p>
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
        )
    }
}
export default Preview