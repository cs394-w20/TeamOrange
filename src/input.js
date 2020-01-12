import React, { useEffect, useState } from 'react';
import { Container, Menu, Checkbox} from 'semantic-ui-react';

const EquipmentList  = ({items}) =>
(
    <div>
        {items.map(item => <Equipment item={item}/>)}
    </div>
);

function Equipment ({item})
{
    const [selected, setSelected] = useState(false)
    return(<div>
        <Checkbox onClick= {() => setSelected(!selected)}/>
        <span> {item.title}</span>
    </div>);
};



export default EquipmentList;