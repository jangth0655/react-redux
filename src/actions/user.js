// ActionCreator => login, logout

export const login = (data) => {
  return {
    type: "login",
    data,
  };
};
