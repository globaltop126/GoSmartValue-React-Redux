import React from 'react';

function PropertyDetailsForm(props){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
				<h2 className='text-primary'>Property Details</h2>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Number of Bedrooms</label>
						<input type="number" className="form-control"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Number of Kitchens</label>
						<input type="number" className="form-control"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Number of SittingRooms</label>
						<input type="number" className="form-control"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Number of toilets</label>
						<input type="number" className="form-control"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Number of garages</label>
						<input type="number" className="form-control"/>
					</div>
				</div>
				<div className='row'>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4 d-flex">
						<div className="calculate btn-block" >
							<button className="site-button btn-block" type="button" onClick={() => { props.toggle('1'); }}>Provious</button>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4 d-flex">
						<div className="calculate btn-block" >
							<button className="site-button btn-block" type="button" onClick={() => { props.toggle('3'); }}>Next</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default PropertyDetailsForm;