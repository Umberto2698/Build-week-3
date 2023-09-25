import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers/NavbarReducer";

const totalReducer = combineReducers({
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
