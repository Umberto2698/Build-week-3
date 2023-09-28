import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import fetchReducer from "../reducers/fetchReducer";
import stateReducers from "../reducers/stateReducer";
import userReducer from "../reducers/NavbarReducer";
import profilesReducer from "../reducers/profilesReducer";
import searchReducer from "../reducers/searchReducer";
import homePostsReducer from "../reducers/homePostsReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favourite"],
};

const totalReducer = combineReducers({
  job: fetchReducer,
  favourite: favouriteReducer,
  state: stateReducers,
  user: userReducer,
  profiles: profilesReducer,
  search: searchReducer,
  homePosts: homePostsReducer,
});

const persistedReducer = persistReducer(persistConfig, totalReducer);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
