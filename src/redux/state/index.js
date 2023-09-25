import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducer";

const totalReducer = combineReducers({
  job: fetchReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
