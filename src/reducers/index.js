import { combineReducers } from "redux";
import { postAndCommentReducer } from "./postReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  posts: postAndCommentReducer,
  comments: postAndCommentReducer,
});

export default rootReducer;
