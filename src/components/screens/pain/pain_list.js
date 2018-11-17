import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';

const painTypes = [
  'Injury',
  'Menstrual',
  'Arthritis',
  'Illness',
  'Flare-Up',
];

const PainList = () => (
  <div className="PainList__container">
    <List component="nav">
      <ListSubheader>Type of Pains</ListSubheader>
      <Link to="/pain/products">
        <ListItem button>
          <ListItemText>
            Chronic
          </ListItemText>
        </ListItem>
      </Link>
      {
        painTypes.map(item => (
          <Link to="/pain/products">
            <ListItem button key={item}>
              <ListItemText>
                {item}
              </ListItemText>
            </ListItem>
          </Link>
        ))
      }
    </List>
  </div>
);

export default PainList;
