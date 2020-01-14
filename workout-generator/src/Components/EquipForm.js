import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Form, Checkbox, Header, Button } from 'semantic-ui-react';
import { EQUIPMENT_LIST } from '../constants';
import { WorkoutContext } from '../context.js';

const EquipmentForm = () => {
  const workoutContext = useContext(WorkoutContext);
  const { equipment, addEquip, generateWorkouts } = workoutContext;

  return (
    <Segment padded>
      <Form size="large">
        <Form.Field>
          <Header content="What Equipment Do You Have?" style={{ color: "blueviolet" }} dividing />
        </Form.Field>
        {EQUIPMENT_LIST.map(item => {
          return (
            <Form.Field key={item.id} style={{ textAlign: "left"}}>
              <Checkbox 
                label={item.title} 
                value={item.title} 
                checked={equipment.includes(item.title)}
                onChange={(e, {value}) => addEquip(value)}/>
            </Form.Field>
          )
        })}
        <Button 
          onClick={generateWorkouts}
          as={Link} 
          to='/workouts' 
          style={{ color: "white", backgroundColor: "blueViolet"}}>
          Find Workouts!
        </Button>
      </Form>
    </Segment>
  );
}

export default EquipmentForm