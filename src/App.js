import React from 'react';
import EquipmentList from './input'
import { Container, Menu, Checkbox} from 'semantic-ui-react';

const welcome = {
  title: "NU-HIIT"
  ,instruction: "Select your equipment:"
  ,equipment_list: [
    {
      "id": "1",
      "title": "Dumbbells",
    },
    {
      "id": "2",
      "title": "Barbells",
    },
    {
      "id": "3",
      "title": "Pullup-Up Bar",
    },
    {
      "id": "4",
      "title": "Dip Bar",
    },
    {
      "id": "5",
      "title": "Kettlebell",
    }
  ]
};

const App = () =>  (
  <div>
    <h1>{ welcome.title }</h1>
    <h3>{ welcome.instruction}</h3>
    <EquipmentList items={welcome.equipment_list}/>
  </div>
);

export default App;
