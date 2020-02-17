import React, { useContext, createRef } from 'react';
import { AppState } from '../context';
import { Grid, Header, Container, Card, Image, Segment, Sticky } from 'semantic-ui-react';

const HomePage = () => {
  const state = useContext(AppState);
  const { data } = state;
  console.log(data)
  const contextRef = createRef();

  const Games = () => {
    return (
      <Card.Group itemsPerRow={1}>
        {data.map(game => 
          <Card>
            <Image src={game.image} size="medium" />
          </Card>
        )}
      </Card.Group>
    );
  }

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container>
        <Games />
      </Container>
    </div>
  );
};

const PageHeader = () => {
  return (
    <Segment
      basic
      attached='top'
      style={{ backgroundColor: "orange", textAlign: "center" }}
      fluid
    >
      <Header content="Marketplace" size="large" />
    </Segment>
  );
}

export default HomePage;