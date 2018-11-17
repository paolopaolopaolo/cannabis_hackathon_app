import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.style.css';

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

export default class HomeScreen extends Component {
  static displayName = 'HomeScreen';

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return ('Loading');
    }
    return (
      <List component="nav">
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
