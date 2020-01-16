import React, { createContext, useState } from 'react';
import { firebaseDb } from './firebaseDb';
import * as data from './wkouts.json';
import { shuffleList } from './utilities';

const { Exercises } = data;

const grabExercises = async () => {
  const dataPayload = await firebaseDb.once('value');

  console.log(dataPayload.val());

  return dataPayload.exists() ? dataPayload.val() : {};
};
//grabExercises();

const exercises = Object.values(Exercises);
const WorkoutContext = createContext(null);
const { Provider } = WorkoutContext; 

const initialWorkouts = shuffleList(exercises.filter(val => {
  return val.Equipment === "None"
})).slice(0, 8)

const StateProvider = ( { children }) => {
  const [equipment, setEquipment] = useState(["None"]);
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [favworkouts, setFavworkouts] = useState([]);
  const [exercisesAmount, setExercisesAmount] = useState(8);
  const [countdown, setCountdown] = useState(0);


  const addEquip = value => {
    equipment.includes(value) ? 
    setEquipment(equipment.filter(x => x !== value)) : 
    setEquipment([...equipment, value])
  }

  const toggleFavs = value => 
  {
    favworkouts.map(val=>val.Title).includes(value.Title) ?
    setFavworkouts(favworkouts.filter(x=>x.Title!== value.Title)) :
    setFavworkouts([...favworkouts, value])
    console.log("this is favorites")
    console.log(favworkouts)
    
  }

  const generateWorkouts = () => {
    const values = exercises.filter(val => {
      return equipment.includes(val.Equipment);
    })
    setWorkouts(shuffleList(values).slice(0, exercisesAmount))
  }

  const api = {
    equipment,
    addEquip,
    workouts, 
    generateWorkouts,
    exercisesAmount,
    setExercisesAmount,
    countdown,
    setCountdown,
    favworkouts,
    toggleFavs
  };

  return <Provider value={api}>{children}</Provider>;
}

export { WorkoutContext, StateProvider };