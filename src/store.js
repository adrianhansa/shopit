import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getProductReducer,
  getProductsReducer,
} from "./reducers/productReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  productList: getProductsReducer,
  productDetails: getProductReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState, middleware);

export default store;
