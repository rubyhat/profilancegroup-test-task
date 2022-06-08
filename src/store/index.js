import { createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { newsReducer } from "./newsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});

export const store = createStore(rootReducer);
