import { combineReducers } from "redux";

const appReducer = combineReducers({});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
