import axios from 'axios';
import { PRODUCTS, CURRENT_PRODUCT, ORDER, MY_ORDER } from './types';

export const getProducts = () => async (dispatch) => {
  const res = await axios.get('/api/ochila');

  dispatch({
    type: PRODUCTS,
    payload: res.data,
  });
};

export const getCurrentProduct = (productId) => async (dispatch) => {
  const res = await axios.get(`/api/ochila/${productId}`);

  dispatch({
    type: CURRENT_PRODUCT,
    payload: res.data,
  });
};

export const getMyOrder = (orderId) => async (dispatch) => {
  const res = await axios.get(`/myorder/${orderId}`);

  dispatch({
    type: MY_ORDER,
    payload: res.data,
  });
};

export const placeOrder = ({ product, qty, names, mobile, address }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ product, qty, names, mobile, address });
  const order = await axios.post('/api/order', body, config);

  dispatch({
    type: ORDER,
    payload: order.data,
  });
};
