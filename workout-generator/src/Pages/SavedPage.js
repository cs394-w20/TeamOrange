import React, { useContext } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import SavedList from '../Components/SavedList';
import { WorkoutContext } from '../context';


const SavedPage = () => {
  const workoutContext = useContext(WorkoutContext)
  const { favworkouts } = workoutContext;

  return (
    <Grid centered style={{ marginTop: "20px"}}>
      { favworkouts.length === 0 ? <Header inverted content="Save some workouts here for later!" />
      : <SavedList /> }
    </Grid>
  );
};

export default SavedPage