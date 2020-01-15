import React, { createContext, useState } from 'react';
import { firebaseDb } from './firebaseDb';
import * as data from './wkouts.json';

const { Exercises } = data;

const grabExercises = async () => {
  const dataPayload = await firebaseDb.once('value');

  console.log(dataPayload.val());

  return dataPayload.exists() ? dataPayload.val() : {};
};
grabExercises();

const exercises = Object.values(Exercises);
const WorkoutContext = createContext(null);
const { Provider } = WorkoutContext; 

const initialWorkouts = exercises.filter(val => {
  return val.Equipment === "None"
})

const StateProvider = ( { children }) => {
  const [equipment, setEquipment] = useState(["None"]);
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [exercisesAmount, setExercisesAmount] = useState(8);

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
    generateWorkouts,
    exercisesAmount,
    setExercisesAmount
  };

  return <Provider value={api}>{children}</Provider>;
}

export { WorkoutContext, StateProvider };