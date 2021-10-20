import {
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST:
      return { loading: true };
    case GET_PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default: {
      return state;
    }
  }
};
