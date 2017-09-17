import React from 'react';
import { Button, Header, Icon, Image, Modal, Input } from 'semantic-ui-react';


const Questionnaire = () => (

	<Modal trigger={<Button color='teal'>Let's get started!</Button>}>
		<Modal.Header>Getting Started</Modal.Header>
		<Modal.Content image scrolling>
			<Modal.Description>
				<Header textAlign='center'>What's your major?</Header>
				<Header textAlign='center' style={{marginTop:'0px', marginBottom:'0px'}}>
					<Input size='small' icon='search' placeholder='Search' />
				</Header>
				<Header textAlign='center' style={{marginTop:'0px', marginBottom:'0px'}}>
					<Input size='mini' icon='plus square outline' iconPosition='left' transparent placeholder='add major' />
				</Header>

				<br/>

				<Header textAlign='center'>What's your minor?</Header>
				<Header textAlign='center' style={{marginTop:'0px', marginBottom:'0px'}}>
					<Input size='small' icon='search' placeholder='Search' />
				</Header>
				<Header textAlign='center' style={{marginTop:'0px', marginBottom:'0px'}}>
					<Input size='mini' icon='plus square outline' iconPosition='left' transparent placeholder='add minor' />
				</Header>

				<br/>

				<Header textAlign='center'>I want to take an average of {" "}
				<Input size='mini' icon='sort' />
				credits per semester. </Header>

				<br/>

				<Header textAlign='center'>How many semesters have you completed?
				(Include current)</Header>
				<Header textAlign='center' style={{marginTop:'0px', marginBottom:'0px'}}>
					<Input size='small' icon='sort' />
				</Header>

				<br/>

				<Header textAlign='center'>When do you plan on graduating?</Header>
				<Header textAlign='center' style={{marginTop:'0px', marginBottom:'0px'}}>
					<Input size='small' type='month'/>
				</Header>

				<br/>

				<Header textAlign='center'>Last step: Input all classes you have already taken.</Header>
				<Header textAlign='center' style={{marginTop:'0px'}}>
					<Input size='small' icon='search' placeholder='Search classes...' textAlign='center'/>
				</Header>

				<br/>

				<Button fluid color='teal'>
					Generate schedule!
				</Button>

				<br/>

			</Modal.Description>
		</Modal.Content>

		<Modal.Actions>

		</Modal.Actions>
	</Modal>

);

export default Questionnaire;