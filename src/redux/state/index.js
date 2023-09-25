import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const totalReducer = combineReducers({
  job: mainReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
