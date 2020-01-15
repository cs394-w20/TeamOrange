import React, { useContext } from 'react';
import { Card, Embed, Button } from 'semantic-ui-react';
import { WorkoutContext } from '../context';
import { shuffleList } from '../utilities';


const WorkoutList = () => {
  const workoutContext = useContext(WorkoutContext)
  const { workouts, exercisesAmount } = workoutContext;

  const workoutList = shuffleList(workouts.slice(0, exercisesAmount))

  return (
    <Card.Group style={{ textAlign: "left", width: "80%"}} itemsPerRow={1}> 
      {workoutList.map(exercise => <Workout exercise={exercise} key={exercise.Title} />)}
    </Card.Group>
  )
}

const Workout = ({ exercise }) => (
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
      <div className='ui two buttons'>
      <Button 
        color='green' 
        content="START TIMER"
      />
      <Button 
        basic 
        color='blue' 
        content="SAVE TO FAVORITES"
      />
      </div>
    </Card.Content>
  </Card>
);

export default WorkoutList