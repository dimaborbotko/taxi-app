import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const userCurrent = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userCurrent.actions;

export const selectUser = (state) => state.user.userInfo;

export default userCurrent.reducer;
