import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import ExerciseList from "./components/ExerciseList";
import EquipmentList from "./input";
import db from "./shared/exercises.js";
import { Container, Menu, Checkbox } from "semantic-ui-react";
import { EquipmentContext } from "./components/Equipment-context";

const welcome = {
  title: "NU-HIIT",
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
          <h1>{welcome.title}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <h3>{welcome.instruction}</h3>
              <EquipmentList items={welcome.equipment_list} />
              <ExerciseList title={db.title} exercises={db.exercises} />
            </Route>
            <Route path="/timer">
              <p>timer stuff</p>
            </Route>
            <Route path="/about">
              <p>about stuff</p>
            </Route>
          </Switch>
        </div>
      </EquipmentContext.Provider>
    </Router>
  );
};

export default App;
