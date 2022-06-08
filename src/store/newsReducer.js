const init = {
  newsList: [],
};

export const newsReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_NEWS":
      return { ...state, newsList: [...state.newsList, action.payload] };
    case "ACCEPT_NEWS":
      console.log(action.payload);
      return {
        ...state,
        newsList: state.newsList.map((news) =>
          news.id === action.payload ? { ...news, isAccepted: true } : news
        ),
      };
    case "DELETE_NEWS":
      return {
        ...state,
        newsList: state.newsList.filter((news) => news.id !== action.payload),
      };
    default:
      return state;
  }
};
