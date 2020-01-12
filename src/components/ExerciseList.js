import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

const ExerciseList = ({ exercises }) => {
  const filteredExercises = exercises;

  return (
    <Card.Group>
      {filteredExercises.map(exercise => (
        <Exercise key={Object.keys} exercise={exercise} />
      ))}
    </Card.Group>
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
