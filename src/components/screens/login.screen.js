import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Actions from '../../actions';

const styles = {
  container: {
    maxWidth: 400,
    margin: '60px auto',
  },
  inputs: {
    width: '100%',
  },
};

export class LoginScreen extends Component {
  static propTypes = {
    onUserSignUp: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        username: '',
        password: '',
      },
    };
  }

  genericChangeHandler = (field, event) => {
    const { user } = this.state;
    const { target: { value } } = event;

    const newUser = {};

    newUser[field] = value;
    this.setState({
      user: Object.assign({}, user, newUser),
    });
  }

  onSubmitClicked = () => {
    const { onUserSignUp } = this.props;
    const { user } = this.state;
    onUserSignUp(user);
  }

  onKeyUp = ({ nativeEvent }) => {
    if (nativeEvent.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    this.onSubmitClicked();
  }

  render() {
    const { user } = this.state;
    return (
      <div
        style={styles.container}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" component="h1">
              Login
            </Typography>
            <form action="#" onSubmit={this.onSubmit}>
              <div>
                <TextField
                  onKeyUp={this.onKeyUp}
                  style={styles.input}
                  required
                  label="Username"
                  value={user.username}
                  onChange={e => this.genericChangeHandler('username', e)}
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  onKeyUp={this.onKeyUp}
                  style={styles.input}
                  required
                  label="Password"
                  type="password"
                  value={user.password}
                  onChange={e => this.genericChangeHandler('password', e)}
                  margin="normal"
                />
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={this.onSubmitClicked}
            >
              Login
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={this.onSubmitClicked}
            >
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onUserSignUp: user => dispatch(Actions.User.loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
