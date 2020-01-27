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
        active={location.pathname==="/" | location.pathname==="/workouts" }
        as={Link} 
        to="/workouts"
      >
        <Header 
          as="h5"
          icon='heartbeat'
          color="blue"
          content="NU HIIT" 
        />
      </Menu.Item>
      <Menu.Item active={location.pathname==="/saved-workouts"} as={Link} to="/saved-workouts">
        <Header 
          as="h5" 
          color="blue" 
          content="SAVED" 
          icon='download'
        />
      </Menu.Item>
    </Menu>
  )
} 

export default TopMenu