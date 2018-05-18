import { combineReducers, createStore } from "redux";
import users from "./moduels/users"; //이 부분 살짝 의심감. reducer를 import해야하는것 아닌가?

const reducer = combineReducers({
  users
});

let store = initialState => createStore(reducer);

export default store();
