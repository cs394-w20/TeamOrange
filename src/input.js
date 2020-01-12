import React, { useEffect, useState } from 'react';
import { Container, Menu, Checkbox } from 'semantic-ui-react';

const EquipmentList = ({ items }) => {
    const [lst, setLst] = useState([])

    return (
        <div>
            {items.map(item => <Equipment state={{ lst, setLst }} item={item} />)}
        </div>
        <button>
            Okay
        </button>
    )
};

const Equipment = ({ item, state }) => {

    return (<div>
        <Checkbox onClick={() => {
            state.setLst(state.lst.includes(item.title) ? state.lst.filter(y => y !== item.title) : [item.title].concat(state.lst));
            console.log(state.lst);
        }} />
        <span> {item.title}</span>
    </div>);
};

export def