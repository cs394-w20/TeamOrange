import React, { useContext } from 'react';
import { Card, Embed, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../context';
import { shuffleList } from '../utilities';


const WorkoutList = () => {
  const workoutContext = useContext(WorkoutContext)
  const { workouts, setCountdown, exercisesAmount, favworkouts, toggleFavs, setFavworkouts } = workoutContext;

  const workoutList = shuffleList(workouts.slice(0, exercisesAmount))

  return (
    <Card.Group style={{ textAlign: "left", width: "80%"}} itemsPerRow={1}> 
      {workoutList.map(exercise => {
        return (
          <Workout 
            exercise={exercise} 
            key={exercise.Title}
            setCountdown={() => setCountdown(parseInt(exercise.Duration) * 1000)}
            favworkouts={favworkouts}
            toggleFavs={toggleFavs}
            setFavworkouts={setFavworkouts}
         
          />
        )}
      )}
    </Card.Group>
  )
}

const Workout = ({ exercise, setCountdown, favworkouts, toggleFavs, setFavworkouts }) => (
  <Card color="blue">
    <Card.Content>
      <Card.Header>{exercise.Title}</Card.Header>
      <Card.Meta>Duration: {exercise.Duration} seconds</Card.Meta>
      <Card.Description>Equipment: {exercise.Equipment}</Card.Description>
      <Card.Content extra style={{ maxWidth: "400px", maxHeight: "300px" }}>
        <p>Tutorial: </p>
        <Embed url={exercise.tutorial} />
      </Card.Content>
    </Card.Content>
    <Card.Content extra>
      <Button 
        as={Link}
        to="/timer"
        onClick={setCountdown}
        color='green' 
        icon='time'
        content="TIMER"
        attached="top"
      />
      <Button 
        icon="plus"
        basic 
        color='blue' 
        content="SAVE TO FAVORITES"
        attached="bottom"
        onClick = {setFavworkouts(toggleFavs(favworkouts))}
      />
    </Card.Content>
  </Card>
);

export default WorkoutList