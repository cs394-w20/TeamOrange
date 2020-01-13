import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";
import ExerciseList from "./components/ExerciseList";
import EquipmentList from "./input";
import db from "./shared/exercises.js";
import { Container, Menu, Header } from "semantic-ui-react";
import { EquipmentContext } from "./components/EquipmentContext";
import "./styles/menu.css";

import { EQUIPMENT_LIST } from "./components/constants";

const welcome = {
  title: "NU HIIT",
  instruction: "Select your equipment:",
  equipment_list: [
    {
      id: "1",
      title: "Jumping rope"
    },
    {
      id: "2",
      title: "Power ball"
    },
    {
      id: "3",
      title: "Dumbbells"
    },
    {
      id: "4",
      title: "Barbell / Plates"
    },
    {
      id: "5",
      title: "Pull up bar"
    },
    {
      id: "6",
      title: "Kettlebell"
    },
    {
      id: "7",
      title: "Jumping box"
    },
    {
      id: "8",
      title: "Rings"
    },
    {
      id: "9",
      title: "Resistance Band"
    },
    {
      id: "10",
      title: "Sandbag"
    }
  ]
};

const NavMenu = ({ location }) => {
  console.log(location);

  return (
    <Menu pointing inverted borderless attached color="blue">
      <Header as={Link} to="/" inverted className="nav-title">
        {welcome.title}
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

const AppMenu = withRouter(NavMenu);

const App = () => {
  const [lst, setLst] = useState([]);

  const updateLst = newLst => {
    console.log(newLst);
    setLst(newLst);
  };

  return (
    <Router>
      <EquipmentContext.Provider value={{ lst, updateLst }}>
        <div>
          <AppMenu />

          <Container>
            <Switch>
              <Route exact path="/">
                <h3>{welcome.instruction}</h3>
                <EquipmentList items={EQUIPMENT_LIST} />
                <ExerciseList title={db.title} exercises={db.exercises} />
              </Route>
              <Route path="/timer">
                <p>timer stuff</p>
              </Route>
              <Route path="/about">
                <p>about stuff</p>
              </Route>
            </Switch>
          </Container>
        </div>
      </EquipmentContext.Provider>
    </Router>
  );
};

export default App;
