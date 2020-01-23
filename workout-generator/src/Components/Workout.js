import React from 'react';
import { Card, Embed, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Workout = ({ exercise, setCountdown, toggleFavs, favworkouts }) =>{ 
  return(
  <Card color="blue">
    <Card.Content>
      <Card.Header>{exercise.Title}</Card.Header>
      <Card.Meta>Duration: {exercise.Duration} seconds</Card.Meta>
      <Card.Description>Equipment: {exercise.Equipment}</Card.Description>
      <Card.Content extra style={{ maxWidth: "400px", maxHeight: "300px" }}>
        <p>Tutorial: </p>
        <Embed id={exercise.Tutorial} source='youtube' />
      </Card.Content>
    </Card.Content>
    <Card.Content extra>
      <Button
        as={Link}
        to="/timer"
        fluid
        onClick={setCountdown}
        color='green'
        icon='time'
        content="TIMER"
      />
      <Button
        color='blue'
        fluid
        icon='forward'
        content="REPLACE"
      />
      <Button
        fluid
        icon={favworkouts.includes(exercise) ? "minus" : "plus"}
        basic
        color='blue'
        content={favworkouts.includes(exercise) ? "REMOVE FROM FAVORITES" : "SAVE TO FAVORITES"}
        onClick={() => toggleFavs(exercise)}
      />
    </Card.Content>
  </Card>
)};

export default Workout