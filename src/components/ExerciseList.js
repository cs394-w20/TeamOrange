import React, { useState, useEffect } from "react";
import { Container, Menu, Button } from 'semantic-ui-react';

const buttonColor = selected => (selected ? "success" : null);

const ExerciseList = ({ exercises }) => {

  return(
    <Button.Group>
      {exercises.map(exercise => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
          />
        ))}
    </Button.Group>
  )
};

const Exercise = ({ exercise }) => (
  <Button>
    Exercise ID {exercise.id} : {exercise.title}
  </Button>
);

export default ExerciseList;