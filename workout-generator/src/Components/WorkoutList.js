import React, { useContext } from 'react';
import { Card, Embed } from 'semantic-ui-react';
import { WorkoutContext } from '../context';
import { MAX_EXERCISES } from '../constants';
import { shuffleList } from '../utilities';

const Workout = ({ exercise }) => (
  <Card>
    <Card.Content>
      <Card.Header>{exercise.Title}</Card.Header>
      <Card.Meta>Duration: {exercise.Duration} seconds</Card.Meta>
      <Card.Description>Equipment: {exercise.Equipment}</Card.Description>
      <Card.Content extra style={{ maxWidth: "400px", maxHeight: "300px" }}>
        <p>Tutorial: </p>
        <Embed url={exercise.tutorial} />
      </Card.Content>
    </Card.Content>
  </Card>
);

const WorkoutList = () => {
  const workoutContext = useContext(WorkoutContext)
  const { workouts } = workoutContext;

  const workoutList = shuffleList(workouts.slice(0, MAX_EXERCISES))

  return (
    <Card.Group style={{ textAlign: "left", width: "80%"}}> 
      {workoutList.map(exercise => <Workout exercise={exercise} key={exercise.Title} />)}
    </Card.Group>
  )
}

export default WorkoutList