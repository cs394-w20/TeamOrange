import React from 'react';
import { Grid } from 'semantic-ui-react';
import HIITheader from '../Components/LogoHeader';
import EquipmentForm from '../Components/EquipmentForm';

const SplashPage = () => {
  return (
    <React.Fragment>
      <HIITheader />
      <Grid centered style={{ marginTop: "35px" }}>
        <Grid.Row>
          <EquipmentForm />
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default SplashPage