import React, {useContext} from 'react';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';
import WorkoutList from '../Components/WorkoutList';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../context';

const WorkoutsPage = () => {
  const workoutContext = useContext(WorkoutContext);
  const { equipment, exercisesAmount } = workoutContext;
 
  const selectedEquipment =
    (equipment.length === 1 & equipment[0] === "None") ? 
    "No Equipment" : 
    equipment.join(", ") 

  return (
    <Grid key={'content'} centered style={{ marginTop: "15px" }} >
      <Grid.Row>
        <WorkoutListHeader selectedEquipment={selectedEquipment} exercisesAmount={exercisesAmount} />
      </Grid.Row>
      <Grid.Row>
        <WorkoutList />
      </Grid.Row>
    </Grid>
  );
}

const WorkoutListHeader = ({ selectedEquipment, exercisesAmount }) => {
  return (
    <Segment color="blue" style={{ width: "80%", textAlign: "left"}}>
      <Header dividing as="h3">
        <Header textAlign="center" dividing content="CUSTOM WORKOUT" color="blue" />
        <Header.Subheader content="Selected Round Count:" />
        {`${exercisesAmount} Total Exercises`}
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