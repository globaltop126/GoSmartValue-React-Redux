import React,{Component} from 'react';
import Valuations from '../Valuations/Valuations';
import ContactUs from '../ContactUs/ContactUs';
import Auth from '../Auth/Auth';
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import SubScriptions from '../SubScriptions/SubScriptions';
import Footer from '../Footer';

class Homepage extends Component{
		
	componentDidMount() {
		
	}	
	
	render(){
		return(
			<div className="page-wraper">
				<Footer />
			</div>
		)
	}
}
export default Homepage;