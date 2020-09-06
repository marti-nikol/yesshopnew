import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { placeOrder } from '../../../../actions/product';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const OrderForm = ({ placeOrder, product, order }) => {
  const [redirectMyOrder, setRedirectMyOrder] = useState({
    redirect: false,
  });
  const [orderData, setOrderData] = useState({
    product: { product },
    qty: '1',
    names: '',
    mobile: '',
    address: '',
  });

  const { qty, names, mobile, address } = orderData;

  const onChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const placeCurrentOrder = (e) => {
    e.preventDefault();
    placeOrder({ product, qty, names, mobile, address });

    setOrderData({
      product: { product },
      qty: '1',
      names: '',
      mobile: '',
      address: '',
    });
  };

  if (redirectMyOrder.redirect && order._id) {
    return <Redirect to={`/myorder/${order._id}`} />;
  }

  const redirectToMyOrder = () => {
    setTimeout(() => setRedirectMyOrder({ redirect: true }), 1000);
  };

  const totalAmounOfOrder = () => {
    const qty = document.querySelector('#productQty');
    document.querySelector('#totalAmounOfOrder').innerHTML =
      'Обща стойност: ' +
      parseInt(qty.value) * parseInt(product.price) +
      '.00 лв.';
  };

  const decrQty = () => {
    const qtyField = document.querySelector('#productQty');
    //const incrButton = document.querySelector('#incrButton');
    if (parseInt(qtyField.value) <= 1) {
      totalAmounOfOrder();
      setOrderData({ ...orderData, qty: '1' });
      return (qtyField.value = 1);
    } else {
      setOrderData({ ...orderData, qty: parseInt(qtyField.value) - 1 });
      qtyField.value = parseInt(qtyField.value) - 1;
      totalAmounOfOrder();
    }
  };

  const incrQty = () => {
    const qtyField = document.querySelector('#productQty');
    //const incrButton = document.querySelector('#incrButton');
    if (parseInt(qtyField.value) >= 10) {
      totalAmounOfOrder();
      setOrderData({ ...orderData, qty: '10' });
      return (qtyField.value = 10);
    } else {
      setOrderData({ ...orderData, qty: parseInt(qtyField.value) + 1 });
      qtyField.value = parseInt(qtyField.value) + 1;
      totalAmounOfOrder();
    }
  };

  return (
    <Fragment>
      <form onSubmit={placeCurrentOrder}>
        <input type='hidden' name='product' value={product} />
        <div
          className='row center'
          style={{ width: '40%', marginLeft: '30%', marginBottom: '0' }}
        >
          <div
            className='qty-form'
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'no-wrap',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <div
              className='col s3 white'
              style={{
                height: '60%',
                marginBottom: '0',
                borderRadius: '5px',
                padding: '7px 0 0 0',
                cursor: 'pointer',
                border: '2px solid #d3d3d3',
              }}
              onClick={decrQty}
            >
              <i className='material-icons blue-grey-text'>remove</i>
            </div>
            <div className='col s6'>
              <label for='productQty'>Количество</label>
              <input
                id='productQty'
                type='number'
                name='qty'
                min='1'
                max='10'
                value={qty}
                onChange={(e) => onChange(e)}
                className='col s5 blue-grey-text text-darken-2'
                style={{
                  textAlign: 'center',
                  fontSize: '2rem',
                  margin: '0',
                  height: '2.7rem',
                  width: '100%',
                }}
              />
            </div>

            <div
              className='col s3 white'
              style={{
                height: '40px',
                borderRadius: '5px',
                padding: '7px 0 0 0',
                cursor: 'pointer',
                border: '2px solid #d3d3d3',
              }}
              onClick={incrQty}
            >
              <i className='blue-grey-text material-icons'>add</i>
            </div>
          </div>
        </div>
        <input
          type='text'
          name='names'
          className='validate'
          placeholder='Въведи имена'
          value={names}
          onChange={(e) => onChange(e)}
        />
        <input
          type='text'
          name='mobile'
          className='validate'
          placeholder='Въведи телефон'
          value={mobile}
          onChange={(e) => onChange(e)}
        />
        <input
          type='text'
          name='address'
          className='validate'
          placeholder='Въведи офис на спиди/адрес за доставка'
          value={address}
          onChange={(e) => onChange(e)}
        />
        <div className='col s12' style={{ padding: '0' }}>
          <div className='order-form-rullles'>
            <i className='green-text text-lighten-1 material-icons '>
              monetization_on
            </i>{' '}
            <h6
              className='red-text text-darken-1'
              id='totalAmounOfOrder'
              style={{ marginTop: '3px', marginBottom: '5px' }}
            >
              Обща стойност: {product.price}.00 лв.
            </h6>
          </div>
        </div>

        <button
          onClick={redirectToMyOrder}
          type='submit'
          className='blue btn btn-large'
          style={{
            width: '100%',
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
          }}
        >
          КУПИ СЕГА <i className='white-text material-icons '>play_arrow</i>
        </button>
      </form>
    </Fragment>
  );
};

OrderForm.propTypes = {
  placeOrder: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  order: state.product.order,
});
export default connect(mapStateToProps, { placeOrder })(OrderForm);
