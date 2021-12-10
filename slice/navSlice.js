import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  // {
  //   location: null
  //   // {
  //   //   lat: 46.8442169648067,
  //   //   lng: 35.38044187451933,
  //   // },
  // },
  destination: null,
  // {
  //   location: null 
  //   // {
  //   //   lat: 46.8442169648067,
  //   //   lng: 35.38044187451933,
  //   // },
  // },
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
