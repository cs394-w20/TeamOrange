import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SplashPage from './Pages/SplashPage';
import WorkoutsPage from './Pages/WorkoutsPage';
import { WorkoutContext } from './context';

const App = () => {
  const workoutContext = useContext(WorkoutContext)
  const { equipment, workouts } = workoutContext;

  console.log('equip', equipment)
  console.log('workout list', workouts)

  return (
    <BrowserRouter>
      <Route 
        exact 
        path='/' 
        render={() => <SplashPage />}
      />
      <Route
        path='/workouts'
        render={() => <WorkoutsPage />}
      />
    </BrowserRouter>
  );
}

export default App;
