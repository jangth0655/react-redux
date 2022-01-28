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
