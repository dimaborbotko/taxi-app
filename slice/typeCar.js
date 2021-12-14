import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  standart: null,
  van: null,
  premium: null,
};

export const typeCar = createSlice({
  name: "type",
  initialState,
  reducers: {
    setStandart: (state, action) => {
      state.standart = action.payload;
    },
    setVan: (state, action) => {
      state.van = action.payload;
    },
    setPremium: (state, action) => {
      state.premium = action.payload;
    },
  },
});

export const { setStandart, setVan, setPremium } = typeCar.actions;

//Selectors
export const selectStandart = (state) => state.type.standart
export const selectVan = (state) => state.type.van
export const selectPremium = (state) => state.type.premium

export default typeCar.reducer;
