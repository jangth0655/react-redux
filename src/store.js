import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  user: {
    isLoggingIn: true,
    useId: null,
  },
  posts: [],
  comments: [],
};

const firstMiddleWare = (store) => (dispatch) => (action) => {
  console.log("action logging", action);
  // 기능 추가
  dispatch(action);
  // dispatch 후에 기능 추가
  console.log("finish action", action);
};

const enhancer = applyMiddleware(firstMiddleWare);

const store = createStore(rootReducer, initialState, enhancer);

console.log(store.getState());
export default store;
