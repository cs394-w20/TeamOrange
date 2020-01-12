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
      "title": "Jumping rope",
    },
    {
      "id": "2",
      "title": "Power ball",
    },
    {
      "id": "3",
      "title": "Dumbbells",
    },
    {
      "id": "4",
      "title": "Barbell / Plates",
    },
    {
      "id": "5",
      "title": "Pull up bar",
    },
    {
      "id": "6",
      "title": "Kettlebell",
    },
    {
      "id": "7",
      "title": "Jumping box",
    },
    {
      "id": "8",
      "title": "Rings",
    },
    {
      "id": "9",
      "title": "Resistance Band",
    },
    {
      "id": "10",
      "title": "Sandbag",
    }
  ]
};

const App = () =>  (
  <div>
    <h1>{ welcome.title }</h1>
    <h3>{ welcome.instruction}</h3>
    <EquipmentList items={welcome.equipment_list}/>
    <ExerciseList title={db.title} exercises={db.exercises}/>
  </div>
);

export default App;
