import React, { createContext, useState } from 'react';
import * as data from './wkouts.json';

const { Exercises } = data;
const exercises = Object.values(Exercises)
const WorkoutContext = createContext(null);
const { Provider } = WorkoutContext; 

const initialWorkouts = exercises.filter(val => {
  return val.Equipment === "None"
})

const StateProvider = ( { children }) => {
  const [equipment, setEquipment] = useState(["None"]);
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const addEquip = value => {
    equipment.includes(value) ? 
    setEquipment(equipment.filter(x => x !== value)) : 
    setEquipment([...equipment, value])
  }

  const generateWorkouts = () => {
    const values = exercises.filter(val => {
      return equipment.includes(val.Equipment);
    })
    setWorkouts(values)
  }

  const api = {
    equipment,
    addEquip,
    workouts, 
    generateWorkouts
  };

  return <Provider value={api}>{children}</Provider>;
}

export { WorkoutContext, StateProvider };