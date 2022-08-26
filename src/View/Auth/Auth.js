import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import {SelectModal} from '../Register/Register'

import bgimg from '../../images/1gosmartvalue/bg11.jpg';

const Auth = (props) => {
	const [activeTab, setActiveTab] = useState('1');
	const [selectModalVisible, setSelectModal] = useState({visible:false, mode:'Standard'});

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  // const setSelectModal = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // }
	  
	return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs product-description tabs-site-button">
                <ul className="nav nav-tabs text-center">
                  <li>
                    <Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }} style={{width:'150px', fontWeight:'bold'}}><i className="fa fa-sign-in"></i> SIGN IN</Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2'); setSelectModal({visible:true, mode:'Standard'})}} style={{width:'150px', fontWeight:'bold'}}><i className="ti-user"></i> SIGN UP</Link>
                  </li>
                </ul>              
                <div className="container">
                  <div className="tab-content chosesus-content">
                    <div id="cost" className="tab-pane active">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <LogIn />
                        </TabPane>
                        <TabPane tabId="2">
                          <SelectModal
                            selectModalVisible={selectModalVisible}
                            setSelectModal={setSelectModal}
                          />
                          <Register 
                            selectAccount={selectModalVisible}
                          />
                        </TabPane>
                      </TabContent>
                    </div>	
                  </div>
                </div>
              </div>	
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}	

export default Auth;