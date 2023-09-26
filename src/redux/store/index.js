import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducer";
import stateReducers from "../reducers/stateReducer";
import userReducer from "../reducers/NavbarReducer";
import profilesReducer from "../reducers/profilesReducer";

const totalReducer = combineReducers({
  job: fetchReducer,
  state: stateReducers,
  user: userReducer,
  profiles: profilesReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
