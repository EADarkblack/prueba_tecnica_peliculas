import { createSlice } from "@reduxjs/toolkit";

const favorites = localStorage.getItem("favorites");

const initialState = {
  favMovieList: JSON.parse(favorites || "[]"),
};

const favoriteSlice = createSlice({
  name: "favoriteMovie",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const movieId = action.payload;
      if (state.favMovieList.includes(movieId)) {
        state.favMovieList = state.favMovieList.filter(
          (id: number) => id !== movieId
        );
      } else {
        state.favMovieList.push(movieId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favMovieList));
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
