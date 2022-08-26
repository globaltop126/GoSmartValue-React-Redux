import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

         
            
const TabStyle1 = (props) => {
	  
	return(
		<Fragment>			
			
                <div className="row">
					<div className="col-md-12">
						<div className="dlab-tabs product-description tabs-site-button">
							<ul className="nav nav-tabs">
								<li>
									<Link to={"#"} style={{fontWeight:'600', fontSize: '13px'}} className= {classnames({ active : props.activeTab === '1'}) + ''}> Locatioin</Link>
								</li>
								<li>
									<Link to={"#"}	style={{fontWeight:'600', fontSize: '13px'}} className={classnames({active: props.activeTab === '2'}) + ''}> Property Details</Link>
								</li>
								<li>
									<Link to={"#"}	style={{fontWeight:'600', fontSize: '13px'}} className={classnames({active: props.activeTab === '3'}) + ''}> Property Features</Link>
								</li>
								<li>
									<Link to={"#"}	style={{fontWeight:'600', fontSize: '13px'}} className={classnames({active: props.activeTab === '4'}) + ''}> Report Type</Link>
								</li>
								<li>
									<Link to={"#"}	style={{fontWeight:'600', fontSize: '13px'}} className={classnames({active: props.activeTab === '5'}) + ''}> Summary</Link>
								</li>
								
							</ul>
						</div>	
					</div>
				</div>		
			
		</Fragment>
	)
	
}	
export default TabStyle1;