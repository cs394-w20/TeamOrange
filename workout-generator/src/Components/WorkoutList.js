import React, { useContext } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { WorkoutContext } from '../context';

const WorkoutList = () => {
  const workoutContext = useContext(WorkoutContext)
  const { workouts, equipment } = workoutContext;

  return (
    <Menu vertical style={{ textAlign: "left", width: "80%"}}> 
      {workouts.map(val => {
        return (
          <Menu.Item>
            <Header as="h3">
              {val.Title} | {val.Duration}
              <Header.Subheader content={val.Tutorial} />
            </Header>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

export default WorkoutList