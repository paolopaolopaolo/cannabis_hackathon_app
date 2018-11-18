import React, {Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../../actions';
import './products.css';

const getProducts = async (props) => {
    const fetchedData = await fetch('http://18.234.172.206/api/v1/product/products/');
    if (fetchedData.ok) {
        const data = await fetchedData.json();
        const { result } = data;
        props.setProducts(result);
    }
}

class Products extends Component {
    componentDidMount () {
        getProducts(this.props);
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                <h1>Pain</h1>
                <h2>Treatments</h2>
                <ul className="Products__list">
                {products.map(product => <li>
                    <h3>{product.name}</h3>
                    <p>{product.price || product.pricing.unit.value} - {product.distributor || product.brand}</p>
                    </li>)
                }
                </ul>
            </div>
        );
    }
}

export default connect(state => ({
    products: state.products.all
}),
dispatch => ({
    setProducts: (data) => dispatch(Actions.Products.setProducts(data))
}))(Products);
