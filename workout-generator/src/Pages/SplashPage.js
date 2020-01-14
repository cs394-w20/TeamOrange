import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import HIITheader from '../Components/HIITheader';
import EquipmentForm from '../Components/EquipForm';

const SplashPage = () => {
  return ([
    <HIITheader key={'header'} />,
    <Grid key={'content'} centered style={{ marginTop: "35px" }}>
      <Grid.Row>
        <EquipmentForm />
      </Grid.Row>
    </Grid>
  ]);
}

export default SplashPage