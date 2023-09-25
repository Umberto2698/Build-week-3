import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/NavbarReducer";

const totalReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
