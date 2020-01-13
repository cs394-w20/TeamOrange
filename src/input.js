import React, { useEffect, useState } from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { EquipmentContext } from "./components/EquipmentContext";

const EquipmentList = ({ items }) => {
  return (
    <div>
      <EquipmentContext.Consumer>
        {({ lst, updateLst }) => (
          <React.Fragment>
            {items.map(item => (
              <Equipment key={item.id} state={{ lst, updateLst }} item={item} />
            ))}
          </React.Fragment>
        )}
      </EquipmentContext.Consumer>
      <br />
      <Button primary>Generate Workout</Button>
    </div>
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
