import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducer";
import stateReducers from "../reducers/stateReducer";
import userReducer from "../reducers/NavbarReducer";

const totalReducer = combineReducers({
  job: fetchReducer,
  state: stateReducers,
  user: userReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
