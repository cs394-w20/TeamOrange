import React from 'react';
import { Grid } from 'semantic-ui-react';
import SavedList from '../Components/SavedList';


const SavedPage = () => {
  return (
    <Grid centered style={{ marginTop: "20px"}}>
      <SavedList />
    </Grid>
  );
};

export default SavedPage