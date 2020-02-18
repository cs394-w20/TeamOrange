import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppState } from '../../context';
import { Grid, Feed, Rating, Segment, Image, Button, Header, Label, Container } from 'semantic-ui-react';

const ListingPage = () => {
  const appState = useContext(AppState);
  const { data } = appState;

  const { id } = useParams();
  const listing = data[id];

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Segment
            basic
            attached='top'
            style={{ backgroundColor: "orange"}}
            fluid="false"
          >
            <Header content="" size="large">
              <Button 
              style={{ backgroundColor: "orange"}}
              icon="arrow left" 
              as={Link}
              to='/'/>
            </Header>
          </Segment>
          <Image src={listing.images[0]} />
        </Grid.Row>
        <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
          <Header>
            {listing.game}
            <Header.Subheader
              content={`${listing.minPlayers}-${listing.maxPlayers} Players`}
              style={{ fontStyle: "italic", color: "black" }}
            />
            <Header.Subheader content={listing.description} />
          </Header>
        </Grid.Row>
        <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
          <Header size="small">
            Tags:
            {listing.genre.map(g => <Label content={g} />)}
          </Header>
        </Grid.Row>
        <Feed>
          <Header size="small">
            Owner
          </Header>
          <Feed.Event>
            <Feed.Label image='./assets/cards_against_humanity/1.png' />
            <Feed.Content>
              <Feed.Summary>
                John Smith<br />
                <Feed.Date content='johnsmith335' />
                <br />
                <Rating defaultRating={3} maxRating={5} disabled />
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        <Grid.Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button>Contact User</Button>
          <Button color='yellow' >Request Rental</Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ListingPage;