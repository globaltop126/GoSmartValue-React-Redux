import React from 'react';

import Valuation from '../../Element/Valuation';
import bgimg from '../../images/1gosmartvalue/bg11.jpg';

const valuations = [
	{title: 'Comparable Sales', tag: 'BWP 750', description: 'Instantly generated valuation report, predicting how much a property would sell for if it was sold on the date of the report, using sales comparables, property features and economic factors to calculate.'}, 
  {title: 'Replacement Cost', tag: 'BWP 750', description: 'Instantly generated valuation report predicting how much it would cost to rebuild the property on the date of the report.'}, 
  {title: 'Income Capitalization', tag: 'BWP 750', description: 'Instant generated valuation report predicting the value of the property based on its income generating capability under prevailing market(economic) conditions.'}, 
];

const Valuations = (props) => {

  return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 className="text-white text-center text-primary">Valuations</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs choseus-tabs">
                <div className="page-content">
                  <div className="section-full content-inner">
                    <div className="container">
                      <div className="row">
                      {valuations.map((data,index)=>(
                        <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
                          <Valuation 
                            data={data}
                          />
                        </div>
                      ))}
                      </div>
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

export default Valuations;