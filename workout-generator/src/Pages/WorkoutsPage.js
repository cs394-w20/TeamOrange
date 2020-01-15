import React, {useContext} from 'react';
import { Grid, Header, Button, Segment, Divider } from 'semantic-ui-react';
import HIITheader from '../Components/LogoHeader';
import WorkoutList from '../Components/WorkoutList';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../context';

const WorkoutsPage = () => {
  const workoutContext = useContext(WorkoutContext);
  const { equipment } = workoutContext;
 
  const selectedEquipment =
    (equipment.length == 1 & equipment[0] == "None") ? 
    "No Equipment" : 
    equipment.join(", ") 

  return ([
    <HIITheader key={'header'} />,
    <Grid key={'content'} centered style={{ marginTop: "35px" }} >
      <Grid.Row>
        <WorkoutListHeader selectedEquipment={selectedEquipment} />
      </Grid.Row>
      <Grid.Row>
        <WorkoutList />
      </Grid.Row>
    </Grid>
  ]);
}

const WorkoutListHeader = ({ selectedEquipment }) => {
  return (
    <Segment color="blue" style={{ width: "80%", textAlign: "left"}}>
      <Header dividing as="h3">
        <Header textAlign="center" dividing content="CUSTOM WORKOUT" color="blue" />
        <Header.Subheader content="Selected Workout Equipment:" />
        {selectedEquipment}
      </Header>
      <Button 
        compact
        fluid 
        as={Link} 
        to="/"
        primary
        content="Back to Equipment"
      />
    </Segment>
  )
}

export default WorkoutsPage