import React, { Component } from 'react';
import { Header, Segment, Image, Divider, Icon } from 'semantic-ui-react';
import logo from './logo.png';
import rojam from './rojam.png';

class MainHeader extends Component {

	render() {
		return (
			<Segment clearing='mini' size='mini' style={{padding:'0px', margin:'0px'}}>
				<Header as='h5' floated = 'left'>
					<Image src={logo} style={{height:'40px', width:'170px', marginTop:'15px', marginLeft:'10px'}} />
				</Header>
				<Header as='h5' floated = 'right'>
					<Image src={rojam} size='big' shape='circular' style={{marginTop:'10px'}}/>
				</Header>
				<Header as='h3' floated = 'right' style={{marginTop:'20px'}}>
					Hello, Rojam Semita!
				</Header>
				
			</Segment>
		);
	}
}

export default MainHeader;