import React, { Component } from 'react';

import bgimg from '../../images/1gosmartvalue/bg11.jpg';

class Contact extends Component {
    componentDidMount() {
        var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}
    }
    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="section-full content-inner-2 bg-white contact-form-bx" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
                        <div className="container">
                            <h1 className="text-white text-center text-primary">Get in Touch</h1><br />
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm" style={{border:'1px solid #c1c1c1', color:'#363a3e'}}>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        Company Address
                                                    </h5>
                                                    <p>Unit 7, 2nd Floor Mowana Mews CBD Gaborone</p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Office Hours</h6>
                                                    <p className="m-b0">Mon to Fri 8am to 4.30pm</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm" style={{border:'1px solid #c1c1c1', color:'#363a3e'}}>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        E-mail
                                                    </h5>
                                                    <p className="m-b0">info@gosmartvalue.com</p>
                                                    <p className="m-b15">- Send us your query -</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm" style={{border:'1px solid #c1c1c1', color:'#363a3e'}}>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                        Phone Numbers
                                                    </h5>
                                                    <p>(267) 77338100, (267) 73056733</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                    <div className="dezPlaceAni">
                                        <div className="dzFormMsg"></div>
                                        <form method="post" className="" action="">
                                            <input type="hidden" value="Contact" name="dzToDo" />
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <label>Your Message...</label>
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <label>First Name</label>
                                                            <input name="dzfName" type="text" required className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <label>Last Name</label>
                                                            <input name="dzlName" type="text" required className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <label>Email</label>
                                                            <input name="dzEmail" type="email" className="form-control" required placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <label>Phone</label>
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <label>Subject</label>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                                    <button name="submit" type="submit" value="Submit" className="site-button outline outline-2 radius-xl button-md m-t10">Submit Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                {/* <Footer /> */}
            </>
        )
    }
}
export default Contact;