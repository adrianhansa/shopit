import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getProductReducer,
  getProductsReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import { loginReducer, registerReducer } from "./reducers/userReducers";

const middleware = [thunk];

const rootReducer = combineReducers({
  productList: getProductsReducer,
  productDetails: getProductReducer,
  cart: cartReducer,
  userLogin: loginReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: userInfoFromStorage,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
