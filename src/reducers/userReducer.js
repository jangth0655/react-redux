const userInitialState = {
  isLoggingIn: false,
  userId: null,
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state.user, isLoggingIn: true, userId: action.data };
    case "logout":
      return { ...state.user, isLoggingIn: false, userId: null };
    default:
      return state;
  }
};
