import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import smartlogo from '../images/1gosmartvalue/layout/images/favicons/smart_log_45x45.png';

class Header extends Component {
    state = {
        activeTab: '0'
    }

	componentDidMount() {
		
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
		
        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll( "li" ).forEach( el =>
				(current.parentElement !== el) ? el.classList.remove('open') : ''
			);
			
			setTimeout(() => {
				current.parentElement.classList.toggle('open');
				
			}, 100);			
        }
	}

    changeTab = (index) => {
        this.setState({activeTab: index});
    }
	
    render() {
        return (
            <>
                <header className="site-header header-transparent header mo-left header-seo" id="fix-header">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar clearfix">
                            <div className="container clearfix">

                                <div className="logo-header mostion">
                                    <Link to={'/home'} className="dez-page" onClick={(e) => this.changeTab("0")}><img src={smartlogo} alt="" /></Link>
                                    <Link to={'/home'} className="dez-page" onClick={(e) => this.changeTab("0")}><h5 className='text-primary sub-title' style={{paddingTop:'12px', paddingLeft:'20px'}}>GoSmartValue</h5></Link>
                                </div>

                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button"  data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <Link to={'/Auth'} className="dez-page site-button primary">Login</Link>&nbsp;
                                        {/* <Link to={'/Auth'} className="dez-page site-button primary">Register</Link> */}
                                    </div>
                                </div>
                                <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
                                    {/*  Header Menu Contents  */}
										<ul className="nav navbar-nav">
                                            <li><Link to={'/Subscriptions'} onClick={(e) => this.changeTab("1")} className='font-weight-bold' style={this.state.activeTab === '1' ? {color:'#6cc000'} : {color:'#4a4a4a'}}>Subscriptions</Link>                                                
                                            </li>
                                            <li><Link to={'/Valuations'} onClick={(e) => this.changeTab("2")} className='font-weight-bold' style={this.state.activeTab === '2' ? {color:'#6cc000'} : {color:'#4a4a4a'}}>Valuations</Link>                                                
                                            </li>
                                            <li><Link to={'/Reports'} onClick={(e) => this.changeTab("3")} className='font-weight-bold' style={this.state.activeTab === '3' ? {color:'#6cc000'} : {color:'#4a4a4a'}}>Reports</Link>                                                
                                            </li>
                                            <li><Link to={'/News'} onClick={(e) => this.changeTab("4")} className='font-weight-bold' style={this.state.activeTab === '4' ? {color:'#6cc000'} : {color:'#4a4a4a'}}>News</Link>
                                            </li>
                                            <li><Link to={'/ContactUs'} onClick={(e) => this.changeTab("5")} className='font-weight-bold' style={this.state.activeTab === '5' ? {color:'#6cc000'} : {color:'#4a4a4a'}}>Contact us</Link>
                                            </li>
                                        </ul>
									{/*  Header Menu Contents End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default Header;