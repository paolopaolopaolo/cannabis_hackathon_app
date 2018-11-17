import React from 'react';

const Products = ({ products }) => (
    <div>
        <h1>Pain</h1>
        <h2>Treatments</h2>
        {products.map(product => (`${product}`))}
    </div>
)


export default connect(state => )
