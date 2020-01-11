import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import ExerciseList from  './components/ExerciseList'

const db = {
  title: "Exercises",
  exercises: [
    {
      id: "1",
      title: "Mountain climbers"
    },
    {
      id: "2",
      title: "Push ups"
    }
  ]
};

function App() {
  return (
    <Container fluid>
      <Menu attached="top">
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Interval Generator</Menu.Item>
      </Menu>
      <Menu attached="top">
        <Menu.Item>Workout</Menu.Item>
        <Menu.Item>Equipment</Menu.Item>
      </Menu>
      <Menu attached="bottom">
        <Menu.Item>Timer</Menu.Item>
      </Menu>
      <ExerciseList exercises={db.exercises}/>
    </Container>
  );
}

export default App;
