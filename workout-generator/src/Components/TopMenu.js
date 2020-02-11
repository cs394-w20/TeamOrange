import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { useLocation, Link } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Grid, Box, Button } from '@material-ui/core'


const TopMenu = ({user}) => {
  const location = useLocation();
  return (
    <Menu
      pointing
      color="blue"
      fixed="top"
      widths={2}
      style={{ backgroundColor: "white" }}
    >
      <Menu.Item
        active={location.pathname === "/" | location.pathname === "/workouts"}
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
      <Menu.Item active={location.pathname === "/profile"} as={Link} to="/profile">
        <Header
          as="h4"
          color="blue"
          content="My Profile"
          icon='user'
        />
      </Menu.Item>
    </Menu>
  )
}

export default TopMenu