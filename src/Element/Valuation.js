import React from 'react';
import {Link} from 'react-router-dom';

export function Valuation(props) {
  return(
    <>
      <div className="icon-bx-wraper p-a30 center fly-box-ho" style={{border:'1px solid #c1c1c1', color:'#363a3e'}}>
        <div className="icon-content">
          <div className='row'>
            <div className='col-lg-8 col-md-6 col-sm-6 m-b30'>
              <h5 className="dlab-tilte text-left" style={{height:'30px'}}>{props.data.title}</h5>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 m-b30'>
              <span className="text-primary">{props.data.tag}</span>
            </div>
          </div>
          <p className="text-left" style={{height:'350px'}}>{props.data.description}</p>
          <Link to={'#'} className="site-button red">View Sample</Link>&nbsp;
          <Link to={'#'} className="site-button">Purchase</Link>
        </div>
      </div>
    </>
  )
}

export default Valuation;