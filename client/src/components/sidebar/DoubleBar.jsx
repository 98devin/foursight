
import React from 'react';

import {
    Sidebar
} from 'semantic-ui-react';

import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';


export default class DoubleBar extends React.Component {

    render() {

        return (
            <div>
                <Sidebar.Pushable>
                    <LeftSidebar
                        {...this.props}
                    />

                    <Sidebar.Pusher>
                        { this.props.children }
                    </Sidebar.Pusher>

                    <RightSidebar
                        {...this.props}
                    />
                </Sidebar.Pushable>
            </div>
        );

    }
}