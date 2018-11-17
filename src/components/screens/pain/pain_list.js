import React from 'react';
import { Link } from 'react-router-dom';

const PainList = () => (
    <div className="PainList__container">
        <h1>PAIN</h1>
        <Link to='/pain/products'>Type of pain</Link>
    </div>
);

export default PainList;
