import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getProductReducer,
  getProductsReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  productList: getProductsReducer,
  productDetails: getProductReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = { cart: { cartItems: cartItemsFromStorage } };

const store = createStore(rootReducer, initialState, middleware);

export default store;
