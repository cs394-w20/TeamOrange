import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SplashPage from './Pages/SplashPage';
import WorkoutsPage from './Pages/WorkoutsPage';
import TopMenu from './Components/TopMenu';
import TimerPage from './Pages/TimerPage';
import SavedWorkoutsPage from './Pages/SavedPage';
import { WorkoutContext } from './context';


const App = () => {
  const workoutContext = useContext(WorkoutContext)
  const { equipment, workouts, countdown, muscleGroups } = workoutContext;
  console.log('duration', countdown)
  console.log('equip', equipment)
  console.log('muscle groups', muscleGroups)
  console.log('workout list', workouts)

  const withMenu = (page) => {
    return (
      <React.Fragment>
        <TopMenu/>
        {page}
      </React.Fragment>
    )
  };

  return (
    <BrowserRouter>
      <Route 
        exact 
        path='/' 
        render={() => withMenu(<SplashPage />)}
      />
      <Route
        path='/workouts'
        render={() => withMenu(<WorkoutsPage />)}
      />
      <Route
        path='/timer'
        render={() => withMenu(<TimerPage />)}
      />
      <Route
        path='/saved-workouts'
        render={() => withMenu(<SavedWorkoutsPage />)}
      />
    </BrowserRouter>
  );
};

export default App;
