const userInitialState = {
  isLoggingIn: false,
  userId: null,
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state.user, isLoggingIn: true, userId: action.data };
    case "logout":
      return { ...state, isLoggingIn: false, userId: null };
    case "LOG_IN_REQUEST":
      return { ...state.user, isLoggingIn: true, userId: 2, password: "babo" };
    case "LOG_IN":
      return { ...state, success: true, userId: action.userId + 1 };

    default:
      return state;
  }
};
