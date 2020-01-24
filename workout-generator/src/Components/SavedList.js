import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react';
import Workout from '../Components/Workout';
import { WorkoutContext } from '../context';


const SavedWorkouts = () => {
  const workoutContext = useContext(WorkoutContext)
  const {favworkouts, toggleFavs, setCountdown, replaceWorkout} = workoutContext;

  return (
    <Card.Group style={{ textAlign: "left", width: "80%"}} itemsPerRow={1}> 
      {favworkouts.map(exercise => {
        return (
          <Workout 
            exercise={exercise} 
            key={exercise.Title}   
            replaceWorkout={replaceWorkout} 
            setCountdown={() => setCountdown(parseInt(exercise.Duration) * 1000)}   
            toggleFavs={toggleFavs}
            favworkouts={favworkouts}
          />
        )}
      )}
    </Card.Group>
  )
}

export default SavedWorkouts