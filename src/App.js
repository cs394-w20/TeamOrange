import React from 'react';
import ExerciseList from  './components/ExerciseList'
import EquipmentList from './input'
import db from './shared/exercises.js'
import { Container, Menu, Checkbox} from 'semantic-ui-react';


// const db = {
//   title: "Exercises",
//   exercises: [
//     {
//       id: "1",
//       title: "Mountain climbers"
//     },
//     {
//       id: "2",
//       title: "Push ups"
//     }
//   ]
// };

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
    <ExerciseList exercises={db.exercises}/>
  </div>
);

export default App;
