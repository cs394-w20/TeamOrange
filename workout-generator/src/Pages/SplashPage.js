import React from 'react';
import { Grid } from 'semantic-ui-react';
import EquipmentForm from '../Components/EquipmentForm';

const SplashPage = () => {
  return (
    <Grid centered style={{ marginTop: "15px" }}>
      <Grid.Row>
        <EquipmentForm />
      </Grid.Row>
    </Grid>
  );
}

export default SplashPage