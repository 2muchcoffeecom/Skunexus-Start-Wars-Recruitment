import './App.css';
import React from "react";

import Planets from '../Planets';
import Films from "../Films";
import Residents from "../Residents";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Planets />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/residents">
            <Residents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
