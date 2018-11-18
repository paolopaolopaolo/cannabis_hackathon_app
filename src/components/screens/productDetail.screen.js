import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './pain/products.css';

// eslint-disable-next-line
export class ProductDetail extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  }

  static defaultProps = {
    products: [],
  }

  render() {
    const { products, location } = this.props; // eslint-disable-line
    console.log(location);
    const id = location.pathname.split('/').pop();
    const product = products.find(item => (item._id === id || item.id === 1));

    let card;
    if (product.photos[0]) {
      card = (
        <CardMedia
          className="card-media"
          image={product.photos[0]}
        />
      );
    }

    if (product) {
      return (
        <Card>
          <CardContent>
            {card}
            <Typography variant="h2">
              Product Detail
            </Typography>
            <Typography variant="h5">
              {product.name}
            </Typography>
            <p>
              {product.description}
            </p>
          </CardContent>
        </Card>
      );
    }
    return (<div>Loading</div>);
  }
}

const mapStateToProps = state => ({
  products: state.products.all,
});

export default connect(mapStateToProps)(ProductDetail);
