import React from 'react';
import { Header, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { WELCOME } from './constants';

const Footer = ({ location }) => {
  return (
    <Menu pointing inverted borderless attached color="blue">
      <Container>
        <Menu.Item as= {Link}>
          <a href="https://github.com/cs394-w20/TeamOrange">Team Orange CS394 Riesbeck 2020</a>
        </Menu.Item>
        <Menu.Item>
          Github Repo
        </Menu.Item>
        <Menu.Item>
          Contact Us
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Footer;