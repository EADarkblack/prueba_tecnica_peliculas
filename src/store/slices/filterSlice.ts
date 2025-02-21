import { createSlice } from "@reduxjs/toolkit";

//Estado inicial
const initialState = {
  genre: "",
  year: "",
  rating: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setGenre, setYear, setRating } = filterSlice.actions;
export default filterSlice.reducer;
