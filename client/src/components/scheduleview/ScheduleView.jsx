
import React from 'react';

import {
    List,
    Table,
    Header,
    Label,
} from 'semantic-ui-react';

import LargeClassblock from '../classblocks/LargeClassblock';



export default class ScheduleView extends React.Component {

    render() {
        const { semesters } = this.props;

        return (
            <div>
                <Table basic='very' celled columns={8} size='large' style={{height:'90vh'}}>
                    <Table.Header>
                        <Table.Row>
                            {[1,2,3,4,5,6,7,8].map(i => 
                                <Table.HeaderCell style={{textAlign: 'center'}}>
                                    {i}
                                    <Label pointing='left' color='gray'>
                                        ({semesters[i-1].classes.map(cls=>cls.credits).reduce((a,b)=>a+b, 0)})
                                    </Label>
                                </Table.HeaderCell>
                            )}
                        </Table.Row>
                    </Table.Header>
                    <Table.Row>
                    {
                        semesters.map(semester =>    
                            <Table.Cell textAlign='center' style={{verticalAlign: 'text-top'}}>
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