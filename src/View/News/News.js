import React from 'react';

// import Valuation from '../../Element/Valuation';
import bgimg from '../../images/1gosmartvalue/bg11.jpg';

const News = (props) => {

  return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 className="text-white text-center text-primary" >News</h1>
        </div>
      </div>
    </div>
	)
}

export default News;