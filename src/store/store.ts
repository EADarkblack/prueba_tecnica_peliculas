import { configureStore } from "@reduxjs/toolkit";

//Slices
import movieReducer from "./slices/movieSlice";
import filterReducer from "./slices/filterSlice";
import searchReducer from "./slices/searchSlice";
import darkModeReducer from "./slices/darkModeSlice";
import authReducer from "./slices/authSlice";
import favoriteReducer from "./slices/favoriteSlice";

//Services
import { movieApi } from "services/movieApi";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    filter: filterReducer,
    search: searchReducer,
    darkMode: darkModeReducer,
    auth: authReducer,
    favoriteMovie: favoriteReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
