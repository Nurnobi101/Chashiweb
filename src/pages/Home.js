import React, {Component} from 'react';
import {Link} from'react-router-dom'


class Home extends React.Component{
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
            <li class ="active"><Link to="/Home">চাষী</Link></li>
            <li> <Link to="/Hatbazaar">হাটবাজার</Link> </li>
            <li><Link to="/Services">সেবা</Link></li>
            <li><Link to="/Blog">ব্লগ </Link> </li>
            <div className="clear" />
          </ul>
        </div>
        <div className="header_bottom clear">
          <div className="Catagory clear"><center>
              <h1>ক্যাটাগরি</h1>
              <ul>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
                <li><a href="#">ক্যাটাগরি নাম</a></li>
              </ul>
            </center>
          </div>
          <div className="main_contant clear">
            <div className="top-blog ">
              <center><h1>চাষী </h1><h1 /></center>
            </div>
            <div> 
              <button className="btn-Asked"> 
                <a><Link to="/Que">প্রশ্ন জিজ্ঞাসা করুন</Link></a>
              </button>
            </div>
            <div className="top-fixed ">
              <h1>টপ সমস্যা</h1><h1>
              </h1></div>
            <div className="samepost clear">
              <form>
                <select>
                  <option value="Category">ক্যাটাগরি</option>
                  <option value="Category1">ক্যাটাগরি নাম</option>
                  <option value="Category2">ক্যাটাগরি নাম</option>
                </select>
                <select>
                  <option value="Status">স্ট্যাটাস</option>
                  <option value="Status1">সমাধান</option>
                  <option value="Status2">অসম্পূর্ণ</option>
                </select>
                <input type="text" placeholder="আপনি কি খুঁজছেন?......" name="search" />
                <button type="submit">সার্চ করুন</button>
              </form>
              <h2><a href>কিসের অভাবে পাতা হলুদ হয়ে যায় </a></h2>
              <h4>25/10, 2020, 12:30 PM, By <a href="#">এস এম নূরনবী</a></h4>
              <a href="#"><img src="assets/images/post1.png" alt="post image" /></a>
              <p>
                পাতা হলুদ হয়ে যায় নাইট্রোজেনের অভাবে ইউরিয়া সারের অভাব হলে গাছের বৃদ্ধি কমে যায়। গাছের পাতা বড় হয় না এবং পাতার রঙ হালকা সবুজ থেকে হলদে সবুজ হয়ে যায়, শেষে পাতা হলুদ হয়ে যায়। ডগার পাতা সবুজ থাকে কিন্তু তার কাছে বা নিচে থাকা পাতাগুলো হলদে সবুজ হয়ে যায়, কিন্তু পাতার শিরাগুলো বেগুনী রঙ ধারণ করে।
              </p>
              <div className="readmore clear">
                <a href="post.html">Read More</a>
              </div>
              <div className="post-answer clear">
                <p>৯৩ টি উত্তর আছে<br />
                </p><p>২৯২ বার দেখা হয়েছে</p>
              </div><br /><br />
              <br /><br />
              <div>
                <button className="btn answer"> 
                  <a href="preview.html">আপনার উত্তরটি দিন</a>
                </button>
              </div>
              <br />
              <h2><a href>কিসের অভাবে পাতা হলুদ হয়ে যায় </a></h2>
              <h4>25/10, 2020, 12:30 PM, By <a href="#">মাহফুজা সুলতানা</a></h4>
              <a href="#"><img src="assets/images/post1.png" alt="post image" /></a>
              <p>
                পাতা হলুদ হয়ে যায় নাইট্রোজেনের অভাবে ইউরিয়া সারের অভাব হলে গাছের বৃদ্ধি কমে যায়। গাছের পাতা বড় হয় না এবং পাতার রঙ হালকা সবুজ থেকে হলদে সবুজ হয়ে যায়, শেষে পাতা হলুদ হয়ে যায়। ডগার পাতা সবুজ থাকে কিন্তু তার কাছে বা নিচে থাকা পাতাগুলো হলদে সবুজ হয়ে যায়, কিন্তু পাতার শিরাগুলো বেগুনী রঙ ধারণ করে।
              </p>
              <div className="readmore clear">
                <a href="post.html">Read More</a>
              </div>
              <div className="post-answer clear">
                <p>৯৩ টি উত্তর আছে<br />
                </p><p>২৯২ বার দেখা হয়েছে</p>
              </div><br /><br />
              <br /><br />
              <div>
                <button className="btn answer"> 
                  <a href="preview.html">আপনার উত্তরটি দিন</a>
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
		)
	}
}
export default Home