import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <Fragment>
      <div
        className='row products'
        style={{ position: 'relative', paddingLeft: '2%' }}
      >
        {products !== null &&
          products.length > 0 &&
          products.map((product, idx) => (
            <Link
              key={product._id}
              to={`/api/ochila/${product._id}`}
              style={{ marginTop: '8px' }}
              className={idx % 2 === 0 ? 'item-a' : 'item-b'}
            >
              <div className='card' style={{ width: '100%', padding: '0' }}>
                <div className='card-image' style={{ height: '310px' }}>
                  <img
                    className='product-img-cover'
                    src={require(`../../../images/${product.imagePath}`)}
                    alt=''
                    style={{ height: '280px' }}
                  />
                </div>
                <div
                  className='card-content blue-grey-text text-darken-3'
                  style={{ padding: '0 24px 20px 24px' }}
                >
                  <h5>{product.title.split(' ').slice(0, 6).join(' ')}</h5>
                  <span>
                    {product.description.split(' ').slice(0, 15).join(' ') +
                      '...'}
                  </span>
                </div>
                <div
                  className='card-action'
                  style={{ padding: '0 24px 10px 24px' }}
                >
                  <h5 className='blue-text darken-3'>
                    {product.price + '.00 лв.'}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Fragment>
  );
};

export default Products;
