import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { useLocation, Link } from 'react-router-dom';

const TopMenu = () => {
  const location = useLocation()
  

  return (
    <Menu 
      pointing  
      color="blue" 
      attached="top" 
      widths={2}
      style={{ backgroundColor: "white"}}
    >
      <Menu.Item 
        active={location.pathname==="/" | location.pathname==="/workouts" ? false : true}
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
    </Menu>
  )
} 

export default TopMenu