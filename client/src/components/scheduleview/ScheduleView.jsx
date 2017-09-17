
import React from 'react';

import {
    List,
    Table,
} from 'semantic-ui-react';

import LargeClassblock from '../classblocks/LargeClassblock';



export default class ScheduleView extends React.Component {

    render() {
        const { semesters } = this.props;

        return (
            <div>
                <Table basic='very' celled columns={8} size='large'>
                    <Table.Header>
                        <Table.Row>
                            {[1,2,3,4,5,6,7,8].map(i =>
                                <Table.HeaderCell>{i}</Table.HeaderCell>
                            )}
                        </Table.Row>
                    </Table.Header>
                    <Table.Row>
                    {
                        semesters.map(semester =>    
                            <Table.Cell textAlign='center'>
                                <List>
                                    {semester.classes.map(cls =>
                                        <List.Item>
                                            <LargeClassblock class={cls} />
                                        </List.Item>  
                                    )}
                                </List>
                            </Table.Cell>
                        )
                    }
                    </Table.Row>
                </Table>
            </div>
        );
    }

}