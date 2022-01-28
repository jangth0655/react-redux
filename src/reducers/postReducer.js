const postAndCommentInitialState = [];

export const postAndCommentReducer = (
  state = postAndCommentInitialState,
  action
) => {
  switch (action.type) {
    case "addPost":
      return [...state.posts, action.data];
    case "addComment":
      return [...state.comments, action.data];
    default:
      return state;
  }
};
