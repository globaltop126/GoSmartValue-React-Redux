import React from 'react';

function PropertyDetailsForm(props){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
				<h2 className='text-primary'>Property Details</h2>
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
						<div className="form-group">
							<input id="garage" type="checkbox" />
                            <label htmlFor = "garage" style={{color: 'rgb(74, 74, 74)'}}>Garage</label>
						</div>
					</div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
						<div className="form-group">
							<input id = "SwimmingPool" type="checkbox" className="form-control"/>
                            <label htmlFor = "SwimmingPool" style={{color: 'rgb(74, 74, 74)'}}>SwimmingPool</label>
						</div>
					</div>
				</div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
						<div className="form-group">
                            <input id = "WireFenced" type="checkbox" className="form-control"/>
                            <label htmlFor = "WireFenced" style={{color: 'rgb(74, 74, 74)'}}>WireFenced</label>
						</div>
					</div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id="ElectricFence" type="checkbox" />
                            <label htmlFor = "ElectricFence" style={{color: 'rgb(74, 74, 74)'}}>ElectricFence</label>
                        </div>
                    </div>
				</div>
				<div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "FirePlace" type="checkbox" className="form-control"/>
                            <label htmlFor = "FirePlace" style={{color: 'rgb(74, 74, 74)'}}>FirePlace</label>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "BoundaryWall" type="checkbox" className="form-control"/>
                            <label htmlFor = "BoundaryWall" style={{color: 'rgb(74, 74, 74)'}}>BoundaryWall</label>
                        </div>
                    </div>
				</div>
				<div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "Paved" type="checkbox" className="form-control"/>
                            <label htmlFor = "Paved" style={{color: 'rgb(74, 74, 74)'}}>Paved</label>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "MotorizedGate" type="checkbox" className="form-control"/>
                            <label htmlFor = "MotorizedGate" style={{color: 'rgb(74, 74, 74)'}}>MotorizedGate</label>
                        </div>
                    </div>
				</div>
                <div className='row'>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "OutdoorEntertainment" type="checkbox" className="form-control"/>
                            <label htmlFor = "OutdoorEntertainment" style={{color: 'rgb(74, 74, 74)'}}>OutdoorEntertainment</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4 d-flex">
						<div className="calculate btn-block" >
							<button className="site-button btn-block" type="button" onClick={() => { props.toggle('2'); }}>Provious</button>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4 d-flex">
						<div className="calculate btn-block" >
							<button className="site-button btn-block" type="button" onClick={() => { props.toggle('4'); }}>Next</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default PropertyDetailsForm;