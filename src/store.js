import { createStore } from "redux";
import { reducer } from "./reducers";

const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
  comments: [],
};

const store = createStore(reducer, initialState);

console.log(store.getState());
export default store;
