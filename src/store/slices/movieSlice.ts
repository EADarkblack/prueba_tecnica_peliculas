import { createSlice } from "@reduxjs/toolkit";

//Estado inicial
const initialState = {
  movieList: [] as {}[],
  page: 1,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    addMovies: (state, action) => {
      state.movieList = [...state.movieList, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setMovieList, addMovies, setPage } = movieSlice.actions;
export default movieSlice.reducer;
