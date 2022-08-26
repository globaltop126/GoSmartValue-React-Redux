import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap'

export function SelectModal(props) {

	return(
		<Modal
      style={{paddingTop:'100px'}}
			size="lg"
			show={props.selectModalVisible&&props.selectModalVisible.visible}
			onHide={props.setSelectModal}
			backdrop="static"
			aria-labelledby="example-modal-sizes-title-lg"
      animation={false}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg" >
          GoSmartValue
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
        <div className="section-full content-inner">
          <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title-head m-b0 text-danger">Select User Type</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="text-center  icon-hover-bx">
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <Link to={"#"} className="icon-cell icon-md" onClick={() => { props.setSelectModal({visible:false, mode:'Standard'}); }}><i className="fa fa-user"></i></Link>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-primary">Standard User</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="text-center  icon-hover-bx">
                    <div className="icon-bx-xl text-warning bg-white radius border-2">
                      <Link to={"#"} className="icon-cell icon-md" onClick={() => { props.setSelectModal({visible:false, mode:'Valuer'}); }}><i className="fa fa-home" /></Link>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-warning">Valuer</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="text-center  icon-hover-bx">
                    <div className="icon-bx-xl text-success bg-white radius border-2">
                      <Link to={"#"} className="icon-cell icon-md" onClick={() => { props.setSelectModal({visible:false, mode:'Corporate'}); }}><i className="fa fa-briefcase" /></Link>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-success">Corporate</h5>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
			</Modal.Body>
		</Modal>
	)
}

class Register extends Component {

  componentDidMount() {
  }

  render() {
    var userType = 'Standard';
    if(this.props.selectAccount !== undefined) userType = this.props.selectAccount.mode;
    return (
      <>
        {/* <Header /> */}
        <div className="page-content">
          <div className="section-full shop-account">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="form-group">
                        <input value="accept" name="account" className="form-control " type="radio" id="Standard" />
                          <label htmlFor='Standard'>Standard User</label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="form-group">
                        <input value="accept" name="account" className="form-control " type="radio" id="Valuer" />
                          <label htmlFor='Valuer'>Valuer</label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="form-group">
                        <input value="accept" name="account" className="form-control " type="radio" id="Corporate" />
                          <label htmlFor='Corporate'>Corporate</label>
                      </div>
                    </div>
                  </div> */}
                  <h2 className="font-weight-700 m-t0 m-b30 text-primary">Create New {userType} User Account</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 m-b30">
                  <div className="p-a30 border-1  max-w800 m-auto bg-white">
                    <div className="tab-content">
                      <form id="register" className="tab-pane active">
                        <h4 className="font-weight-700 text-center">PERSONAL INFORMATION</h4>
                        <p className="font-weight-600 text-center">If you have an account with us, please log in.</p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label className="font-weight-700">First Name *</label>
                              <input name="firstname" required="ln require" className="form-control" placeholder="First Name" type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label className="font-weight-700">Last Name *</label>
                              <input name="lastname" required="n require" className="form-control" placeholder="Last Name" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label className="font-weight-700">Phone *</label>
                              <input name="phone" required="phone require" className="form-control" placeholder="Phone" type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label className="font-weight-700">E-MAIL *</label>
                              <input name="email" required="email require" className="form-control" placeholder="Your Email" type="email" />
                            </div>
                          </div>
                        </div>
                        {userType === 'Valuer' && 
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label className="font-weight-700">REAC Number *</label>
                                <input name="reac" required="reac require" className="form-control" placeholder="REAC Number" type="text" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label className="font-weight-700">REIB Number *</label>
                                <input name="reib" required="reib require" className="form-control" placeholder="REIB Number" type="text" />
                              </div>
                            </div>
                          </div>
                        }
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">         
                            <div className="form-group">
                              <label className="font-weight-700">PASSWORD *</label>
                              <input name="password" required="pws require" className="form-control " placeholder="Password" type="password" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label className="font-weight-700">CONFIRM PASSWORD *</label>
                              <input name="password" required="c pws require" className="form-control " placeholder="Confirm Password" type="password" />
                            </div>
                          </div>
                        </div>
                        {userType === 'Valuer' && 
                          <div className="form-group">
                            <input value="accept" name="professionalConfirmation" className="form-control " type="checkbox" id="prof" />
                            <label htmlFor='prof'>Are you a registered property professional?</label>
                          </div>
                        }
                        <div className="form-group">
                          <input value="accept" name="termsAndConditions" className="form-control " type="checkbox" id="terms" />
                          <label htmlFor='terms'>By submiting I accept the terms and conditions</label>
                        </div>
                        <div className="text-left">
                          <button className="site-button button-lg radius-no outline outline-2">CREATE</button>
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
export default Register;