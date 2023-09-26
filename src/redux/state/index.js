import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../reducers/store";

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
