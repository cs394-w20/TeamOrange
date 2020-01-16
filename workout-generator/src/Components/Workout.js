import React from 'react';
import { Card, Embed, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Workout = ({ exercise, setCountdown, toggleFavs, favworkouts }) => (
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
        icon={favworkouts.includes(exercise) ? "minus" : "plus"}
        basic 
        color='blue' 
        content={favworkouts.includes(exercise) ? "REMOVE FROM FAVORITES" : "SAVE TO FAVORITES"}
        attached="bottom"
        onClick = {() => toggleFavs(exercise)}
      />
    </Card.Content>
  </Card>
);

export default Workout