import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducer";
import stateReducers from "../reducers/stateReducer";

const totalReducer = combineReducers({
  job: fetchReducer,
  state: stateReducers,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
