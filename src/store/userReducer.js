const init = {
  login: "Гость",
  password: "",
  isAdmin: false,
  isLogin: false,
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "CLEAR_USER":
      return { ...init };
    default:
      return state;
  }
};
