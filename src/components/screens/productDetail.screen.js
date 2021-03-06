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
import { withStyles } from '@material-ui/core/styles';

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
    const id = location.pathname.split('/').pop();
    const product = products.find(item => (item._id === id)); // eslint-disable-line

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
          <CardActions>
            <Button color="primary">Buy</Button>
          </CardActions>
        </Card>
      );
    }
    return (<div>Loading</div>);
  }
}

const mapStateToProps = state => ({
  products: state.products.all,
});

const StyledProductDetail = withStyles()(ProductDetail)
export default connect(mapStateToProps)(StyledProductDetail);
