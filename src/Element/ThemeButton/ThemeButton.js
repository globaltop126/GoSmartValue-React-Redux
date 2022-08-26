import React,{Component, useState} from 'react';		
import {Link} from 'react-router-dom';
import {Modal, ListGroup} from 'react-bootstrap'
import { TabContent, TabPane, Collapse, Button } from 'reactstrap';
import classnames from 'classnames';

function MsgModal(props) {
	const [activeTab, setActiveTab] = useState('1');
	const [collapse, setCollapseTab] = useState(false);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

	const collapseToggle = () => {
    setCollapseTab(!collapse);
  }

	return(
		<Modal
			size="lg"
			show={props.msgModalVisible}
			onHide={props.setMsgModal}
			backdrop="static"
			aria-labelledby="contained-modal-title-vcenter"
			centered
      animation={false}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" >
					{activeTab === '1' ? <><i className="ti-email"></i> {'Leave a message'}</> : <><i className="flaticon-notebook"></i> {'Knowledge Base'}</>}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="dlab-tabs tabs-site-button">
					<ul className="nav nav-tabs justify-content-center">
						<li>
							<Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><i className="ti-email"></i> Conversation</Link>
						</li>
						<li>
							<Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><i className="flaticon-notebook"></i> Knowledge Base</Link>
						</li>
					</ul>
				
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<form id="login" className="tab-pane active">
								<div className="form-group">
									<input name="name" required="name require" className="form-control" placeholder="Enter your name" type="text" />
								</div>
								<div className="form-group">
									<input name="email" required="email require" className="form-control" placeholder="Your email address" type="text" />
								</div>
								<div className="form-group">
									<select className="form-control" placeholder="Choose a department">
										<option>Valuations</option>
										<option>Sales and Subscriptions</option>
										<option>Valuers and Real Estate Practitioners</option>
										<option>Everything</option>
									</select>
								</div>
								<div className="form-group">
									<textarea name="message" rows="4" className="form-control" required placeholder="Type your message here and click the Submit button"></textarea>
								</div>
								<div className="text-center">
									<button className="site-button button-lg radius-xl outline outline-2">SEND</button>
								</div>
							</form>
						</TabPane>
						<TabPane tabId="2">
							<>
							<form id="serach" className="tab-pane active">
								<div className="input-group">
									<input name="search" required="required" className="form-control" placeholder="Search for an article" type="text" />
									<span className="input-group-btn">
											<button name="submit" value="Submit" type="submit" className="site-button">Search</button>
									</span>
								</div>
							</form>
								<Button color="default" onClick={() => {collapseToggle()}} style={{ marginBottom: '1rem', width: '100%' }}>General</Button>
								<Collapse isOpen={collapse}>
									<ListGroup>
										<ListGroup.Item action variant="success">
											<i className='flaticon-file'/> Success
										</ListGroup.Item>
									</ListGroup>
									<br />
									<ListGroup>
										<ListGroup.Item action variant="success">
											<i className='flaticon-file'/>	Success
										</ListGroup.Item>
									</ListGroup>
								</Collapse>
							</>
						</TabPane>
					</TabContent>
				</div>
			</Modal.Body>
		</Modal>
	)
}

function ChatModal(props) {
	const [activeTab, setActiveTab] = useState('1');
	// const [collapse, setCollapseTab] = useState(false);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

	// const collapseToggle = () => {
  //   setCollapseTab(!collapse);
  // }

	return(
		<Modal
			size="lg"
			show={props.chatModalVisible}
			onHide={props.setChatModal}
			backdrop="static"
			aria-labelledby="example-modal-sizes-title-lg"
			centered
      animation={false}
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg" >
					{(activeTab === '1' && 'Home') ||
					 (activeTab === '2' && 'Chat') ||
					 (activeTab === '3' && 'Knowledge Base') ||
					 (activeTab === '4' && 'Community')}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="dlab-tabs tabs-site-button">
					<ul className="nav nav-tabs justify-content-center">
						<li>
							<Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><i className="ti-home"></i> HOME</Link>
						</li>
						<li>
							<Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><i className="flaticon-chat"></i> CHAT</Link>
						</li>
						<li>
							<Link to={"#"}	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}}><i className="flaticon-notebook"></i> KNOWLEDGE BASE</Link>
						</li>
						<li>
							<Link to={"#"}	className={classnames({active:activeTab === '4'}) + ''} onClick={()=>{ toggle('4');}}><i className="flaticon-team"></i> COMMUNITY</Link>
						</li>
					</ul>
				
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							
						</TabPane>
						<TabPane tabId="2">
							
						</TabPane>
						<TabPane tabId="3">
							
						</TabPane>
						<TabPane tabId="4">
							
						</TabPane>
					</TabContent>
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default class ThemeButton extends Component{
	state = {
		msgModalVisible: false,
		chatModalVisible: false,
	}

	setMsgModal = () => {
		this.setState({
			msgModalVisible: !this.state.msgModalVisible,
			chatModalVisible: this.state.chatModalVisible?!this.state.chatModalVisible:this.state.chatModalVisible
		})
	}

	setChatModal = () => {
		this.setState({
			chatModalVisible: !this.state.chatModalVisible,
			msgModalVisible: this.state.msgModalVisible?!this.state.msgModalVisible:this.state.msgModalVisible
		})
	}

	render(){
		return(
			<>
				<Link to={"#"} onClick={this.setChatModal} className="bt-buy-now theme-btn"><i className="ti-help"></i><span>Chat</span></Link>
				<Link to={"#"} onClick={this.setMsgModal} className="bt-support-now theme-btn"><i className="ti-email"></i><span>Leave a message</span></Link>
				<ChatModal
					chatModalVisible={this.state.chatModalVisible}
					setChatModal={this.setChatModal}
				/>
				<MsgModal
					msgModalVisible={this.state.msgModalVisible}
					setMsgModal={this.setMsgModal}
				/>
			</>
		)
	}
}
