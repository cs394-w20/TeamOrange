import React, { useEffect, useState } from "react";
import { Container, Menu, Checkbox } from "semantic-ui-react";
import { EquipmentContext } from "./components/Equipment-context";

const EquipmentList = ({ items }) => {
  return (
    <EquipmentContext.Consumer>
      {({ lst, updateLst }) => (
        <div>
          {items.map(item => (
            <Equipment key={item.id} state={{ lst, updateLst }} item={item} />
          ))}
        </div>
      )}
    </EquipmentContext.Consumer>
  );
};

const Equipment = ({ item, state }) => {
  return (
    <div>
      <Checkbox
        onClick={() => {
          state.updateLst(
            state.lst.includes(item.title)
              ? state.lst.filter(y => y !== item.title)
              : [item.title].concat(state.lst)
          );
        }}
      />
      <span> {item.title}</span>
    </div>
  );
};

export default EquipmentList;
