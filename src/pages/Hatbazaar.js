import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Hatbazaar extends React.Component{
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
        <div className="header_bottom clear">
          <div className="Catagory clear"><center>
              <h1>সকল শ্রেণী</h1>
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
              <center><h1> হাটবাজার </h1><h1 /></center>
            </div>
            <div> 
              <button className="btn-post"> 
                <a><Link to="/Hatbazaarup">আপনার বিজ্ঞাপন দিন</Link></a>
              </button>
            </div>
            <div className="top-location ">
              <form>
                <select>
                  <option value="Category">অবস্থান নির্বাচন করুন</option>
                  <option value="Category1">ঢাকা</option>
                  <option value="Category2">চট্টগ্রাম</option>
                  <option value="Category3">সিলেট</option>
                  <option value="Category2">খুলনা</option>
                  <option value="Category1">বরিশাল</option>
                  <option value="Category2">রাজশাহী</option>
                  <option value="Category1">রংপুর</option>
                  <option value="Category2">ময়মনসিংহ</option>
                </select>
                <select>
                  <option value="Status">শ্রেণী নির্বাচন করুন</option>
                  <option value="Status1">ক্যাটাগরি নাম</option>
                  <option value="Status2">ক্যাটাগরি নাম</option>
                </select>
                <input type="text" placeholder="আপনি কি খুঁজছেন?......" name="search" />
                <button type="submit">সার্চ করুন</button>
              </form>
            </div>
            <div className="section group">
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post.jpg" alt="" /></a>
                <h2>আলু</h2>
                <p>ময়মনসিংহ</p>
                <p><span className="price">৳৩৩০<br /> তারিখ:২৬ অক্টো ২০২০</span></p>
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post1.jpg" alt="" /></a>
                <h2>পিয়াজ </h2>
                <p>চট্টগ্রাম</p>
                <p><span className="price">৳৬০০<br /> তারিখ:২৬ অক্টো ২০২০</span></p>   
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post2.jpg" alt="" /></a>
                <h2>রসুন </h2>
                <p>রাজশাহী</p>
                <p><span className="price">৳৬৭৮ <br /> তারিখ:২৬ অক্টো ২০২০</span></p> 
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post3.jpg" alt="" /></a>
                <h2>ধান </h2>
                <p>সিলেট</p>
                <p><span className="price">৳৯৮০<br /> তারিখ:২৬ অক্টো ২০২০</span></p> 
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post.jpg" alt="" /></a>
                <h2>আলু</h2>
                <p>ময়মনসিংহ</p>
                <p><span className="price">৳৩৩০ <br /> তারিখ:২৬ অক্টো ২০২০</span></p>
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post1.jpg" alt="" /></a>
                <h2>পিয়াজ </h2>
                <p>চট্টগ্রাম</p>
                <p><span className="price">৳৬০০<br /> তারিখ:২৬ অক্টো ২০২০</span></p>   
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post2.jpg" alt="" /></a>
                <h2>রসুন </h2>
                <p>রাজশাহী</p>
                <p><span className="price">৳৬৭৮ <br /> তারিখ:২৬ অক্টো ২০২০</span></p> 
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
              </div>
              <div className="grid_1_of_4 images_1_of_4">
                <a href="#"><img src="assets/images/post3.jpg" alt="" /></a>
                <h2>ধান </h2>
                <p>সিলেট</p>
                <p><span className="price">৳৯৮০<br /> তারিখ:২৬ অক্টো ২০২০</span></p> 
                <div className="button"><a><Link to="/Hatbazaarpreview">বিস্তারিত</Link></a></div>
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
          </div></div></div>
    );
			</div>
		)
	}
}
export default Hatbazaar
