
import React from 'react';
import {
    Sidebar,
    Button,
    Menu,
    Icon,
    Segment,
    Header,
    Label,
    List,
    Divider,
} from 'semantic-ui-react';

import SmallClassblock from '../classblocks/SmallClassblock';
import ScheduleView from '../scheduleview/ScheduleView';

export default class LeftSidebar extends React.Component {

    state = {
        visible: true,
        showclassesfor: {
            q: false,
            s: false,
            n: false,
            e: false,
            h: false,
        },
    };

    handleToggleShowClasses = (category) => (e) => {
        this.setState(s => {
            s.showclassesfor[category] = !s.showclassesfor[category];
        });
    }

    extractInfo = (priors) => {
        let credits = {
            ENGINEERING: 0,
            QUANTITATIVE: 0,
            NATURAL_SCIENCE: 0,
            HUMANITIES: 0,
            SOCIAL_SCIENCE: 0,
        };

        let classes = {
            ENGINEERING: [],
            QUANTITATIVE: [],
            NATURAL_SCIENCE: [],
            HUMANITIES: [],
            SOCIAL_SCIENCE: [],
        };
        
        for (let prior of priors) {
            for (let creditKind of prior.creditKinds) {
                if (creditKind in credits) {
                    credits[creditKind] += prior.credits;
                }
                if (creditKind in classes) {
                    classes[creditKind].push(prior);
                }
            }
        }

        return { credits, classes };

    }


    generateClassblockList = (classes) => {
        return (
            <List>
                { classes.map(cls => <List.Item key={cls.id}><SmallClassblock class={cls}/></List.Item>) }
            </List>
        )
    }


    render() {
        const { visible, activeItem, showclassesfor } = this.state;
        const { priors } = this.props;
        const { credits, classes } = this.extractInfo(priors);
        
        const menuItemStyle = {
            height: '50px',
            padding: '16px',
            fontSize: 20,
            textAlign: 'left',
        };
        
        const menuLabelStyle = {
            width: '60px',
        };

        return (
            <div>
                <Sidebar.Pushable as={Segment} style={{ height: '90vh' }}>
                    <Sidebar as={Menu} animation='uncover' width='wide' visible={visible} vertical>
                        
                        <Header as='h2' style={{paddingTop: '20px'}}> Completed Classes </Header>
                        
                        <Divider style={{paddingBottom: '0px', marginBottom: '0px'}}/>

                        <Menu.Item style={menuItemStyle} onClick={this.handleToggleShowClasses('q')} active={activeItem === 'q'}>
                            <Label color='orange' style={menuLabelStyle}>{credits.QUANTITATIVE}</Label>        
                            <Icon name='calculator' color='orange' />
                            Quantitative
                        </Menu.Item>
                        {
                            showclassesfor.q
                                ? this.generateClassblockList(classes.QUANTITATIVE)
                                : null
                        }
                        <Menu.Item style={menuItemStyle} onClick={this.handleToggleShowClasses('s')} active={activeItem === 's'}>
                            <Label color='yellow' style={menuLabelStyle}>{credits.SOCIAL_SCIENCE}</Label>
                            <Icon name='users' color='yellow' />
                            Social Sciences
                        </Menu.Item>
                        {
                            showclassesfor.s
                                ? this.generateClassblockList(classes.SOCIAL_SCIENCE)
                                : null
                        }
                        <Menu.Item style={menuItemStyle} onClick={this.handleToggleShowClasses('n')} active={activeItem === 'n'}>
                            <Label color='green' style={menuLabelStyle}>{credits.NATURAL_SCIENCE}</Label>
                            <Icon name='leaf' color='green' />
                            Natural Sciences
                        </Menu.Item>
                        {
                            showclassesfor.n
                                ? this.generateClassblockList(classes.NATURAL_SCIENCE)
                                : null
                        }
                        <Menu.Item style={menuItemStyle} onClick={this.handleToggleShowClasses('e')} active={activeItem === 'e'}>
                            <Label color='blue' style={menuLabelStyle}>{credits.ENGINEERING}</Label>
                            <Icon name='settings' color='blue' />
                            Engineering
                        </Menu.Item>
                        {
                            showclassesfor.e
                                ? this.generateClassblockList(classes.ENGINEERING)
                                : null
                        }
                        <Menu.Item style={menuItemStyle} onClick={this.handleToggleShowClasses('h')} active={activeItem === 'h'}>
                            <Label color='violet' style={menuLabelStyle}>{credits.HUMANITIES}</Label>
                            <Icon name='book' color='violet' />
                            Humanities
                        </Menu.Item>
                        {
                            showclassesfor.h
                                ? this.generateClassblockList(classes.HUMANITIES)
                                : null
                        }
                    </Sidebar>
                    <Sidebar.Pusher>
                        <ScheduleView semesters={this.props.semesters} />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )


    }

}