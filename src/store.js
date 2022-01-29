import { applyMiddleware, createStore } from "redux";
import { asyncLogin } from "./actions/user";
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
  //console.log("action logging", action);
  // 기능 추가
  dispatch(action);
  // dispatch 후에 기능 추가
  //console.log("finish action", action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    //비동기인경우 action을 함수로 두겠다.
    return action(store.dispatch, store.getState);
  }
  return dispatch(action); // 기본
};

const enhancer = applyMiddleware(firstMiddleWare, thunkMiddleware);

const store = createStore(rootReducer, initialState, enhancer);

store.dispatch(
  asyncLogin({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

console.log(store.getState());

export default store;
