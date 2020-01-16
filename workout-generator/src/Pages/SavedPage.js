import React, { useContext } from 'react';
import { Card, Embed, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../context';


const SavedWorkoutsPage = () => {
  const workoutContext = useContext(WorkoutContext)
  const {favworkouts, toggleFavs, setCountdown} = workoutContext;

  return (
    <Card.Group style={{ textAlign: "left", width: "80%"}} itemsPerRow={1}> 
      {favworkouts.map(exercise => {
        return (
          <FavWorkout 
            exercise={exercise} 
            key={exercise.Title}    
            setCountdown={setCountdown}     
            toggleFavs={toggleFavs}
          />
        )}
      )}
    </Card.Group>
  )
}

const FavWorkout = ({ exercise, setCountdown, toggleFavs}) => (
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
        content="REMOVE FROM FAVORITES"
        attached="bottom"
        onClick = {() => toggleFavs(exercise)}
      />
    </Card.Content>
  </Card>
);



export default SavedWorkoutsPage