import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    maxWidth: 400,
    margin: '60px auto',
  },
  inputs: {
    width: '100%',
  },
};

export default class LoginScreen extends Component {
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
            <form action="#">
              <div>
                <TextField
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
            <Button size="small" color="primary">
              Login
            </Button>
            <Button size="small" color="primary">
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
