import React, { useContext } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import SavedList from '../Components/SavedList';
import { WorkoutContext } from '../context';


const ProfilePage = () => {
  const workoutContext = useContext(WorkoutContext)
  // const { favworkouts } = workoutContext;
};

export default ProfilePage