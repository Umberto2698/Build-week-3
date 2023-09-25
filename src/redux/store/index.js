import { combineReducers, configureStore } from "@reduxjs/toolkit";

const totalReducer = combineReducers({});

const store = configureStore({ reducer: totalReducer });

export default store;
