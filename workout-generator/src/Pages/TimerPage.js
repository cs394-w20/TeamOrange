import React from 'react';
import { Grid } from 'semantic-ui-react';
import CountdownTimer from '../Components/CountdownTimer';


const TimerPage = () => {
  return (
    <Grid centered style={{ marginTop: "150px"}}>
      <CountdownTimer />
    </Grid>
  );
};

export default TimerPage