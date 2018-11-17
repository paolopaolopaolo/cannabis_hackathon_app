import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class HomeScreen extends Component {
  static displayName = 'HomeScreen';

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return ('Loading');
    }
    return (
      <div>
        Hello World
      </div>
    );
  }
}
