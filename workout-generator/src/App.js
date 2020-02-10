import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import SplashPage from './Pages/SplashPage';
import WorkoutsPage from './Pages/WorkoutsPage';
import TopMenu from './Components/TopMenu';
import SavedWorkoutsPage from './Pages/SavedPage';
import ProfilePage from './Pages/ProfilePage'
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
      <Container>
        <TopMenu/>
        
        {page}
      </Container>
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
        path='/saved-workouts'
        render={() => withMenu(<SavedWorkoutsPage />)}
      />
      <Route
        path='/profile'
        render={() => withMenu(<ProfilePage />)}
      />
    </BrowserRouter>
  );
};

export default App;
