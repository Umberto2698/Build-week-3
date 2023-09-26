import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReducer from "../reducers/profilesReducer";

const totalReducer = combineReducers({
  profiles: profilesReducer,
});

const store = configureStore({ reducer: totalReducer });

export default store;
