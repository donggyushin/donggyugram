import users from "./moduels/users";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";

const history = createHistory();

const reducer = combineReducers({
  users,
  routing: routerReducer,
  i18nState
});

const middlewares = [thunk, routerMiddleware(history)];

const env = process.env.NODE_ENV;

console.log(env);

if (env === "development") {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

let store;
// = initialState =>
// createStore(reducer, applyMiddleware(...middlewares));

if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
