import React, { useState, useContext, createRef } from 'react';
import { AppState } from '../../context';
import Games from './Games';
import { Button, Header, Container, Segment, Sticky, Grid, Input } from 'semantic-ui-react';

const HomePage = () => {
  const state = useContext(AppState);
  const { data } = state;
  const [relevantGames, setRelevantGames]= useState(data);
  const contextRef = createRef();
  const [searched, setSearched]=useState("");

  function handleMessage(input) {
    setSearched(input.target.value); 
    console.log(searched); 
  }
  function updateData(){
    console.log("reached updateData")
    const temp=data;
    const temp2=data.filter(item=>(item.game===searched));
    
    setRelevantGames(searched !== "" ? temp2 : temp);
    console.log("new relevant games");
    console.log(relevantGames);
  }

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container>
        <Grid padded textAlign="center">
          <Grid.Row>
            <Input onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search..." />
            <Button style={{ marginLeft: "20px"}}  onClick={updateData}  basic content="Filter" /> 
          </Grid.Row>
          <Grid.Row>
            <Games data={relevantGames} />
          </Grid.Row>
        </Grid>
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
      fluid="true"
    >
      <Header content="Marketplace" size="large" />
    </Segment>
  );
};

export default HomePage;