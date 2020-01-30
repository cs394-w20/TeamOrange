import React, { useState } from 'react';
import { Card, Embed, Button, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Workout = ({ exercise, setCountdown, toggleFavs, favworkouts , replaceWorkout, refresh}) =>{
  const [videoHidden, setVideoHidden] = useState(false)
  
  console.log(exercise.Title);
  return (
    <Card color="blue">
      <Card.Content>
        <Button.Group floated="right">
          <Button
            color="blue"
            basic
            icon="exchange"
            content="Swap"
            onClick={() => {
              replaceWorkout(exercise);
              refresh();
            }}
          />
          <Button
            icon={favworkouts.includes(exercise) ? "heart" : "heart outline"}
            basic={favworkouts.includes(exercise) ? false : true}
            color="blue"
            onClick={() => toggleFavs(exercise)}
          />
        </Button.Group>
        <Card.Header>{exercise.Title}</Card.Header>
        <Card.Meta>Duration: {exercise.Duration} seconds</Card.Meta>
        <Card.Meta>Equipment: {exercise.Equipment}</Card.Meta>
        <Card.Description>
          <Accordion>
            <Accordion.Title active={videoHidden} icon="right">
              <Button
                icon={videoHidden ? "close" : "video"}
                basic={videoHidden ? true : false}
                color="blue"
                content={videoHidden ? "Close Tutorial" :"Watch Tutorial"}
                onClick={() => setVideoHidden(!videoHidden)}
              />
            </Accordion.Title>
            <Accordion.Content active={videoHidden}>
              <Embed
                active
                autoplay="false"
                id={exercise.Tutorial}
                source="youtube"
                style={{ maxWidth: "400px", maxHeight: "300px" }}
              />
            </Accordion.Content>
          </Accordion>
        </Card.Description>
      </Card.Content>
    </Card>
  );};

export default Workout