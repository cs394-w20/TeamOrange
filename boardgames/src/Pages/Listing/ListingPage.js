import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppState } from '../../context';
import { Grid, Image, Button, Header, Label, Container, Divider, Card } from 'semantic-ui-react';

const ListingPage = () => {
  const appState = useContext(AppState);
  const { data } = appState;

  const { id } = useParams(); 
  const listing = data[id];

  console.log(id)
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Image src={listing.images[0]} />
        </Grid.Row>
        <Grid.Row style={{ margin: "0px 10px 0px 10px "}}>
          <Header>
            {listing.game}
            <Header.Subheader
              content={`${listing.minPlayers}-${listing.maxPlayers} Players`}
              style={{ fontStyle: "italic", color: "black"}}
            />
            <Header.Subheader content={listing.description} />
          </Header>
        </Grid.Row>
        <Divider />
        <Grid.Row style={{ margin: "0px 10px 0px 10px "}}>
          <Header size="small">
            Tags: 
            {listing.genre.map(g => <Label content={g} />)}
          </Header>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ListingPage;