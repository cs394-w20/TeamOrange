import React from 'react';
import { Header, Menu, GridColumn } from 'semantic-ui-react';
import { useLocation, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {firebaseref, firebase }from '../firebaseDb';
import 'firebase/database';	
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Grid, Box, Button} from '@material-ui/core'




const TopMenu = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {

    firebase.auth().onAuthStateChanged(setUser);

  }, []);
  const Banner = ({ user }) => (
    <div>
      { user ? <Welcome user={ user } /> : <SignIn /> }
    </div>
  );

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };


  const SignIn = () => (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
    />
  );
  const Welcome = ({ user }) => (
    <Grid container spacing={8} alignContent='stretch'>
    <Grid item xs={5}>
      <Box marginTop={1} textAlign="center" alignContent="center">

          Welcome, {user.displayName}
      </Box>
    </Grid>
    <Grid item xs={5}>

      <Box marginTop={1}>
            <Button color="primary" variant="contained" size="small " aria-label="small outlined" align="center" onClick={() => firebase.auth().signOut()}>
                Log out
            </Button>
        
      </Box>
    </Grid>
    </Grid> 
  );

  const location = useLocation();
  

  return (
    

    
    <Menu 
      pointing  
      color="blue" 
      fixed="top" 
      widths={3}
      style={{ backgroundColor: "white"}}
    >
      <Menu.Item 
        active={location.pathname==="/" | location.pathname==="/workouts"}
        as={Link} 
        to="/workouts"
      >
        <Header 
          as="h4"
          icon='stopwatch'
          color="blue"
          content="Workout" 
        />
      </Menu.Item>
      <Menu.Item active={location.pathname==="/saved-workouts"} as={Link} to="/saved-workouts">
        <Header 
          as="h4" 
          color="blue" 
          content="Favorites" 
          icon='heart'
        />
      </Menu.Item>
      <Menu.Item>
      <Banner user={user}>

      </Banner>

      </Menu.Item>
      
    </Menu>
  
  )
} 

export default TopMenu