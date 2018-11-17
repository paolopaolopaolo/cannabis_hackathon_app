import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import * as Screens from './components/screens';

/*
 - Need to tell if a user is logged in or not, and route them
  to the authentication if they aren't.
*/

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  static propTypes = {
    user: PropTypes.object, // eslint-disable-line
  }

  static defaultProps = {
    user: {},
  }

  render() {
    const { user } = this.props;
    if (!user) {
      // User not authd.
      return (
        <Screens.Login />
      );
    }

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dash</Link></li>
            <li><Link to="/adfa">404</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={Screens.Home} />
            <Route path="/dashboard" exact component={Screens.Dash} />
            <Route path="/login" exact component={Screens.Login} />
            <Route path="/signup" exact component={Screens.SignUp} />
            <Route component={Screens.NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const ConnectedApp = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(App);

export default ConnectedApp;
