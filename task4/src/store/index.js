import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";

const rootReducer = combineReducers({
  main: mainSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
