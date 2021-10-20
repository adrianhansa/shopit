import axios from "axios";
import {
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5000/products");
    dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_LIST_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/products/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
