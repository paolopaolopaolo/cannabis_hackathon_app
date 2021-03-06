import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Actions from '../../../actions';
import './products.css';


const getProducts = async (props) => {
  const fetchedData = await fetch('http://18.234.172.206/api/v1/product/products/');
  if (fetchedData.ok) {
    const data = await fetchedData.json();
    const { result } = data;
    props.setProducts(result);
  }
};

class Products extends Component {
  static propTypes = {
    products: PropTypes.array, // eslint-disable-line
  }

  static defaultProps = {
    products: [],
  }

  componentDidMount() {
    getProducts(this.props);
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>Pain</h1>
        <h2>Treatments</h2>
        <ul className="Products__list">
          { products.length === 0 && (
            <div>Loading...</div>
          )}
          {products.map(product => (
            <Link to={`/pain/products/${product._id}`}>
              <li>
                <h3>{product.name}</h3>
                <p>
                  {product.price || product.pricing.unit.value} - {product.distributor || product.brand}
                </p>
              </li>
            </Link>
          ))
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
