import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';
import * as Screens from './components/screens';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dash</Link></li>
            <li><Link to="/adfa">404</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={Screens.HomeScreen} />
            <Route path="/dashboard" exact component={Screens.DashScreen} />
            <Route component={Screens.NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
