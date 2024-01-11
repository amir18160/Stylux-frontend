import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          className='home-card-image'
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className='text-decoration-none'>
          <Card.Title as='div' className='text-decoration-none'>
            <h6 className='home-product-header'>{product.name}</h6>
          </Card.Title>
        </Link>

        <div className='home-product-rating'>
          <Card.Text as='div' className='flex-center'>
            <Rating
              value={product.rating}
              text={`${product.numReviews}`}
              className='text-center'
            />
          </Card.Text>
        </div>

        <Card.Text as='h3' className='text-center mt-4 home-product-price'>
          تومان {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
