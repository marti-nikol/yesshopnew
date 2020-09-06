import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product';
import PropTypes from 'prop-types';
import Products from './products/Products';
import Spinner from '../layout/products/product/Spinner/Spinner';
import PcGlassesText from '../layout/pcglassestext/PcGlassesText';
import DeliveryInfo from '../layout/deliveryinfo/DeliveryInfo';

const Landing = ({ getProducts, products, loading }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Products products={products} />
      <div
        className='find-all-products'
        style={{
          textAlign: 'right',
          marginRight: '7%',
          position: 'relative',
          marginTop: '-6%',
        }}
      >
        <Link to='/api/ochila'>
          <em
            className='blue-grey-text text-darken-3'
            style={{ fontSize: '1.8rem' }}
          >
            Виж всички...
          </em>{' '}
        </Link>
      </div>
      <div className='col s12 center '>
        <div>
          <i
            className='material-icons blue-grey-text text-lighten-1'
            style={{
              fontSize: '8rem',
              marginTop: '4%',
            }}
          >
            keyboard_arrow_down
          </i>
        </div>
        <div>
          <i
            className='scroll-down material-icons blue-grey-text text-lighten-4'
            style={{
              fontSize: '8rem',
              position: 'relative',
              marginTop: '-10%',
            }}
          >
            keyboard_arrow_down
          </i>
        </div>
      </div>
      <DeliveryInfo />
      <div className='col s12 center'>
        <div>
          <i
            className='material-icons blue-grey-text text-lighten-1'
            style={{
              fontSize: '8rem',
              position: 'relative',
            }}
          >
            keyboard_arrow_down
          </i>
        </div>
        <div>
          <i
            className='scroll-down material-icons blue-grey-text text-lighten-4'
            style={{
              fontSize: '8rem',
              position: 'relative',
              marginTop: '-10%',
            }}
          >
            keyboard_arrow_down
          </i>
        </div>
      </div>
      <PcGlassesText />
    </div>
  );
};

Landing.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { getProducts })(Landing);
