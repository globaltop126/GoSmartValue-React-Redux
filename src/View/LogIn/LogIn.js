import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Header from './../Layout/Header1';
// import Footer from './../Layout/Footer1';

class LogIn extends Component {

    render() {
      return (
        <>
          {/* <Header /> */}
          <div className="page-content">
            <div className="section-full shop-account">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 className="font-weight-700 m-t0 m-b30 text-primary">Login Your Account</h2>
                  </div>
                </div>
                <div>
                  <div className="max-w500 m-auto m-b30 bg-white">
                    <div className="p-a30 border-1 seth">
                      <div className="tab-content">
                        <form id="login" className="tab-pane active col-12 p-a0 ">
                          <h4 className="font-weight-700 text-center">LOGIN</h4>
                          <p className="font-weight-600 text-center">If you have an account with us, please log in.</p>
                          <div className="form-group">
                            <label className="font-weight-700">E-MAIL *</label>
                            <input name="email" required="name require" className="form-control" placeholder="Your Email Id" type="email" />
                          </div>
                          <div className="form-group">
                            <label className="font-weight-700">PASSWORD *</label>
                            <input name="password" required="password require" className="form-control " placeholder="Type Password" type="password" />
                          </div>
                          <div className="text-left">
                            <button className="site-button m-r5 button-lg radius-no">login</button>
                            <a data-toggle="tab" href="#forgot-password" className="m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</a>
                          </div>
                        </form>
                        <form id="forgot-password" className="tab-pane fade col-12 p-a0">
                          <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                          <p className="font-weight-600">We will send you an email to reset your password. </p>
                          <div className="form-group">
                            <label className="font-weight-700">E-MAIL *</label>
                            <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                          </div>
                          <div className="text-left">
                            <a className="site-button outline gray button-lg radius-no" data-toggle="tab" href="#login">Back</a>
                            <button className="site-button pull-right button-lg radius-no">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )
    }
}
export default LogIn;