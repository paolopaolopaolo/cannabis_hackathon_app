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
    const { products } = this.props;

    const product = products.find(item => (item.id === 1));
    return (
      <Card>
        <CardContent>
          <CardMedia
            className="card-media"
            image="https://www.placecage.com/gif/500/300"
          />
          <Typography variant="h2">
            Product Detail
          </Typography>
          <Typography variant="h5">
            {product.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.all,
});

export default connect(mapStateToProps)(ProductDetail);
