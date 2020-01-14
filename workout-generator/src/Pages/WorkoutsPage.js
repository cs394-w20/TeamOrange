import React, {useContext} from 'react';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';
import HIITheader from '../Components/HIITheader';
import WorkoutList from '../Components/WorkoutList';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../context';

const WorkoutsPage = () => {
  const workoutContext = useContext(WorkoutContext);
  const { equipment } = workoutContext;
 
  const selectedEquipment = equipment.join(", ")

  return ([
    <HIITheader key={'header'} />,
    <Grid key={'content'} centered style={{ marginTop: "35px" }}>
      <Grid.Row>
        <Segment color="purple" style={{ width: "80%", textAlign: "left"}}>
          <Header dividing content="Selected Equipment:" />
          <Header.Subheader content={selectedEquipment} />
        </Segment>
      </Grid.Row>
        <Button 
          compact 
          as={Link} 
          to="/"
          style={{ backgroundColor: "blueviolet", color: "white" }}
        >
          Back to Equipment
        </Button>
      <Grid.Row>
        <WorkoutList />
      </Grid.Row>
    </Grid>
  ]);
}

export default WorkoutsPage