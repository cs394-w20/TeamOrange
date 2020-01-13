import React, { useState, useEffect } from "react";
import { Header, Card, Container } from "semantic-ui-react";
import { shuffleList } from "./utils";

const MAX_EXERCISES = 10;

const ExerciseList = ({ title, exercises }) => {
  // State variable equipmentOwned is a list of equipment owned by user. Default - None
  const [equipmentOwned, setEquipmentOwned] = useState(["None"]);
  // filteredExercises automatically randomises up to MAX_EXERCISES exercises whose equipments are included in equipmentOwned
  const filteredExercises = 
  shuffleList(exercises.filter(ex => equipmentOwned.includes(ex.equipment))
  .slice(0, MAX_EXERCISES));

  return (
    <Container>
      <Header as="h1">
        {title}
      </Header>
      <Header>
        {equipmentOwned[1]}
      </Header>
      <Card.Group itemsPerRow="1">
        {filteredExercises.map(exercise => (
          <Exercise key={exercise.title} exercise={exercise} />
        ))}
      </Card.Group>
    </Container>
  );
};

const Exercise = ({ exercise }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        {exercise.title}
      </Card.Header>
      <Card.Meta>
        Duration: {exercise.duration} minutes
      </Card.Meta>
      <Card.Description>
        Equipment: {exercise.equipment}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ExerciseList;
