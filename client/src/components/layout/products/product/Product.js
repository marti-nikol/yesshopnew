import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrentProduct } from '../../../../actions/product';
import PropTypes from 'prop-types';
import OrderForm from './OrderForm';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Spinner from './Spinner/Spinner';
import { motion } from 'framer-motion';

const Product = ({ getCurrentProduct, product, loading, match }) => {
  const [loadGallery, setLoadGallery] = useState({
    loading: false,
  });
  const [loadForm, setLoadForm] = useState({
    loading: false,
  });
  useEffect(() => {
    getCurrentProduct(match.params.id);
    setTimeout(() => {
      setLoadGallery({ loading: true });
      M.AutoInit();
    }, 1000);
  }, [getCurrentProduct, match.params.id]);
  const showOrderForm = () => {
    loadForm.loading
      ? setLoadForm({ loading: false })
      : setLoadForm({ loading: true });
  };

  const galleryToProduct = loadGallery.loading ? (
    <Fragment>
      <div className='main-img'>
        <img
          src={require('../../../../images/' + product.imagePath)}
          alt='очила дамски'
          className='materialboxed'
        />
      </div>
      <div className='gall'>
        <img
          src={require('../../../../images/' + product.imagePath)}
          alt='модерни очила'
          className='materialboxed'
        />

        <img
          src={require('../../../../images/' + product.imageOne)}
          alt='модни дамски очила'
          className='materialboxed'
        />

        <img
          src={require('../../../../images/' + product.imageTwo)}
          alt='луксозни очила дамски'
          className='materialboxed'
        />

        <img
          src={require('../../../../images/' + product.imageThree)}
          alt='очила антирефлексни, дамски, модерни, красиви'
          className='materialboxed'
        />
      </div>
    </Fragment>
  ) : (
    <Spinner />
  );

  return (
    <Fragment>
      {product.imagePath && (
        <div className='row'>
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            id='productGallery'
            className='side col s5 offset-s1'
          >
            {galleryToProduct}
          </motion.div>

          <div className='main col s5'>
            <ul style={{ marginTop: '0' }}>
              <li>
                <h1
                  className='blue-grey-text text-darken-3 title'
                  style={{ marginTop: '0', marginBottom: '10px' }}
                >
                  {product.title}
                </h1>
              </li>
              <li
                className='price blue-grey-text text-darken-2'
                style={{ marginBottom: '10px' }}
              >
                {product.price + '.00 лв.'}{' '}
              </li>
              <li className='red-text text-darken-1'>
                <h5>Продукт код: {product.itemCode}</h5>
              </li>
            </ul>
            <motion.div className='form' layout>
              {' '}
              {loadForm.loading && <OrderForm product={product} />}
              {!loadForm.loading && (
                <button
                  onClick={showOrderForm}
                  className='blue btn btn-large'
                  style={{ fontSize: '1.4rem' }}
                >
                  КУПИ СЕГА
                </button>
              )}
            </motion.div>
            <div className='description card-panel'>
              <h5
                className='blue-grey-text text-darken-3'
                style={{ fontWeight: 'bold' }}
              >
                Спецификация
              </h5>
              <p className='blue-grey-text text-darken-3'>
                {product.description}
              </p>
            </div>
            <div className='col s12' style={{ padding: '0' }}>
              <div className='order-form-rullles'>
                <img
                  src={require('../../../../images/speedy.png')}
                  alt='доставка със спиди'
                  style={{ width: '100px' }}
                />
              </div>
              <div className='order-form-rullles'>
                <i className='material-icons blue-grey-text text-lighten-2 '>
                  local_shipping
                </i>{' '}
                <strong className='blue-grey-text text-darken-3'>
                  ДОСТАВКА 24 ЧАСА.
                </strong>
              </div>
              <div className='order-form-rullles'>
                <i className='blue-grey-text text-lighten-2 material-icons '>
                  check
                </i>{' '}
                <span id='totalAmounOfOrder'>
                  Доставка до офис на SPEEDY от 4.07 лв.
                </span>
              </div>
              <div className='order-form-rullles'>
                <i className='blue-grey-text text-lighten-2 material-icons '>
                  check
                </i>{' '}
                <span id='totalAmounOfOrder'>
                  Доставка до личен адрес от 5.12 лв.
                </span>
              </div>
              <div className='order-form-rullles'>
                <i className='red-text text-lighten-1 material-icons '>
                  payment
                </i>{' '}
                <span id='totalAmounOfOrder'>
                  Плащане с наложен платеж след преглед и тест. 14 дни право на
                  връщане!
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Product.propTypes = {
  getCurrentProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  loading: state.product.loading,
});
export default connect(mapStateToProps, { getCurrentProduct })(Product);
