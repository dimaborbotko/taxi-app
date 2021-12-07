import { createSlice } from "@reduxjs/toolkit";

export const firstStartSlice = createSlice({
  name: "firstStart",
  initialState: {
    value: null,
  },
  reducers: {
    start: state => {
      state.value = true;
    },
  },
});

export const { start } = firstStartSlice.actions;
export default firstStartSlice.reducer;