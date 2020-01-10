import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

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
    </Container>
  );
}

export default App;
