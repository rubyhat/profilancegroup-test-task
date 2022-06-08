const init = {};

export const newsReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_NEWS":
      return { ...state, title: "123" };
    default:
      return state;
  }
};
