import { configureStore } from "@reduxjs/toolkit";
import { movieCoreApi } from "./services/movieDatabase";
import query from "./services/query";
import queryReducer from './services/query';

export const store = configureStore({
  reducer: {
    [movieCoreApi.reducerPath]: movieCoreApi.reducer,
    query: queryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieCoreApi.middleware),
});
