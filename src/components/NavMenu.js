import React from 'react';
import { Header, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { WELCOME } from './constants';

const NavMenu = ({ location }) => {
  console.log(location);

  return (
    <Menu pointing inverted borderless attached color="blue">
      <Header as={Link} to="/" inverted className="nav-title">
        {WELCOME.title}
      </Header>
      <Container>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={location.pathname === "/"}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/timer"
          name="timer"
          active={location.pathname === "/timer"}
        >
          Timer
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          active={location.pathname === "/about"}
        >
          About
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavMenu