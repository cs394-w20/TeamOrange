import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

function App() {
  return (
    <Container fluid>
      <Menu attached="top">
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Interval Generator</Menu.Item>
      </Menu>
    </Container>
  );
}

export default App;
