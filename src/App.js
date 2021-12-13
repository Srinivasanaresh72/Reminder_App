import React from 'react'
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
