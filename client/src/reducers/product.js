import { PRODUCTS, CURRENT_PRODUCT, ORDER, MY_ORDER } from '../actions/types';

const initialState = {
  products: [],
  product: {},
  order: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS:
      return {
        ...state,
        products: payload,
        product: {},
        loading: false,
      };
    case CURRENT_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case ORDER:
    case MY_ORDER:
      return {
        ...state,
        order: payload,
        loading: false,
      };
    default:
      return state;
  }
}
