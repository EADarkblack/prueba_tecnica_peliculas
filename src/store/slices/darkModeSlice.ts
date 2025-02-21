import { createSlice } from "@reduxjs/toolkit";

//Estado inicial
const storedDarkMode = localStorage.getItem("darkMode");

const initialState = {
  isDark: (storedDarkMode && JSON.parse(storedDarkMode)) || false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    setDark: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const { setDark } = darkModeSlice.actions;
export default darkModeSlice.reducer;
