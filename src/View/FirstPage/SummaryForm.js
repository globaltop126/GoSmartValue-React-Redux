import React from 'react';
import { Link } from 'react-router-dom';

function ReportTypeForm(props){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
                <h2 className='text-primary'>Summary</h2>
                <div className='row'>
                    <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                        <div className="icon-bx-wraper bx-style-1 p-a30 fly-box-ho">
                            <div className="icon-content" style={{height: 'auto'}}>
                                <div className='row' style={{color: 'rgb(74, 74, 74)'}}>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6'>
                                    <h5>General </h5>
                                        <h6>Cit</h6>
                                        <div >Artesia</div>
                                        <h6>Street</h6>
                                        <div >Artesia</div>
                                        <h6>Plot</h6>
                                        <div >1</div>
                                        <h6>Size</h6>
                                        <div >3m</div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6'>
                                    <h5>Additional </h5>
                                        <h6>Bedrooms</h6>
                                        <div >1</div>
                                        <h6>SittingRooms</h6>
                                        <div >1</div>
                                        <h6>Kitchens</h6>
                                        <div >1</div>
                                        <h6>Bathroom</h6>
                                        <div >1</div>
                                        <h6>Toilets</h6>
                                        <div >1</div>
                                        <h6>Garage</h6>
                                        <div >1</div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-4'>
                                        <h5>Extra </h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4 d-flex">
                        <div className="calculate btn-block" >
                            <button className="site-button btn-block" type="button" onClick={() => { props.toggle('1'); }}>Edit</button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4 d-flex">
                        <div className="calculate btn-block" >
                            <Link to={'/Auth'} className="site-button btn-block" type="button">Preceed checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}
export default ReportTypeForm;