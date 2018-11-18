import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';


const MALADIES = [
  'SLEEP',
  'PAIN',
  'ANXIETY',
  'SEX',
  'CANCER',
  'SPASMS',
  'PMS',
  'MENTOL',
  'ETC.',
];

export class HomeScreen extends Component {
  static displayName = 'HomeScreen';

  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      username: PropTypes.string,
    }),
  }

  static defaultProps = {
    user: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { loading } = this.state;
    const { user: { name, username } } = this.props;
    if (loading) {
      return ('Loading');
    }
    return (
      <List component="nav">
        <ListSubheader>
          {`Hi ${name || username}!`}
        </ListSubheader>
        <ListSubheader>What are you experiencing?</ListSubheader>
        {MALADIES.map(malady => (
          <Link to={`/${malady.toLowerCase()}`}>
            <ListItem button className="Home__list-item">
              <ListItemText>
                {malady}
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomeScreen);
