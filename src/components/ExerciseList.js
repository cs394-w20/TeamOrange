import React, { useState, useEffect } from "react";
import { Card } from 'semantic-ui-react';

const ExerciseList = ({ exercises }) => {

  return(
    <Card.Group>
      {exercises.map(exercise => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
          />
        ))}
    </Card.Group>
  )
};

const Exercise = ({ exercise }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        Exercise ID {exercise.id}
      </Card.Header>
      {exercise.title}
    </Card.Content>
  </Card>
);

export default ExerciseList;