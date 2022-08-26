import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import SubScription from '../../Element/SubScription';

import bgimg from '../../images/1gosmartvalue/bg11.jpg';
import industry1 from '../../images/promo/promo-1.jpg';

const standard = [
	{title: 'Blue', tag: 'BWP 175 p/m', _className: 'm-b0 subscribe-form-tag-blue subscribe-form-tag', btn: true, status: 1, image: industry1}, 
  {title: 'Black', tag: 'BWP 250 p/m', _className: 'm-b0 subscribe-form-tag-black subscribe-form-tag', btn: true, status: 2, image: industry1}, 
  {title: 'White', tag: 'BWP 375 p/m', _className: 'm-b0 subscribe-form-tag-white subscribe-form-tag', btn: true, status: 5, image: industry1}, 
];

const vluer = [
	{title: 'FastTrack', tag: 'BWP 375 p/m', _className: 'm-b0 subscribe-form-tag-blue subscribe-form-tag', btn: true, status: 1, image: industry1}, 
  {title: 'Business', tag: 'BWP 2500 p/m', _className: 'm-b0 subscribe-form-tag-red subscribe-form-tag', btn: true, status: 1, image: industry1}, 
];

const corporate = [
	{title: 'Green', tag: 'BWP 1500 p/m', _className: 'm-b0 subscribe-form-tag-green subscribe-form-tag', btn: true, status: 1, image: industry1}, 
  {title: 'Platinum', tag: 'BWP 2500 p/m', _className: 'm-b0 subscribe-form-tag-white subscribe-form-tag', btn: true, status: 1, image: industry1}, 
];

const SubScriptions = (props) => {
	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
  }
	  
	return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 className="text-white text-center text-primary" style={{paddingBottom:'30px'}}>SubScriptions</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs product-description tabs-site-button" style={{border:'1px solid #c1c1c1'}}>
                <ul className="nav nav-tabs text-center">
                  <li>
                    <Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }} style={{width:'150px', fontWeight:'bold'}}> Standard </Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}} style={{width:'150px', fontWeight:'bold'}}> Valuer </Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}} style={{width:'150px', fontWeight:'bold'}}> Corporate </Link>
                  </li>
                  
                </ul>
              
                <div className="container">
                  <div className="tab-content chosesus-content">
                    <div id="cost" className="tab-pane active">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <div className="section-full">
                            <div className="container  explore-projects">
                              <div className="row">
                                {standard.map((data,index)=>(
                                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
                                    <SubScription 
                                      data={data}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="2">
                          <div className="section-full">
                            <div className="container  explore-projects">
                              <div className="row">
                                <div className="col-lg-2"></div>
                                {vluer.map((data,index)=>(
                                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
                                    <SubScription 
                                      data={data}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="3">
                        <div className="section-full">
                            <div className="container  explore-projects">
                              <div className="row">
                                <div className="col-lg-2"></div>
                                {corporate.map((data,index)=>(
                                  <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
                                    <SubScription 
                                      data={data}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
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

export default SubScriptions;