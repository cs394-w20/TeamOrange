import React from 'react';
import { Card, Embed, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Workout = ({ exercise, setCountdown, toggleFavs, favworkouts , replaceWorkout, refresh}) =>{ 

    console.log(exercise.Title);
  return(
  <Card color="blue">
    <Card.Content>
      <Card.Header>{exercise.Title}</Card.Header>
      <Card.Meta>Duration: {exercise.Duration} seconds</Card.Meta>
      <Card.Description>Equipment: {exercise.Equipment}</Card.Description>
      <Card.Content extra style={{ maxWidth: "400px", maxHeight: "300px" }}>
        <p>Tutorial: </p>
        <Embed active autoplay="false" id={exercise.Tutorial} source='youtube' icon="play"/>
      </Card.Content>
    </Card.Content>
    <Card.Content extra>
      <Button
        color='blue'
        attached='top'
        fluid
        icon='exchange'
        content="REPLACE"
        onClick={() => { replaceWorkout(exercise); refresh(); }}
      />
      <Button
        attached='bottom'
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