import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default () => (
  <div>
    <AppBar position="static">
      <Tabs>
        <Link className="link" to="/"><Tab label="Home" /></Link>
        <Link className="link" to="/dashboard"><Tab label="Dash" /></Link>
      </Tabs>
    </AppBar>
  </div>
);
