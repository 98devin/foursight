

import React from 'react';

import { Button } from 'semantic-ui-react';


const computeColor = (creditKind) => {
    switch (creditKind) {
        case 'QUANTITATIVE': return 'orange';
        case 'SOCIAL_SCIENCE': return 'yellow';
        case 'NATURAL_SCIENCE': return 'green';
        case 'ENGINEERING': return 'blue';
        case 'HUMANITIES': return 'violet';
    }
}

const SmallClassblock = ({ class: { creditKinds, credits, name, id } }) => (
    <div>
        <Button color={computeColor(creditKinds[0])} 
                size='large' animated='vertical'
                style={{width: '90%'}} active={false}>
            <Button.Content visible>{`${name} (${credits})`}</Button.Content>
            <Button.Content hidden>{id}</Button.Content>
        </Button>
    </div>
);


export default SmallClassblock;
