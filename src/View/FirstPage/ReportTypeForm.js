import React from 'react';

function ReportTypeForm(props){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
                <h2 className='text-primary'>Report Type</h2>
                <div className='row'>
                    <div className="col-lg-6 col-md-12 col-sm-12 m-b30">
                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                            <h3>Instant Valuation </h3>
                            <div className="icon-content">
                                <h5 className="dlab-tilte text-uppercase">BWP 750</h5>
                                <div >Get an instant report for your property estimate</div>
                            </div>
                            <div className="text-center">
                                <button className="site-button" style={{marginTop:'10px'}} onClick={() => { props.toggle('5'); }}>Proceed</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 m-b30">
                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                            <h3>Detailed Valuation</h3>
                            <div className="icon-content">
                                <h5 className="dlab-tilte text-uppercase">BWP 1000</h5>
                                <div>Issue an instruction to a valuer perform valuation on property</div>
                            </div>
                            <div className="text-center">
                                <button className="site-button" style={{marginTop:'10px'}} onClick={() => { props.toggle('5'); }}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}
export default ReportTypeForm;