import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "load",
  initialState: {
    value: false,
  },
  reducers: {
    loading: state => {
      state.value = true;
    },
  },
});

export const { loading } = loadingSlice.actions;
export default loadingSlice.reducer;
