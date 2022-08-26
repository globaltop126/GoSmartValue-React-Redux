import React from 'react';

import Valuation from '../../Element/Valuation';
import bgimg from '../../images/1gosmartvalue/bg11.jpg';

const valuations = [
	{title: 'Location', tag: 'BWP 150', description: 'Provides a breakdown of land use types in the location you’re looking at, the sales and lending activity within the location, a list of amenities in the location and a comprehensive overview of the actual boundaries of localities that make up a location - as well as a map of the area.'}, 
  {title: 'Locality', tag: 'BWP 250', description: 'A map showing the boundary of the locality, list of recent transactions in the locality. A graphical representation of sales prices with a selected duration. Median Price, Average Price, Minimum and Maximum prices of properties in the locality for upto 5 years.'}, 
  {title: 'Estate Report', tag: 'BWP 150', description: 'A clear demarcation of the boundaries of the estate, the sales and lending activity within an estate. It also includes what properties have sold for recently. A comparison between the subject Estate and other comparables estates within the location.'}, 
  {title: 'Deeds Report', tag: 'BWP 250', description: 'Based on your query this report provides detailed and up to date records of property transfers and bond registrations for a locality/ location / an entity based on your search criteria. Designed to help conduct off-line analysis of property and bond transactions the report is available in a downloadable excel spread sheet.'}, 
  {title: 'Risk Report', tag: 'BWP 250', description: 'A Matrix that details risks a property is exposed to. Information on the size, value, credit risk, locality demographics, provides relevant information on the property and its surrounds. The risk report further delves into the various crime, weather and land characteristics within the area. It provides insight into expected hail, lightning, flood risks as well as slope, soil type, seismic activity and proximity to mines and water.'}, 
  {title: 'Nodal Report', tag: 'BWP 250', description: 'A map showing the boundary of the commercial node, list of properties in the node, the property types and uses. A graphical representation of rental levels,occupancy levels and yields attained in that node. A graphical represention of near term upcoming developments is demostrated where applicable.'}, 
];

const Valuations = (props) => {

  return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 className="text-white text-center text-primary" >Reports</h1>
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