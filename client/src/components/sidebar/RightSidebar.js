import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Search, List, Form, Checkbox, Input, Divider } from 'semantic-ui-react'




class RightSidebar extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { callbacks: { creditOverloadHandler,
      exceedGradHandler,
      majorsHandler,
      minCreditsHandler,
      maxCreditsHandler,
      gradMonthHandler,
      gradYearHandler,
      }, addMajor: {addMajor}

     } = this.props;
    const { visible } = this.state

    const {textStyle} = {
      font : 30
    }

    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
          <Sidebar
            as={Menu}
            animation='push'
            width='wide'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
          >
            <Header as='h2' style={{paddingTop: '20px'}}> Preferences </Header>
            <Divider style={{paddingBottom: '0px', marginBottom: '0px'}}/>
            <br/>
            Add Major
            <br/>
            <Search onResultSelect={addMajor} />
            <br/>
            <br/>Expected Graduation Date<br/>
            <Input placeholder='Month' onChange={gradMonthHandler} type='month'/>
            <br/><br/>Max Credit Count<br/>
            <Input placeholder='Max' onChange={maxCreditsHandler} type='number'/>
            <br/><br/>Min Credit Count<br/>
            <Input placeholder='Min' onChange={minCreditsHandler} type='number'/>

            <br/>
            <br/>

            <Checkbox label='Enable credit overloading' onChange={creditOverloadHandler}/>
            <Checkbox label='Exceed over expected graduation date' onChange={exceedGradHandler}/>

            <br/>
            <br/>

            <Button primary>
              Submit
            </Button>

          </Sidebar>
          <Sidebar.Pusher>
            <Segment size='massive'>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
      </div>
    )
  }
}

export default RightSidebar;