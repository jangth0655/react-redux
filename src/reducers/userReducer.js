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
    case "LOG_IN_REQUEST":
      return { state };
    case "LOG_IN":
      return { state };

    default:
      return state;
  }
};
