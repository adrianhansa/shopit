import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getProductReducer,
  getProductsReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import { loginReducer, registerReducer } from "./reducers/userReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  productList: getProductsReducer,
  productDetails: getProductReducer,
  cart: cartReducer,
  userLogin: loginReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInforFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: userInforFromStorage,
};

const store = createStore(rootReducer, initialState, middleware);

export default store;
