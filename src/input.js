import React, { useEffect, useState } from 'react';
import { Container, Menu, Checkbox} from 'semantic-ui-react';

const EquipmentList  = ({items}) =>
(
    <div>
        {items.map(item => 
        <div>
            <Checkbox />
            <span> {item.title}</span>
        </div>
        )}
    </div>
);

export default EquipmentList;