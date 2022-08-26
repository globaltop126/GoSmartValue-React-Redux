import React from 'react';

function LocationForm(props){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
				<h2 className='text-primary'>Location Details</h2>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>City/Town</label>
						<select className="form-control" >
							<option>Select City/Town</option>
							<option>Marketing</option>
							<option>IT Industries</option>
							<option>Management Industries</option>
							<option>Property Business</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Street Name</label>
						<input type="text" className="form-control" placeholder="Plese write a street's name correctly." />
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Plot No</label>
						<input type="text" className="form-control" placeholder="Plese write a plot No correctly." />
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Plot Size(square meters)</label>
						<input type="text" className="form-control" placeholder="Plese write the street's name correctly." />
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<label style={{color: 'rgb(74, 74, 74)'}}>Development stage</label>
						<select className="form-control">
							<option>Select development stage</option>
							<option>Marketing</option>
							<option>IT Industries</option>
							<option>Management Industries</option>
							<option>Property Business</option>
						</select>
					</div>
				</div>
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4 d-flex">
					<div className="calculate btn-block" >
						<button className="site-button btn-block" type="button" onClick={() => { props.toggle('2'); }}>Next</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default LocationForm;