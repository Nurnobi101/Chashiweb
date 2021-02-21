import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component{
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
              <div className="login"><a href="login.html">লগ আউটস</a></div>
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
              <div className="cartoption">		
                <div className="cartpage">
                  <h2> কার্ট লিস্ট</h2>
                  <table className="tblone">
                    <tbody><tr>
                        <th width="20%">পণ্যের নাম</th>
                        <th width="10%">পণ্যের ছবি</th>
                        <th width="15%">দাম</th>
                        <th width="25%">পরিমাণ</th>
                        <th width="20%">মোট দাম</th>
                        <th width="10%">একশন</th>
                      </tr>
                      <tr>
                        <td>ফ্লোরা (১০০ মিলি)</td>
                        <td><img src="assets/images/p.jpg" alt="" /></td>
                        <td>৳৬০০</td>
                        <td>
                          <form action method="post">
                            <input type="number" name defaultValue={1} />
                            <input type="submit" name="submit" defaultValue="আপডেট" />
                          </form>
                        </td>
                        <td>৳৬০০</td>
                        <td><a href>X</a></td>
                      </tr>
                      <tr>
                        <td>ফ্লোরা (১০০ মিলি)</td>
                        <td><img src="assets/images/p.jpg" alt="" /></td>
                        <td>৳৬০০</td>
                        <td>
                          <form action method="post">
                            <input type="number" name defaultValue={1} />
                            <input type="submit" name="submit" defaultValue="আপডেট" />
                          </form>
                        </td>
                        <td>৳৬০০</td>
                        <td><a href>X</a></td>
                      </tr>
                      <tr>
                        <td>ফ্লোরা (১০০ মিলি)</td>
                        <td><img src="assets/images/p.jpg" alt="" /></td>
                        <td>৳৬০০</td>
                        <td>
                          <form action method="post">
                            <input type="number" name defaultValue={1} />
                            <input type="submit" name="submit" defaultValue="আপডেট" />
                          </form>
                        </td>
                        <td>৳৬০০</td>
                        <td><a href>X</a></td>
                      </tr>
                      <tr>
                        <td>ফ্লোরা (১০০ মিলি)</td>
                        <td><img src="assets/images/p.jpg" alt="" /></td>
                        <td>৳৬০০</td>
                        <td>
                          <form action method="post">
                            <input type="number" name defaultValue={1} />
                            <input type="submit" name="submit" defaultValue="আপডেট" />
                          </form>
                        </td>
                        <td>৳৬০০</td>
                        <td><a href>X</a></td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="shopping">
                  <div className="shopleft">
                    <a href="service.html"> <img src="assets/images/shop.png" alt="" /></a>
                  </div>
                  <div className="shopright">
                    <a href="login.html"> <img src="assets/images/check.png" alt="" /></a>
                  </div>
                </div>
              </div>  	
              <div className="clear" />
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

            </div>

        )}
}
export default Cart