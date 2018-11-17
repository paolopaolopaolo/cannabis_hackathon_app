import React from 'react';
import { connect } from 'react-redux';
import './products.css';

const Products = ({ products }) => (
    <div>
        <h1>Pain</h1>
        <h2>Treatments</h2>
        <ul className="Products__list">
        {products.map(product => <li>
            <h3>{product.name}</h3>
            <p>{product.price} - {product.distributor}</p>
            </li>)
        }
        </ul>
    </div>
);

export default connect(state => ({
    products: state.products.all
}))(Products);
