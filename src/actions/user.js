export const asyncLogin = (data) => {
  //async action creator
  return (dispatch, getState) => {
    dispatch(loginRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          loginSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(loginInFailure(e));
    }
  };
};

const loginRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const loginSuccess = () => {
  return {
    type: "LOG_IN",
  };
};

const loginInFailure = (e) => {};

// ActionCreator => login, logout
export const login = (data) => {
  return {
    type: "login",
    data,
  };
};

export const logout = (data) => {
  return {
    type: "logout",
    data,
  };
};
