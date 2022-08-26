import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ThemeButton from '../Element/ThemeButton/ThemeButton';

import Homepage from './FirstPage/Homepage';
import SubScriptions from './SubScriptions/SubScriptions';
import Valuations from './Valuations/Valuations';
import Reports from './Reports/Reports';
import News from './News/News';
import ContactUs from './ContactUs/ContactUs';
import Auth from './Auth/Auth';
import Header from './Header';
import Footer from './Footer';

class Router extends Component{
	render(){
		return(
			<BrowserRouter basename="/">
				<div className="page-wraper">
					<Header />
					<Switch>
						<Route path='/' exact render={() => {
							return (
								<Redirect to="/home" />
							)
						}} />
						<Route path='/home' exact component={Homepage} />
						<Route path='/Subscriptions' component={SubScriptions} />
						<Route path='/Valuations' component={Valuations} />
						<Route path='/Reports' component={Reports} />
						<Route path='/News' component={News} />
						<Route path='/ContactUs' component={ContactUs} />
						<Route path='/Auth' component={Auth} />
					</Switch>
					<Footer />
				</div>
				<ThemeButton />
			</BrowserRouter>	
		)
	}
	
}

export default Router;