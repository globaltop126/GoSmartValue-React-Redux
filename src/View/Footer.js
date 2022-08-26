import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pic1 from '../images/1gosmartvalue/layout/images/smart-logo.png';

class Footer extends Component {
    render() {
      return (
        <>
          <footer className="site-footer text-uppercase footer-white business-footer">
            <div className="footer-top" style={{paddingTop:'50px'}}>
              <div className="container" >
                <div className="row">
                  <div className="col-5 col-lg-3 col-md-6 col-sm-6 footer-col-4">
                    <div className='text-center'>
                      <img src={pic1} width="130" height="130" alt="" />
                      <br />
                      <br />
                      <h5 className="m-b30 text-white">GoSmartValue 2022</h5>
                    </div>
                  </div>
                  <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                    <div className="widget widget_services border-0">
                      <h5 className="m-b30 text-white">Company</h5>
                        <ul>
                          <li><Link to={"/Subscriptions"}>Subscriptions </Link></li>
                          <li><Link to={"/Valuations"}>Valuations </Link></li>
                          <li><Link to={"/Reports"}>Reports</Link></li>
                          <li><Link to={"/News"}>News</Link></li>
                          <li><Link to={"/ContactUs"}>Contact us</Link></li>
                        </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                    <div className="widget widget_getintuch">
                      <h5 className="m-b30 text-white ">Contact us</h5>
                      <ul>
                          <li><i className="ti-location-pin"></i><strong>address</strong> Unit 7, 2nd Floor Mowana Mews CBD Gaborone </li>
                          <li><i className="ti-mobile"></i><strong>phone</strong>+267 77 33 8100</li>
                          <li><i className="ti-email"></i><strong>email</strong>info@gosmartvalue.com</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                    <div className="widget">
                      <h5 className="m-b30 text-white">Subscribe to our newsletter</h5>
                      <div className="subscribe-form m-b20">
                        <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                          <div className="input-group">
                            <input name="dzEmail" required="required" className="form-control" placeholder="Email Address" type="email" />
                            <span className="input-group-btn">
                                <button name="submit" value="Submit" type="submit" className="site-button">Subscribe</button>
                            </span>
                          </div>
                        </form>
                      </div>
                      <ul className="list-inline m-a0">
                        <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                        <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                        <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                        <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      );
    }
}

export default Footer;