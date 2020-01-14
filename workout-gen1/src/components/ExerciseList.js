import React, { useState, useEffect } from "react";
import { Header, Card, Container, Embed } from "semantic-ui-react";
import { EquipmentContext } from "./EquipmentContext";
import { shuffleList } from "./utils";

const MAX_EXERCISES = 10;

const ExerciseList = ({ title, exercises }) => {
  const exerciseList = Object.values(exercises);

  const ExercisesComponent = ({ equipmentOwned }) => {
    // filteredExercises automatically randomises up to MAX_EXERCISES exercises whose equipments are included in equipmentOwned
    const filteredExercises = shuffleList(
      exerciseList
        .filter(ex => equipmentOwned.includes(ex.equipment))
        .slice(0, MAX_EXERCISES)
    );

    console.log(filteredExercises);

    return (
      <React.Fragment>
        <Header>{equipmentOwned[1]}</Header>
        <Card.Group itemsPerRow="1">
          {filteredExercises.map(exercise => (
            <Exercise key={exercise.title} exercise={exercise} />
          ))}
        </Card.Group>
      </React.Fragment>
    );
  };

  return (
    <Container>
      <Header as="h1">{title}</Header>
      <EquipmentContext.Consumer>
        {({ lst }) => (
          <ExercisesComponent equipmentOwned={["None"].concat(lst)} />
        )}
      </EquipmentContext.Consumer>
    </Container>
  );
};

const Exercise = ({ exercise }) => (
  <Card>
    <Card.Content>
      <Card.Header>{exercise.title}</Card.Header>
      <Card.Meta>Duration: {exercise.duration} seconds</Card.Meta>
      <Card.Description>Equipment: {exercise.equipment}</Card.Description>
      <Card.Content extra style={{ maxWidth: "400px", maxHeight: "300px" }}>
        <p>Tutorial: </p>
        <Embed url={exercise.tutorial} />
      </Card.Content>
    </Card.Content>
  </Card>
);

export default ExerciseList;
