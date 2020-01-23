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

const StateProvider = ({ children }) => {
  const [equipment, setEquipment] = useState(["None"]);
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [replace, setReplace] = useState([]);
  const [favworkouts, setFavworkouts] = useState([]);
  const [exercisesAmount, setExercisesAmount] = useState(8);
  const [countdown, setCountdown] = useState(0);


  const addEquip = value => {
    equipment.includes(value) ?
      setEquipment(equipment.filter(x => x !== value)) :
      setEquipment([...equipment, value])
  }

  const toggleFavs = value => {
    favworkouts.map(val => val.Title).includes(value.Title) ?
      setFavworkouts(favworkouts.filter(x => x.Title !== value.Title)) :
      setFavworkouts([...favworkouts, value])
  }

  const generateWorkouts = () => {
    const values = exercises.filter(val => {
      return equipment.includes(val.Equipment);
    })

    let substr = shuffleList(values);
    console.log(substr);
    setWorkouts(substr.slice(0, exercisesAmount));
    console.log(substr.slice(0, exercisesAmount))
    setReplace(substr.slice(exercisesAmount, substr.length));
    console.log(substr.slice(exercisesAmount, substr.length))
  }

  const replaceWorkout = clickElement => {
    if (replace.length > 0){
      let val = replace;
    let element = val.pop();
    let val1 = workouts;
    let index = val1.indexOf(clickElement);
    val1[index] = element;
    setReplace(val);
    setWorkouts(val1);
    }
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
    toggleFavs,
    replaceWorkout
  };

  return <Provider value={api}>{children}</Provider>;
}

export { WorkoutContext, StateProvider };