import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";
import ExerciseList from "./components/ExerciseList";
import EquipmentList from "./input";
import db from "./shared/exercises-alt";
import { Container } from "semantic-ui-react";
import { EquipmentContext } from "./components/EquipmentContext";
import NavMenu from "./components/NavMenu"
import "./styles/menu.css";

import { EQUIPMENT_LIST, WELCOME } from "./components/constants";

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
                <h3>{WELCOME.instruction}</h3>
                <EquipmentList items={EQUIPMENT_LIST} />
                <ExerciseList title="Exercise List" exercises={db.exercises} />
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
