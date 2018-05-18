import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "redux/moduels/users"; //이 부분 살짝 의심감. reducer를 import해야하는것 아닌가?
import thunk from "redux-thunk";

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === "development") {
  const logger = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  users
});

let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
