import { combineReducers, createStore } from "redux";
import users from "./moduels";

const reducer = combineReducers({
  users
});

let store = initialState => createStore(reducer);

export default store();
