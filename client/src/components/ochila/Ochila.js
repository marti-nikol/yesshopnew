import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product';
import PropTypes from 'prop-types';
import Products from '../layout/products/Products';

const Ochila = ({ getProducts, products, loading }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div>
      <Products products={products} />
    </div>
  );
};
Ochila.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
});
export default connect(mapStateToProps, { getProducts })(Ochila);
