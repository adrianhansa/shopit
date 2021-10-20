import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = composeWithDevTools(applyMiddleware([...thunk]));

const rootReducer = combineReducers({});

const initialState = { name: "Adi" };

const store = createStore(rootReducer, initialState, middleware);

export default store;
