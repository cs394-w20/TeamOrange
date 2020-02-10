import React, { useContext } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import SavedList from '../Components/SavedList';
import { WorkoutContext } from '../context';


const SavedPage = () => {
  const workoutContext = useContext(WorkoutContext)
  const { favworkouts } = workoutContext;

  return (
    <Grid centered style={{ marginTop: "20px"}}>
      { favworkouts.length === 0 ? <NoFavesMessage />
      : <SavedList /> }
    </Grid>
  );
};

const NoFavesMessage = () =>
  <Card style={{ textAlign: "left", width: "80%", marginTop: "20px"}}>
    <Card.Content>
      <Card.Header content="Your Favourites list is empty!" />
      <Card.Description>
        Save workouts to this list by tapping on the heart icon next to the workout name!
      </Card.Description>
    </Card.Content>
  </Card>

export default SavedPage