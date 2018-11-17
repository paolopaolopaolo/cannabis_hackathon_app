import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.style.css';

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
]

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
      <div className='Home__container'>
        What are you experiencing?
        <ul className='Home__list'>
            {MALADIES.map((malady) => {
                return <li className='Home__list-item'><Link to={`/${malady.toLowerCase()}`}>{malady}</Link></li>
            })}
        </ul>
      </div>
    );
  }
}
