import React from 'react';
import { Link } from 'react-router-dom';

const PainList = () => (
    <div className="PainList__container">
        <h1>PAIN</h1>
        Type of Pains
        <ul className='PainList__list'>
            <li><Link to='/pain/products'>Chronic</Link></li>
            <li>Injury</li>
            <li>Menstrual</li>
            <li>Arthritis</li>
            <li>Illness</li>
            <li>Flare-Up</li>
        </ul>

    </div>
);

export default PainList;
