import React from 'react';
// import Slider from "react-slick";
import {Link} from 'react-router-dom';

export function SubScription(props) {
	if(JSON.stringify(props.data) === undefined) return(<></>);
	return(
		<>
			<div className="dlab-box">
				<div className="dlab-media dlab-img-effect rotate"> <Link to={"#"}><img src={props.data.image} alt="" /></Link> </div>
				<div className="dlab-info bg-white" style={{paddingTop:'15px'}}>
					<p className={props.data._className}><i className="fa fa-star-o mr-1"></i><i className="fa fa-star-o mr-1"></i>{props.data.title}</p>
					<h5 className="dlab-title m-t0"><Link to={"#"}>{props.data.title}</Link></h5>
					<p className="m-b0"><i className="ti-check-box"></i> {'Sales Trends'}<br/><i className="ti-check-box"></i> {'Rental Trends'}<br/><i className="ti-check-box"></i>{'Land Rates'}<br/><i className="ti-check-box"></i>{'Building Cost Rates'}<br/><i className="ti-check-box"></i>{props.data.status}{' Property Market Report of Your Choice per Month'}</p>
				</div>
				{props.data.btn&&<Link to={"#"} className="site-button btn-block d-flex justify-content-between white"><span>{props.data.status === 1 ? 'Subscribe' : 'Continue to checkout'}</span> <i className="ti-arrow-right"></i></Link>}
			</div>
		</>
	)
}

export default SubScription;