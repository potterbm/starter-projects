import { applyMiddleware, compose, createStore } from "redux";
import combinedReducer from "./reducers";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

const middleware = [
  applyMiddleware(thunk),
  applyMiddleware(promiseMiddleware()),
];

if (window.devToolsExtension) middleware.push(window.devToolsExtension());

export default createStore(combinedReducer, compose(...middleware));
