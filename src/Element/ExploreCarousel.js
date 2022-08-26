import React, {Component} from 'react';
import Slider from "react-slick";
// import {Link} from 'react-router-dom';

import SubScription from './SubScription';

//Images
import industry1 from '../images/1gosmartvalue/promo/promo-1.png';

const standard = [
	{title: 'Blue', tag: 'BWP 175 p/m', _className: 'm-b0 subscribe-form-tag-blue subscribe-form-tag', btn: true, status: 1, image: industry1}, 
  {title: 'Black', tag: 'BWP 250 p/m', _className: 'm-b0 subscribe-form-tag-black subscribe-form-tag', btn: true, status: 2, image: industry1}, 
  {title: 'White', tag: 'BWP 375 p/m', _className: 'm-b0 subscribe-form-tag-white subscribe-form-tag', btn: true, status: 5, image: industry1}, 
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav">
			<div className=" owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
} 

class ExploreCarousel extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,		
            infinite: true,
			dots: false,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow:1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="explore-carousel mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary " {...settings}>
					{standard.map((data,index)=>(
						<div className="item p-3" key={index}>
							<SubScription
								data={data}
							/>
						</div>
					))}					
				</Slider>
			</>
		)
	}
	
}

export default ExploreCarousel;