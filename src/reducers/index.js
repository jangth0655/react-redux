export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoggingIn: action.data };
    case "addPost":
      return { ...state, posts: [...state.posts, action.data] };
    case "addComment":
      return { ...state, comments: [...state.comments, action.data] };
    default:
      return state;
  }
};
