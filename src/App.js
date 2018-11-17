import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from './actions';
import './App.css';
import * as Screens from './components/screens';
import * as Containers from './components/containers';
import PainList from './components/screens/pain/pain_list';

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
    if (!user || !user.authenticated) {
      // User not authd.
      return (
        <Screens.Login />
      );
    }

    return (
      <Router>
        <div>
          <Containers.Nav />
          <Switch>
            <Route path="/" exact component={Screens.Home} />
            <Route path="/pain" exact component={PainList} />
            <Route path="/pain/products" exact component={() => <div>PAIN PRODUCTS</div>} />
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

const mapDispatchToProps = dispatch => ({
  init: user => dispatch(Actions.Product.initApp(user)),
});


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp;
