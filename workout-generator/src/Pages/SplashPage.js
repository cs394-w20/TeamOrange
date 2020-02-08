import React from 'react';
import { Grid } from 'semantic-ui-react';
import EquipmentForm from '../Components/EquipmentForm';
import ModalWindow from '../Components/ModalWindow';

const SplashPage = () => {
  return (
    <Grid centered style={{ marginTop: "15px" }}>
      <Grid.Row>
        <ModalWindow />
        <EquipmentForm />
      </Grid.Row>
    </Grid>
  );
}

export default SplashPage